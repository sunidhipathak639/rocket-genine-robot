import Spline from "@splinetool/react-spline";

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Spline 3D scene:
          - Mobile: pointer-events-none so touch scroll isn't blocked
          - Desktop (md+): pointer-events-auto for mouse interaction */}
      <div className="w-full h-[500px] md:h-[600px] pointer-events-none md:pointer-events-auto">
        <Spline scene="https://prod.spline.design/1K6ybQRe7IkDncyv/scene.splinecode" />
      </div>
    </footer>
  );
};

export default Footer;
