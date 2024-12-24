function Home() {
  return (
    <>
      <section className="py-20 px-4 lg:mb-[200px] sm:pt-24 lg:pt-32">
        <div className="container mx-auto mb-4">
          <h1 className="max-w-[900px] mx-auto mb-4 px-4 font-black text-4xl tracking-tight text-center sm:text-5xl lg:text-6xl">
            Save Landing Pages You Like Directly To Your Notion DB
          </h1>
          <p className="max-w-[800px] mx-auto text-lg text-center text-gray-500">
            InspiSave is a Chrome extension that lets you take a screenshot of a
            webpage and save it directly to your Notion database with just one
            click. It also automatically includes the page's title and URL along
            with the screenshot.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 mb-8 md:flex-row md:justify-center">
          <a
            href="#"
            className="bg-black text-white flex gap-2 items-center px-[20px] py-[8px] rounded-full md:px-[24px] md:py-[10px]"
          >
            <img src="./img/chrome-icon.svg" />
            Download on Chrome
          </a>
          <a href="#" className="text-gray-500">
            How to use?
          </a>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden max-w-[950px] mx-auto">
            <iframe
              className="w-full h-[324px] md:h-[396px] min-[950px]:h-[535px]"
              src="https://www.youtube.com/embed/eWz9GUUqYaM?si=yQ1BIElkDOET9WYG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <img
            src="./img/hero-video-bg.svg"
            className="absolute left-[50%] translate-x-[-50%] top-[250px] -z-10 hidden lg:block"
          />
        </div>
      </section>
      <section className="px-4 pb-5">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-6 font-black tracking-tight leading-none sm:text-4xl lg:mb-16">
            It’s a simple 3-step process
          </h2>
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="flex flex-col lg:items-center gap-5 lg:flex-row lg:gap-8">
              <div className="lg:w-[600px]">
                <h3 className="text-2xl uppercase font-black text-gray-500">
                  Step 1
                </h3>
                <p className="text-gray-500">
                  Login or Connect to your Notion account.
                </p>
              </div>
              <div>
                <img src="./img/step-1-img.svg" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:items-center gap-5 lg:flex-row lg:gap-8">
              <div className="lg:w-[600px]">
                <img src="./img/step-2-img.svg" />
              </div>
              <div>
                <h3 className="text-2xl uppercase font-black text-gray-500">
                  Step 2
                </h3>
                <p className="text-gray-500">
                  Authorize inspiSave to save content to your Notion DB.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:items-center gap-5 lg:flex-row lg:gap-8">
              <div className="lg:w-[600px]">
                <h3 className="text-2xl uppercase font-black text-gray-500">
                  Step 3
                </h3>
                <p className="text-gray-500">
                  Start collecting super cool landing pages😍
                </p>
              </div>
              <div>
                <img src="./img/step-3-img.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
