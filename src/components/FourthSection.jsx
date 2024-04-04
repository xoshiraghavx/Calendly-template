const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-5">
       <div className="flex flex-col-reverse lg:flex-row justify-between lg:mx-auto max-w-6xl mx-6 py-14 gap-8 ">
          <div className="lg:w-[34vw]">
            <img
              src="./Stock1.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className=""
            />
          </div>
          <div className="flex flex-col justify-between my-auto gap-4 max-w-xl">
            <div className="font-medium text-[--primary-color]">BETTER CONVERSATIONS</div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl ">No more missed opportunities</h2>
            <p className="mt-4 text-gray-500 max-w-xl">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>

          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:mx-auto max-w-6xl mx-6 py-14 gap-8 ">
          <div className="flex flex-col justify-between my-auto gap-4 max-w-2xl">
            <div className="font-medium text-[--primary-color]">BETTER CONVERSATIONS</div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl ">Screen and quality websites visitors or invitees</h2>
            <p className="mt-4 text-gray-500 max-w-xl">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>

          </div>
          <div className="lg:w-[34vw]">
            <img
              src="./Stock1.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className=""
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between lg:mx-auto max-w-6xl mx-6 py-14 gap-8 ">
          <div className="lg:w-[34vw]">
            <img
              src="./Stock1.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className=""
            />
          </div>
          <div className="flex flex-col justify-between my-auto gap-4 max-w-xl">
            <div className="font-medium text-[--primary-color]">BETTER CONVERSATIONS</div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl ">No more missed opportunities</h2>
            <p className="mt-4 text-gray-500 max-w-xl">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>

          </div>
        </div>
      </div>
    )
  }
  