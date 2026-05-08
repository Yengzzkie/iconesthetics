import React from "react";

const CallToAction = () => {
  return (
    <section className="py-32 text-center bg-(--background)">
      <div className="max-w-4xl mx-auto border border-(--outline-variant)/30 py-24 px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-(--bg-primary)/5 opacity-30 pointer-events-none"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="font-serif text-5xl text-white">
            Begin Your Transformation
          </h2>
          <p className="text-on-surface-variant font-body-lg max-w-xl mx-auto">
            Reserve your private consultation today and step into a world of
            curated beauty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button className="bg-primary text-on-primary px-12 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:scale-105 transition-transform">
              BOOK APPOINTMENT
            </button>
            <button className="border border-primary text-primary px-12 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:bg-(--text-primary)/10 transition-colors">
              CONTACT CLINIC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
