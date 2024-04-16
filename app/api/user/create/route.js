import { SHA256 as sha256 } from "crypto-js";
import prisma from "../../../../lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server"; // Correct import

// Named export for the POST method
export async function POST(req) {
  
  const j = await req.json();
  //const body = j.body
  
  const body = JSON.parse(j.body);
  console.log('Request Body:', body);
  
  try {
    const response = await createUserHandler(body);
    console.log(response)
    // Ensure that the response is returned
    return response;
  } catch (error) {
    console.error('Error:', error);
    // Handle the error and return a response or throw a new error
    return NextResponse.status(500).json({ error: 'Internal Server Error' });
  }
}

// Other functions and constants can remain as they are

export const hashPassword = (string) => {
  return sha256(string).toString();
};

async function createUserHandler(userdata) {
  let errors = [];
  
  const email = await userdata.email
  const password = await userdata.password

  console.log('hi')
  console.log('req.body', userdata)
  
  console.log('email:', userdata.email);

  // Check if the email is registered in the database
  const registereduser = await prisma.user.findUnique({where: {email: email}});
  
  console.log(registereduser)

  if (registereduser) {
    return NextResponse.json({ message: "The Email is registered" }, {status: 400});
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    consol.log("password error")
    errors.push("password length should be more than 6 characters");
    return NextResponse.json({ errors }, {status: 400});
  }

  console.log("creating user")

  try {
    const user = await prisma.user.create({
      data: { ...userdata, password: hashPassword(password) }, // Change db.user.create to prisma.user.create
    });
    console.log("successful")
    return NextResponse.json({ user }, { status: 200 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return NextResponse.json({ message:e.message }, {status: 400});
      }
      return NextResponse.json({ message: e.message }, {status: 400});
    }
  }
}