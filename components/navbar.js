"use client"

import React from "react"
import Link from "next/link";
import Image from "next/image"
import logoImg from "../public/img/logo.png";
import Dropdown from "./dropdown";
import { Disclosure } from "@headlessui/react";

const menuItems = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "About Us",
    children: [
      {
        title: "Who are we?",
        route: "/about-us"
      },
      {
        title: "Executive",
        route: "/about-us/executive"
      },
      {
        title: "AI Bylaw",
        route: "/about-us/bylaw"
      },
      {
        title: "Contact",
        route: "/about-us/contact"
      }
    ]
  },
  {
    title: "Membership",
    route: "/membership"
  },
]


export default function Navbar () {
   return (
      <nav className="container sticky top-0 bg-white flex flex-wrap items-center justify-between p-3 mx-auto lg:justify-between xl:px-0">
         <Disclosure>
          {({ open }) => (
          
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto mx-100">
          <Link href="/">
          <span className="flex items-center space-x-2 text-2xl bg-indigo-600">
            <span>
              <Image
                src={logoImg}
                alt="NAAIA"
                width="140"
                height="70"
              />
            </span>
          </span>
          </Link>
        
          <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {menuItems.map((item,index) => {
                    return item.hasOwnProperty("children") ? (
                     <Dropdown key={item} item={item} />
                    ) : (
                     <Link key={index} className="inline-block px-10 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none" href={item?.route || ""}>
                       {item.title}
                     </Link>
                    )
                  })}

                    <Link href="/sign-in" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        Sign in
                    </Link>
                </Disclosure.Panel>
              </div>
          
          )}
        </Disclosure>
  
        <div className="hidden text-center lg:flex lg:items-center">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown key={item} item={item} />
            ) : (
              <Link key={item.title} className="inline-block px-10 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none" href={item?.route || ""}>
                {item.title}
              </Link>
          )
        })}
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex">
          <Link href="/sign-in" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Sign in
          </Link> 
        </div>
      </nav>
  );
}

