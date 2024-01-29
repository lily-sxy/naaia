"use client"
import React, { useState } from 'react'
import Link from 'next/link';

function Dropdown(props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item?.submenu ? item.submenu : [];
  const hoverLink = 'bg-highlight w-[130px] rounded-md hover:bg-blue-500 m-0 p-0 pr-0';
  const activeHoverLink = 'rounded-md w-[130px] bg-blue-200 m-0 p-0 pr-0';

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? 'flex' : 'hidden';
  
  // calculate the number of dropdown menu items, make a dynamic height of dropdown menu rather the fixed height.
  const numSubmenus = menuItems.length;
  const submenuHeight = menuItems[0]?.offsetHeight || 0;
  const menuHeight = numSubmenus * submenuHeight;
  

  // If mouse hover on button then open dropdown, change the arrow to up-arrow, when dropdown closed change arrow back to original state
  return (
    <div className="relative mx-10 my-4" onMouseLeave={() => setIsOpen(false)}>
      <button 
        className={isOpen ? activeHoverLink : hoverLink} 
        onMouseEnter={() => setIsOpen(true)}
      >
        {item.title} <span className="ml-1" style={{ color: 'blue' }}>{isOpen ? '\u25B2' : '\u25BC'}</span>
      </button>
      <div
        className={`absolute top-full z-30 w-[170px] h-[${menuHeight}px] flex flex-col py-5 bg-blue-200 rounded-md gap-4 ${transClass}`}
        onMouseEnter={() => setIsOpen(true)}
      >
        {menuItems.map((menuItem) => (
          <Link
            key={menuItem.url}
            className="hover:bg-white hover:text-zinc-500 px-4 py-1 text-left"
            href={menuItem?.url || ''}
            onClick={toggle}
          >
            {menuItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}


export default Dropdown;