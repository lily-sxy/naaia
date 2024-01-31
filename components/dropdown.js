"use client"

import React, { useState } from "react"
import Link from "next/link"

export default function Dropdown(props) {
  const { item } = props
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = item?.children ? item.children : []

  const toggle = () => {
    setIsOpen(old => !old)
  }

  const transClass = isOpen ? "flex" : "hidden"
  
  return (
    <>
      <div className="relative">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center px-10 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none" type="button" onClick={toggle} 
        >
          {item.title}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
       
        <div id="dropdown" 
          className={`absolute top-18 z-30 w-[178px] min-h-[100px] inline-block text-left flex-col py-4 bg-white shadow-2xl rounded-md ${transClass}`}>
          {menuItems.map(item => (
            <Link
              key={item.ruote}
              className="hover:bg-indigo-100 hover:text-indigo-600 px-10 py-1"
              href={item?.route || ""}
              onClick={toggle}
            >
              {item.title}
            </Link>
            ))}
        </div> 
       
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20"
          onClick={toggle}
        ></div>
      ) : (<></>)}
    </>
  )
}
