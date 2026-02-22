const HowItWorks = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Robot Genie with colorful glow backdrop */}
        <div id="chip" className="flex-center my-20 w-full">
          <div className="relative flex-center">
            {/* Colored ambient glow blobs */}
            <div className="absolute w-72 h-72 rounded-full bg-blue-600 opacity-20 blur-3xl -left-10 top-0" />
            <div className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-20 blur-3xl right-0 top-10" />
            <div className="absolute w-48 h-48 rounded-full bg-cyan-400 opacity-15 blur-2xl bottom-0 left-1/2 -translate-x-1/2" />

            {/* Robot image */}
            <img
              src="/assets/images/robot_genine.png"
              alt="Rocket Genine AI Robot"
              width={110}
              height={110}
              className="relative z-10 drop-shadow-2xl"
            />

            {/* 3D orbiting rocket */}
            <div className="orbit-scene">
              <img
                src="/assets/images/rocket.png"
                alt="rocket"
                className="rocket-3d"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Placement First.
            <br />
            Career Guaranteed.
          </h2>
          <p className="hiw-subtitle">
            1,200+ students placed. 300+ hiring companies. 84 LPA highest
            package.
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text mb-4">
              Our placement team works with{" "}
              <span className="text-white">
                300+ top companies across India{" "}
              </span>
              to source exclusive job opportunities for every batch.
            </p>

            <p className="hiw-text">
              Students get{" "}
              <span className="text-white">
                personalised mock interviews and resume reviews{" "}
              </span>
              with hiring managers from top firms.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text">Highest Package</p>
            <p className="hiw-bigtext">84 LPA</p>
            <p className="hiw-text">achieved by our alumni.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
