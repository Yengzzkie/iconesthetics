import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-24 overflow-hidden px-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60 brightness-75 grayscale"
          data-alt="A high-end, ultra-modern aesthetic clinic interior with marble surfaces and warm, recessed gold lighting. The atmosphere is serene and clinical yet luxurious, featuring a sophisticated black and gold color palette that exudes exclusivity and precision. Soft shadows and sharp architectural lines create a sense of deep mystery and high-end hospitality."
          src="2025-02-18.webp"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent"></div>
      </div>
      <div className="relative z-10 px-margin max-w-container-max mx-auto w-full">
        <div className="max-w-3xl space-y-8">
          <div className="inline-block px-4 py-1 border border-(--text-primary)/30 bg-(--text-primary)/5 rounded-lg">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
              Premier Medical Spa
            </span>
          </div>
          <h1 className="font-serif text-7xl text-display-xl text-white">
            Iconic Beauty,
            <br />
            <span className="italic text-(--text-primary)">
              Timeless Elegance
            </span>
          </h1>
          <p className="text-(--text-on-surface-variant) max-w-xl leading-relaxed">
            Experience the intersection of clinical precision and high-end
            hospitality. Our expert practitioners deliver bespoke treatments
            tailored to your unique anatomy.
          </p>
          <div className="flex gap-6 pt-4">
            <button className="bg-primary text-on-primary px-10 py-4 font-label-sm text-label-sm tracking-widest uppercase hover:opacity-90 transition-all active:scale-95">
              DISCOVER SERVICES
            </button>
            <button className="bg-white border border-outline-variant text-(--outline-variant) px-10 py-4 font-label-sm text-label-sm tracking-widest uppercase hover:bg-white/5 transition-all active:scale-95">
              OUR PHILOSOPHY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
