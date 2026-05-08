import React from "react";
import {
  MdOutlineVerifiedUser,
  MdOutlineBiotech,
  MdOutlineAutoAwesome,
} from "react-icons/md";

const Banner = () => {
  return (
    <section className="bg-surface-container-lowest py-32 px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-4/5 bg-surface-container-high overflow-hidden border border-(--text-primary)/20">
            <img
              className="w-full h-full object-cover transition-all duration-700"
              data-alt="A macro close-up of a high-end medical treatment being performed. A gloved hand holds a sleek, metallic dermatological tool against clean, perfect skin. The lighting is dramatic and focused, highlighting the precision and clinical expertise of the brand. The color palette is composed of deep blacks, charcoal greys, and shimmering gold accents."
              src="https://lh3.googleusercontent.com/aida/ADBb0uhCorgF6nLM1lf2EA69dRWlEGNvohVDGm76RXfvjsSDnWdxEEzdNUcjgWDxP5tY3klUt41XESLMtVIVi-fjuJQO4AELw7J5sEfRgpYIwWNLxNv7k-dKbf49k0F43NkLolYmAJ05X01iMucJa9OiwZ-wW8OfscLlruTqBXRest0GjJ1nxBkalan5NIXhUgl4xRcn2mtlG_Oj8RbCsxbwvclRoQE0gACFMOd22qCGxsztfGJCm0XZk2YwPHtaZa3qpDaYBvd2En6YvwA"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary p-10 hidden lg:block">
            <div className="text-on-primary text-7xl font-bold">100%</div>
            <div className="text-on-primary font-label-sm text-label-sm tracking-widest uppercase">
              Client Satisfaction
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-primary text-label-sm tracking-[0.3em] uppercase">
              The Icon Standards
            </span>
            <h2 className="font-serif text-5xl text-white">
              Medical Expertise Meets Artistry
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              We believe that true beauty is found in the details. Our clinic
              operates at the intersection of medical science and artistic
              vision.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 border border-(--text-primary)/30 flex items-center justify-center">
                <span className="text-2xl text-primary" data-weight="fill">
                  <MdOutlineVerifiedUser />
                </span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-white mb-2">
                  Certified Excellence
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Every treatment is overseen by board-certified specialists
                  with decades of experience in aesthetic medicine.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 border border-(--text-primary)/30 flex items-center justify-center">
                <span className="text-2xl text-primary" data-weight="fill">
                  <MdOutlineBiotech />
                </span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-white mb-2">
                  Advanced Technology
                </h4>
                <p className="text-on-surface-variant text-sm">
                  We invest in FDA-cleared, gold-standard technology to ensure
                  safety and superior clinical outcomes.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 border border-(--text-primary)/30 flex items-center justify-center">
                <span className="text-2xl text-primary" data-weight="fill">
                  <MdOutlineAutoAwesome />
                </span>
              </div>
              <div>
                <h4 className="font-serif text-lg text-white mb-2">
                  Bespoke Treatment Plans
                </h4>
                <p className="text-on-surface-variant text-sm">
                  No two faces are the same. We craft individualized journeys
                  that respect and enhance your natural features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
