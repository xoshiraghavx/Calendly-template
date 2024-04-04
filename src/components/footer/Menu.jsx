import React from 'react'

const Menu = () => {
    const aboutSection = [
        { id: 1, text: 'About Calendly', link: '#' },
        { id: 2, text: 'Contact Sales', link: '#' },
        { id: 3, text: 'Newsroom', link: '#' },
        { id: 4, text: 'Careers', link: '#' },
        { id: 5, text: 'Security', link: '#' }
    ];
    
    const solutionSection = [
    { id: 1, text: 'Customer Success', link: '#' },
    { id: 2, text: 'Sales', link: '#' },
    { id: 3, text: 'Recruiting', link: '#' },
    { id: 4, text: 'Information Technology', link: '#' },
    { id: 5, text: 'Marketing', link: '#' }
    ];

    const popularSection = [
        { id: 1, text: 'Embed Calendly', link: '#' },
        { id: 2, text: 'Availability', link: '#' },
        { id: 3, text: 'Sending Notifications', link: '#' },
        { id: 4, text: 'Using Calendly Mobile', link: '#' },
    ];
    
    const supportSection = [
    { id: 1, text: 'Help Center', link: '#' },
    { id: 2, text: 'Video Tutorials', link: '#' },
    { id: 3, text: 'Cookie Settings', link: '#' }
    ];
    
    const addonsSection = [
    { id: 1, text: 'Download for Chrome', link: '#' },
    { id: 2, text: 'Download for FireFox', link: '#' }
    ];

    const developersSection = [
    { id: 1, text: 'Developer Tools', link: '#' }
    ];
    
    
  return (
    <>
    <div className="grid md:grid-cols-3 grid-cols-2 mt-10 lg:my-0  gap-y-8 gap-x-12 text-[--secondary-color]">
            {/* About section */}
      <div className="text-sm">
        <h6 className="mb-4 flex justify-center font-black text-[--secondary-color] md:justify-start">
          About
        </h6>
        {/* Map over the aboutSection array to render <p> tags dynamically */}
        {aboutSection.map(item => (
          <p key={item.id} className="lg:mb-4 mb-2">
            <a href={item.link} className="">
              {item.text}
            </a>
          </p>
        ))}
      </div>

      {/* Solution section */}
      <div className='text-sm'>
        <h6 className="mb-4 flex justify-center font-black text-[--secondary-color] md:justify-start">
          Solutions
        </h6>
        {/* Map over the solutionSection array to render <p> tags dynamically */}
        {solutionSection.map(item => (
          <p key={item.id} className="lg:mb-4 mb-2">
            <a href={item.link} className="">
              {item.text}
            </a>
          </p>
        ))}
      </div>
      {/* Popular section */}
      <div className=" text-sm">
        <h6 className="mb-4 flex justify-center font-black text-[--secondary-color] md:justify-start">
          Popular Section
        </h6>
        {/* Map over the popularSection array to render <p> tags dynamically */}
        {popularSection.map(item => (
          <p key={item.id} className="lg:mb-4 mb-2">
            <a href={item.link} className="">
              {item.text}
            </a>
          </p>
        ))}
      </div>

      {/* Support section */}
      <div className="text-sm">
        <h6 className="mb-4 flex justify-center font-black text-[--secondary-color] md:justify-start">
          Support
        </h6>
        {/* Map over the supportSection array to render <p> tags dynamically */}
        {supportSection.map(item => (
          <p key={item.id} className="lg:mb-4 mb-2">
            <a href={item.link} className="">
              {item.text}
            </a>
          </p>
        ))}
      </div>

      {/* Add-Ons section */}
      <div className="text-sm">
        <h6 className="mb-4 flex justify-center font-black text-[--secondary-color] md:justify-start">
          Add-Ons
        </h6>
        {/* Map over the addonsSection array to render <p> tags dynamically */}
        {addonsSection.map(item => (
          <p key={item.id} className="lg:mb-4 mb-2">
            <a href={item.link} className="">
              {item.text}
            </a>
          </p>
        ))}
      </div>

      {/* Developers section */}
      <div className='text-sm'>
        <h6 className="mb-4 flex justify-center font-black text-[--secondary-color] md:justify-start">
          Developers
        </h6>
        {/* Map over the developersSection array to render <p> tags dynamically */}
        {developersSection.map(item => (
          <p key={item.id} className="lg:mb-4 mb-2">
            <a href={item.link} className="">
              {item.text}
            </a>
          </p>
        ))}
      </div>


    </div>
    </>
  )
}

export default Menu