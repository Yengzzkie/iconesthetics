import { IoArrowForward } from "react-icons/io5";
import {
  MdOutlineWaterDrop,
  MdOutlineFaceUnlock,
  MdContentCut,
} from "react-icons/md";
import { GrSpa } from "react-icons/gr";
import { BsHighlighter } from "react-icons/bs";

const FeaturedServices = () => {
  return (
    <section className="py-16 lg:py-32 px-6 lg:px-16 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="text-(--text-primary) tracking-widest uppercase block mb-4">
            Treatment Menu
          </span>
          <h2 className="font-serif text-4xl">Curated Aesthetic Excellence</h2>
        </div>
        <div className="pb-2">
          <a
            className="text-(--text-on-surface-variant) hover:text-(--text-primary) transition-colors tracking-widest uppercase flex items-center gap-2"
            href="/our-services"
          >
            View All Services
            <span className="material-symbols-outlined text-sm">
              <IoArrowForward />
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 group relative overflow-hidden bg-surface-container-low border border-(--outline-variant)/20 p-12 hover:border-primary/40 transition-all duration-500">
          <span className="absolute top-8 right-12 text-(--text-primary)/10 text-6xl">
            01
          </span>
          <div className="relative z-10 space-y-6">
            <div className="w-12 h-12 rounded-lg bg-(--bg-primary)/10 flex items-center justify-center text-(--text-primary) mb-8">
              <span className="text-2xl">
                <MdOutlineFaceUnlock />
              </span>
            </div>
            <h3 className="font-serif text-3xl text-white group-hover:text-(--text-primary) transition-colors">
              Hydrafacial Luxe
            </h3>
            <p className="text-(--text-on-surface-variant) max-w-md">
              A multi-step treatment that cleanses, exfoliates, and extracts
              impurities while infusing the skin with potent antioxidants and
              peptides.
            </p>
            <ul className="space-y-3 text-(--text-on-surface-variant)/80 font-label-sm text-[11px] tracking-wider uppercase">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary"></span> Deep Pore Detox
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary"></span> Custom Booster
                Infusion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary"></span> LED Light Therapy
              </li>
            </ul>
            <button className="pt-6 font-label-sm text-label-sm text-primary tracking-[0.2em] uppercase group-hover:gap-4 flex items-center gap-2 transition-all">
              EXPLORE
            </button>
          </div>
        </div>

        <div className="md:col-span-5 group relative overflow-hidden bg-surface-container-low border border-(--outline-variant)/20 p-12 hover:border-primary/40 transition-all duration-500">
          <span className="absolute top-8 right-12 text-(--text-primary)/10 text-6xl">
            02
          </span>
          <div className="flex flex-col relative z-10 space-y-6">
            <div className="w-12 h-12 rounded-lg bg-(--bg-primary)/10 flex items-center justify-center text-(--text-primary) mb-8">
              <span className="text-2xl">
                <MdOutlineWaterDrop />
              </span>
            </div>
            <h3 className="font-serif text-3xl text-white group-hover:text-primary transition-colors">
              Diamond Microderm
            </h3>
            <p className="text-on-surface-variant font-body-md">
              Refine skin texture and diminish fine lines with our medical-grade
              diamond-tip resurfacing technology.
            </p>
            <ul className="space-y-3 text-(--text-on-surface-variant)/80 font-label-sm text-[11px] tracking-wider uppercase">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary"></span> Deep Pore Detox
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary"></span> Custom Booster
                Infusion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary"></span> LED Light Therapy
              </li>
            </ul>
            <button className="pt-6 text-primary tracking-[0.2em] uppercase group-hover:gap-4 flex items-center gap-2 transition-all">
              EXPLORE
            </button>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-(--outline-variant)/20 p-10 group hover:bg-surface-container-high transition-colors">
          <span className="text-2xl text-primary">
            <BsHighlighter className="mb-6" />
          </span>
          <h4 className="font-serif text-xl text-white mb-4">Injectables</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Expert facial contouring and wrinkle relaxation using premium
            biologics.
          </p>
          <div className="h-px w-full bg-(--outline-variant)/30 mb-6"></div>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
            View Details
          </span>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-(--outline-variant)/20 p-10 group hover:bg-surface-container-high transition-colors">
          <span className="text-2xl text-primary">
            <MdContentCut className="mb-6" />
          </span>
          <h4 className="font-serif text-xl text-white mb-4">
            Hair Restorative
          </h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Advanced clinical scalp treatments for density and vitality.
          </p>
          <div className="h-px w-full bg-(--outline-variant)/30 mb-6"></div>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
            View Details
          </span>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-(--outline-variant)/20 p-10 group hover:text-(--text-primary) transition-all">
          <span className="text-2xl text-primary">
            <GrSpa className="mb-6" />
          </span>
          <h4 className="font-serif text-xl text-white mb-4">Body Sculpt</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Non-invasive body contouring designed for precision results.
          </p>
          <div className="h-px w-full bg-(--outline-variant)/30 mb-6"></div>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
            View Details
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
