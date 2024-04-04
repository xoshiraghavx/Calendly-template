import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Individuals', href: '#'},
  { name: 'Team', href: '#'},
  { name: 'Enterprise', href: '#'},
  { 
    name: 'Product', 
    producDropdown: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Integration', href: '#' },
    ],
  },
  { name: 'Pricing', href: '#' },
  { 
    name: 'Resource', 
    resourceDropdown: [
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Community', href: '#' },
    ],
  },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showResourceDropdown, setShowResourceDropdown] = useState(false);

  const handleProductClick = () => {
    setShowProductDropdown(!showProductDropdown);
    setShowResourceDropdown(false); // Close the resource dropdown if open
  };

  const handleResourceClick = () => {
    setShowResourceDropdown(!showResourceDropdown);
    setShowProductDropdown(false); // Close the product dropdown if open
  };

  return (
    <>
    <header className="absolute inset-x-0 top-0 z-50 shadow-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="./Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-[--primary-color]" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Product' ? (
                  <div className="flex items-center text-black hover:text-[--primary-color]">
                  <a
                    href={item.href}
                    className="text-sm font-bold leading-6 "
                    onClick={handleProductClick}
                  >
                    {item.name}
                  </a>
                  <ChevronDownIcon className="w-4 h-4 m-1" />
                </div>
                ) : item.name === 'Resource' ? (
                  <div className="flex items-center text-black hover:text-[--primary-color]">
                  <a
                    href={item.href}
                    className="text-sm font-bold leading-6"
                    onClick={handleResourceClick}
                  >
                    {item.name}
                  </a>
                  <ChevronDownIcon className="w-4 h-4 m-1" />
                  </div>
                ) : (
                  <a href={item.href} className="text-sm font-bold leading-6 text-black hover:text-[--primary-color]">
                    {item.name}
                  </a>
                )}
                {item.name === 'Product' && showProductDropdown && (
                  <div className="absolute left-0 mt-2 py-2 bg-white shadow-md rounded-md w-[120px]">
                    {item.producDropdown.map((producDropdown) => (
                      <a key={producDropdown.name} href={producDropdown.href} className="block px-4 py-2 hover:bg-gray-100">
                        {producDropdown.name}
                      </a>
                    ))}
                  </div>
                )}
                {item.name === 'Resource' && showResourceDropdown && (
                  <div className="absolute left-0 mt-2 py-2 bg-white shadow-md rounded-md w-[150px]">
                    {item.resourceDropdown.map((resourceDropdown) => (
                      <a key={resourceDropdown.name} href={resourceDropdown.href} className="block px-4 py-2 hover:bg-gray-100">
                        {resourceDropdown.name}
                      </a>
                    ))}
                  </div>
              )}
            </div>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
      <div>
        <a href="#" className="text-sm font-bold leading-6 text-gray-900 ">
          Log in
        </a> 
      </div>
      <div>
        <a href="#" className="text-sm font-bold leading-6 rounded-full bg-[--primary-color] py-3 px-4 text-white hover:bg-[#004EBA] hover:duration-300">
            Get Started
        </a>
      </div>
    </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="./Logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-[--primary-color]" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex gap-2 flex-col">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block px-3 py-2.5 text-base font-bold w-fit rounded-full bg-[--primary-color] py-3 px-4 text-white hover:bg-[#004EBA] hover:duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </>
  )
}

export default NavBar