"use client";

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigation = ["Home", "About Us", "Membership"];

  return (
    <div className="w-full">
      <nav className="container flex flex-wrap items-center justify-between p-1.5 w-full mx-5 lg:justify-between xl:px-0 bg-white">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto mx-100">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="NAAIA"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>NAAIA</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
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
                  <>
                    <Link
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
                    >
                      Home
                    </Link>

                    <Link
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/membership"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
                    >
                      Membership
                    </Link>

                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Sign in
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                href="/"
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
              >
                Home
              </Link>
            </li>

            <Menu as="div" className="relative inline-block text-center">
              <div>
                <Menu.Button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100">
                  About Us
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 hover:text-indigo-500"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          Contact
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 hover:text-indigo-500"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          By-Law
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 hover:text-indigo-500"
                              : "text-gray-700",
                            "block px-4 py-2 text-base"
                          )}
                        >
                          Current executive
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <li className="mr-3 nav__item">
              <Link
                href="/membership"
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100"
              >
                Membership
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/login"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
