function App() {
  return (
    <>
      <body className="bg-onyx min-h-svh flex flex-col items-center">
        <div>
          <img className="mt-4 mb-10" src="src/assets/logo.png" alt="" />
        </div>
        <div className="p-12 flex gap-10 shadow-brandBlue border-2 border-brandBlue shadow-lg max-w-[1300px] max-h-[680px]">
          <div className="max-w-[390px]">
            <img
              className="border-4 shadow-lg shadow-onyx border-brandBlue"
              src="src/assets/mePic.jpg"
              alt=""
            />
          </div>
          <div className="max-w-[600px] flex flex-col justify-between">
            <div className="flex flex-col gap-10">
              <h1 className="text-brandBlue text-6xl font-bold">
                I'm Laura Lei
              </h1>
              <p className="text-white text-2xl">
                Frontend Developer, based in Bergen, Norway.
              </p>
              <p className="text-white text-2xl">
                Thank you for visiting my portfolio, and I hope you enjoy
                exploring my work as much as I enjoy creating it!
              </p>
            </div>
            <div className="flex gap-4 text-2xl">
              <p className="text-white">
                Learn more about me and my skills here
              </p>
              <button className="text-white font-bold">Arrow</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
