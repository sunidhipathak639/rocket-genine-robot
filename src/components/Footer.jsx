import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            or <span className="underline text-blue"> other retailer </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            {" "}
            Or call +38 (097) 668-60-33
          </p>
        </div>
        <div className="w-full h-[1px] bg-neutral-700 my-5" />
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024{" "}
            <a
              href="https://www.linkedin.com/in/nataliya-kachor-522170271/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="underline text-blue"
            >
              Kim Inc. {" "}
            </a>{" "}
            All rights reserved
          </p>
          <div className="flex">
            {footerLinks.map((item, index) => (
              <p className="font-semibold text-gray text-xs" key={item}>
                {item}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
