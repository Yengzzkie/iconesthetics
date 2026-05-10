import Logo from "../ui/Logo/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest py-10 lg:py-20 px-8 lg:px-16">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-6 max-w-sm">
            <Logo />
            <p className="text-on-surface-variant text-sm font-light leading-relaxed">
              Redefining the standards of medical aesthetics through precision,
              artistry, and an unwavering commitment to luxury.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href="https://www.facebook.com/profile.php?id=61566849477081" target="_blank"
              >
                <span className="material-symbols-outlined text-lg">
                  <FaFacebookF />
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                href="https://www.instagram.com/esthetics.icon/" target="_blank"
              >
                <span className="material-symbols-outlined text-lg"><FaInstagram /></span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-6">
              <h4 className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                NAVIGATE
              </h4>
              <ul className="space-y-4 text-on-surface-variant font-label-sm text-xs tracking-wider">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                CLINIC
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-xs tracking-wider uppercase">
                <li><a href="https://maps.app.goo.gl/CeVorwtfCnNUTewH7" target="_blank">43 Gladstone Ave. Oshawa, Ontario L1J 4E4 (Upper Level)</a></li>
                <li><a href="tel:+19055798088">+1 (905) 579-8088</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-outline-variant/10 text-[10px] font-label-sm tracking-widest text-on-tertiary-fixed-variant uppercase">
          <p>© {new Date().getFullYear()} ICON ESTHETICS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a className="hover:text-primary transition-colors" href="https://www.facebook.com/yengzzkie/" target="_blank">
              SEO and Design by Manuel Gatchalian
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
