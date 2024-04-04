export default function VideoSection() {
    return (
      <div className="relative ">
        <div>
          <img src="/bg.png" alt="" className="w-full" />
        </div>
        <div className="bg-white lg:h-[70vh] h-[20vh]">
        </div>
        <div className=" absolute top-0 mt-[2%] w-screen">
          <div className="flex flex-col justify-center text-center lg:gap-5 lg:py-10 py-5">
                <span className="font-medium text-[#01EBED]">VIDEO</span>
                <h1 className=" mx-auto lg:text-5xl text-3xl font-bold tracking-tight text-white">
                  See what you can do with<br/> Routing Forms
                </h1>
            </div>
          <div className="flex justify-center">
          <video className="h-[70%] w-[70%]" controls>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </div>
    );
  }