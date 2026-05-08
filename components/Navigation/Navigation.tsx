import Logo from "../ui/Logo/Logo";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-(--background)/80 backdrop-blur-xl border-b border-(--outline-variant)/30 px-16">
      <div className="flex justify-between items-center px-margin py-6 w-full mx-auto">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <a
            className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-primary font-bold border-b border-primary pb-1"
            href="#"
          >
            HOME
          </a>
          <a
            className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#"
          >
            SERVICES
          </a>
          <a
            className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#"
          >
            ABOUT
          </a>
        </div>
        <button className="font-label-sm text-label-sm tracking-[0.2em] uppercase bg-primary-container text-on-primary-container px-8 py-3 hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
          BOOK NOW
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
