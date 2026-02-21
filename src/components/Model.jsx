import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";
import gsap from "gsap";

const courses = [
  {
    id: 1,
    title: "Advanced Digital Marketing",
    description:
      "Master SEO, paid ads, social media strategy, content marketing, and analytics — with live campaigns on real budgets.",
    duration: "4 Months",
    outcome: "Digital Marketing Manager · Growth Hacker · SEO Specialist",
    accentColor: "#6366f1",
    img: "/assets/images/course_digital_marketing.png",
  },
  {
    id: 2,
    title: "Data Science & AI",
    description:
      "From Python fundamentals to machine learning, deep learning, and deploying AI models in production environments.",
    duration: "6 Months",
    outcome: "ML Engineer · Data Scientist · AI Product Manager",
    accentColor: "#06b6d4",
    img: "/assets/images/course_data_science_ai.png",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Learn Excel, SQL, Power BI, and Tableau to turn raw data into decisions. Real dashboards, real business problems.",
    duration: "3 Months",
    outcome: "Data Analyst · Business Intelligence Analyst · MIS Executive",
    accentColor: "#10b981",
    img: "/assets/images/course_data_analytics.png",
  },
  {
    id: 4,
    title: "Finance Professional Program",
    description:
      "Financial modelling, investment analysis, CFA prep, and corporate finance — built for the modern finance professional.",
    duration: "5 Months",
    outcome: "Financial Analyst · Investment Banker · Portfolio Manager",
    accentColor: "#f59e0b",
    img: "/assets/images/course_finance.png",
  },
  {
    id: 5,
    title: "HR Management",
    description:
      "People analytics, talent acquisition, HRBP strategy, payroll, compliance, and culture building for the modern workplace.",
    duration: "3 Months",
    outcome: "HR Business Partner · Talent Acquisition Lead · HR Analyst",
    accentColor: "#ec4899",
    img: "/assets/images/course_hr_management.png",
  },
  {
    id: 6,
    title: "Marketing Diploma",
    description:
      "A comprehensive 360° marketing program covering branding, PR, digital channels, consumer behaviour, and campaign strategy.",
    duration: "4 Months",
    outcome: "Brand Manager · Marketing Executive · Campaign Strategist",
    accentColor: "#f97316",
    img: "/assets/images/course_marketing_diploma.png",
  },
];

const Model = () => {
  useGSAP(() => {
    gsap.to("#courses-heading", { opacity: 1, y: 0, duration: 1 });
    animateWithGsap(".course-card", { opacity: 1, y: 0, duration: 0.8 });
  }, []);

  return (
    <section className="common-padding bg-zinc">
      <div className="screen-max-width">
        {/* Heading */}
        <h1
          id="courses-heading"
          className="section-heading !text-white opacity-0 translate-y-10 mb-24"
        >
          Explore our courses
        </h1>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card opacity-0 translate-y-10 group relative rounded-3xl overflow-hidden bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{ boxShadow: `0 0 0 0 ${course.accentColor}` }}
            >
              {/* Course image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                {/* Accent tag */}
                <span
                  className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-3"
                  style={{
                    backgroundColor: `${course.accentColor}22`,
                    color: course.accentColor,
                  }}
                >
                  {course.duration}
                </span>

                <h2 className="text-white font-semibold text-lg leading-snug mb-2">
                  {course.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Career outcome */}
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Career Outcome
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: course.accentColor }}
                  >
                    {course.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Model;
