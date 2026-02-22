const features = [
  {
    id: 1,
    img: "/assets/images/features_training_env.png",
    tag: "Curriculum",
    tagColor: "#6366f1",
    headline: "Learn. Build. Get Hired.",
    body: (
      <>
        Our curriculum is{" "}
        <span className="text-white">
          built by industry practitioners with 10+ years of real-world
          experience
        </span>{" "}
        — not just academics. Live classes, real mentors, zero fluff.
      </>
    ),
    align: "left",
  },
  {
    id: 2,
    img: "/assets/images/features_placement_success.png",
    tag: "Placements",
    tagColor: "#10b981",
    headline: "Your career starts here.",
    body: (
      <>
        Every student works on{" "}
        <span className="text-white">
          live projects, real datasets, and client briefs
        </span>{" "}
        — so your portfolio speaks before you do. 300+ hiring partners. 84 LPA
        highest package.
      </>
    ),
    align: "right",
  },
];

const Features = () => {
  return (
    <section className="common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        {/* Heading */}
        <div className="mb-20 w-full">
          <h1 id="features_title" className="section-heading !text-white">
            Inside our training environment
          </h1>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-32">
          {features.map((f) => (
            <div
              key={f.id}
              className={`feature-block flex flex-col ${
                f.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={f.img}
                  alt={f.headline}
                  className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* Tag */}
                <span
                  className="inline-block w-fit px-4 py-1 rounded-full text-xs font-semibold mb-5 tracking-wider uppercase"
                  style={{
                    backgroundColor: `${f.tagColor}22`,
                    color: f.tagColor,
                    border: `1px solid ${f.tagColor}44`,
                  }}
                >
                  {f.tag}
                </span>

                <h2 className="text-white text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  {f.headline}
                </h2>

                <p className="text-gray text-lg leading-relaxed">{f.body}</p>

                {/* Subtle divider accent */}
                <div
                  className="mt-8 h-0.5 w-16 rounded-full"
                  style={{ backgroundColor: f.tagColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
