"use client";

import Link from "next/link";
import heroImg from "../../public/img/benefit_pic.jpg";
import Container from "../../components/container";
import Image from "next/image";

export default function MembershipPage() {
  return (
    <>
      <Container className="flex flex-wrap mx-10">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="620"
              height="620"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              Membership
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-xl">
              Members of the North America Artificial Intelligence Association
              (NAAIA) enjoy a range of benefits tailored to enhance their
              engagement with the AI community:
            </p>
            <div className="flex items-start mt-1 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 "></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Eligibility: Open to individuals and organizations with an
                  interest in artificial intelligence.
                </h4>
              </div>
            </div>
            <div className="flex items-start mt-1 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 "></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Categories: Regular, Student and Corporate.
                </h4>
              </div>
            </div>
            <div className="flex items-start mt-1 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 "></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Fees: $30(regular membership), $15(student membership),
                  $100(Corporate)
                </h4>
              </div>
            </div>
            <div className="flex items-start mt-1 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 "></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Rights and Responsibilities: Include voting in general
                  meetings, eligibility to hold office, and participation in
                  association events.
                </h4>
              </div>
            </div>
            <div className="flex items-start mt-1 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 "></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Dues: Structured annually, with rates varying by membership
                  category.
                </h4>
              </div>
            </div>
            <div className="flex items-start mt-1 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-4 h-4 "></div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Termination: Membership can be terminated for non-payment of
                  dues or violation of the association's code of ethics.
                </h4>
              </div>
            </div>

            <div className="w-full mt-5">
              <Link
                href="/"
                className="w-full px-6 py-2 mt-5 text-center text-white bg-indigo-600 rounded-md"
              >
                Become A Member
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
