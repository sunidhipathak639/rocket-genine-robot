import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Courses", "Placements", "About", "Contact"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Digital Marketing.",
      "Master SEO, Ads & Social Media.",
      "Land your dream job in 90 days.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Data Science & AI.", "From zero to ML Engineer."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Finance Program.",
      "CFA prep, financial modelling",
      "& investment analysis.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["HR Management.", "Build a career in people ops."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Digital Marketing — ₹4.2 LPA Avg Package",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Data Science & AI — ₹8 LPA Avg Package",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Finance Program — ₹6.5 LPA Avg Package",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "HR Management — ₹5 LPA Avg Package",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: "Online", value: "small" },
  { label: "Offline", value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Refund Policy",
  "Placement Policy",
  "Site Map",
];
