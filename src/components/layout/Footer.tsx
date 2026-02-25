import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-[1px] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="w-full h-full rounded-[11px] bg-[#030712] flex items-center justify-center overflow-hidden p-1.5">
                  <img
                    src="/rocket-genie-log.png"
                    alt="Robot Genie"
                    className="w-full h-full object-contain brightness-150"
                  />
                </div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase italic drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Robot{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Genie
                </span>
              </span>
            </Link>
            <p className="text-blue-100/60 text-sm font-medium leading-relaxed max-w-xs">
              Empowering the next generation with enterprise-grade AI education.
              Transform your career with hands-on, industry-aligned training.
            </p>
            <div className="flex gap-4 pt-4">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 md:bg-white/5 border border-white/40 md:border-white/10 flex items-center justify-center text-white md:text-blue-100/60 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-500/5"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              Programs
            </h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-blue-100/40">
              {[
                "AI Foundations",
                "ML Engineering",
                "Generative AI",
                "Data Science",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-cyan-400 md:text-blue-100/40 hover:text-cyan-400 hover:tracking-widest transition-all duration-300 border-b border-cyan-400/30 md:border-transparent md:hover:border-cyan-400/30"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-blue-100/40">
              {[
                "About Us",
                "Careers",
                "Success Stories",
                "Contact Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-purple-400 md:text-blue-100/40 hover:text-purple-400 hover:tracking-widest transition-all duration-300 border-b border-purple-400/30 md:border-transparent md:hover:border-purple-400/30"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm font-medium text-blue-100/60">
              <li className="flex items-center gap-3 text-white font-black group/email cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="text-cyan-400 md:group-hover:text-cyan-400 transition-colors">
                  support@robotgenie.ai
                </span>
              </li>
              <li className="text-white md:text-blue-100/60 md:hover:text-white transition-colors cursor-pointer">
                +1 (555) 123-4567
              </li>
              <li className="pt-2 leading-relaxed opacity-100 md:opacity-80 md:hover:opacity-100 transition-opacity cursor-pointer text-white md:text-blue-100/60">
                123 Innovation Drive
                <br />
                Tech Valley, CA 94043
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-100/40">
            © {currentYear} Robot{" "}
            <span className="text-blue-100/60">Genie</span>. All rights
            reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-blue-100/20">
            <Link
              href="#"
              className="text-white md:text-blue-100/20 md:hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white md:text-blue-100/20 md:hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
