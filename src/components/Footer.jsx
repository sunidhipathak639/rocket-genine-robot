import Spline from "@splinetool/react-spline";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Spline 3D scene fills the footer */}
      <div className="w-full h-[500px] md:h-[600px]">
        <Spline scene="https://prod.spline.design/1K6ybQRe7IkDncyv/scene.splinecode" />{" "}
      </div>
    </footer>
  );
};

export default Footer;
