import PriceCard from "@/components/ui/PriceCard/PriceCard";
import facialRejuvenation from "@/data/facialRejuvenation.json";
import sermiPermanentTattoo from "@/data/semiPermanentTattoo.json";
import sugarHairRemovalMale from "@/data/sugarHairRemovalMale.json";
import sugarHairRemovalFemale from "@/data/sugarHairRemovalFemale.json";
import menHaircut from "@/data/menHaircut.json";
import womenHaircut from "@/data/womenHaircut.json";
import otherServices from "@/data/otherServices.json";

const OurServicesPage = () => {
  return (
    <div className="bg-(--background) px-4 lg:px-16">
      <section className="relative min-h-179 flex flex-col items-center justify-center text-center pt-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale"
          data-alt="An atmospheric, high-contrast close-up of a premium aesthetic clinic treatment room. The lighting is low and moody, highlighting sharp edges of medical-grade glass containers and gold-rimmed equipment. The background is a deep, void-like black, creating an editorial and luxurious atmosphere consistent with a high-end medical spa."
        ></div>
        <div className="absolute inset-0 z-1"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="font-label-lg text-label-lg text-primary tracking-[0.3em] uppercase mb-4 block">
            Excellence in Care
          </span>
          <h1 className="font-serif text-6xl text-on-surface mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            A curated selection of advanced aesthetic treatments designed to
            enhance your natural beauty with surgical precision and artistic
            finesse.
          </p>
          <div className="mt-12 w-px h-24 bg-primary mx-auto opacity-50"></div>
        </div>
      </section>

      <section className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:max-w-3/4 mx-auto">
          <PriceCard
            title={"Facial Rejuvenation"}
            imageSrc={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBYng-TKLxQHmncAACA54qRyUjwRsLJzZcp3hTYAZRx-5aSE9tT3V0PhUjyTk_ilFfI26ePEd_oN6vM-v6aQgPMdV82eTDUozKMDbk9emp4IHcBLfVe3c18i5d8-IFelqyBYvI_2ITciwgFG9tEDQ-rASWqVZ9iPX_gXZz65Nj0lnP41GXR5x-ch0C9z638sPQBY7vFGM0W1JxFkctUUoQmp4q7TxpQ-dW3VmyupUklP6MhN9QcDNz9G53fDpKjYyHKrByqVd9h_3lm"
            }
            services={facialRejuvenation}
          />

          <PriceCard
            title={"Semi-permanent Tattoo"}
            imageSrc={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBau8fZAWOgRnyuPhUMwnunmOeK9I2DnbIMfe1KqgQ4BdvUpSyAVFAbK4bSEtWY2dn75o6niNz80YG7T2a2rb2ULpn2A80D52J1VnmvDPaBkZIIMQepSuMgq8hqmue4fslyUvAK5AAEklozhkbNDbYrjLWGz7xfELE1LoejWUMUJ5iXf-dxtJ7g469U9dU7EIvBspNuU8BAJlZ1VvSgnarLWiTQrgAXvy6quAYennQOGOtx5rceXvj6kaEGSmn_-Sni5ywVb1R4nGNy"
            }
            services={sermiPermanentTattoo}
          />

          <PriceCard
            title={"Sugar Hair Removal (Male)"}
            imageSrc={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAWNIzw3R9TCvQcLbLz_Gr9PaUP0TeH3M4fuQudb6kLvVg6riUbkCY8aIBymvjIrflYXfFtiyrz1W52so4vMeyAWiN_6PfpfsGLW2UqcgOwnbq1y1P68nmPSxCnG5Mq_k9e8iiYExxbpKsawFZ0qyFwjaYTPayejA0AGg5CdX1UnqtO5Ny9IxHcXFgotS9Il8nUXxJ4j8-s0Yv9aIuuGRuKYmcSQLYWv7mTmvCDq8uEuSaxSo8mAAOxDybWdGNneMvqCb5nx5TC_WM4"
            }
            services={sugarHairRemovalMale}
          />

          <PriceCard
            title={"Sugar Hair Removal (Female)"}
            imageSrc={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAgBnJDxNPk22yBSTHmj3EHwBcJxHHiO_bU7wz0A8ytRsh__Hf0eEw0VT1MM3z_N0g0_WmiiDBaSMYlhK5Ov1Iy2A3XejVPhhPzpUl09c2x-2QpqtZXM8boEwHaSGhbiA0N6N6CJaeelVELAcu6tRP2j7D2seehZgsAt3TblRDi8fWfj3biftK2uei-7gKhtDftsFCnzx_kJVKs9GgAc4KIQUzuQAvAkbAY80t1rKWhqKyLjL6gZ-2hmRCuIYLA6CdMv9WeTNTkfzux"
            }
            services={sugarHairRemovalFemale}
          />
          
          {/* HAIRCUT SERVICES */}
          <div className="flex flex-col justify-between">
            <PriceCard
              title={"Men's Haircut"}
              imageSrc={
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDzLppwGU95GQyGlZIIFE_n8eyPp1j4-4eYZQ-EKq5Ija-NK0POCRtOIWfDRc4AHemt9ElP3m6Fn5QTq4QbqvysAkaEqLTc_O2HZtiwOwUWhNZNqNLVOStITAUDorQ2Ec6eZJLip5zoV9bo6dnJbDQTTXgX8BDEZJbja9FYA525Q5fDjmSd7JDKXv154gOcSxYJJvP26PDHOrZ3ZUetbj_ZNpiHU-d6nkklnfuOWvHnno5JFXDCvnenTuQODeTILnMSqocksk2v5rCb"
              }
              services={menHaircut}
            />
            
            <PriceCard
              title={"Women's Haircut"}
              imageSrc={
                "https://lh3.googleusercontent.com/aida-public/AB6AXuArr7p8URonK7nDWQQRUpEEdvmi_yx3vOf9Q2h_x88B4YODmHSNRIwUJtKreP_154fUQ4JBHAYKkqs5o5QNf-171A3y5Ace4OzJfjCe1lqox78ZsSBaLpfrtT1B8guWjY5OALSwJuufR4J9yQYbkrhqA1PtD_fYbClfOThfIW5TTyUeMBjZ97lBp3k4iOXqnifxGK4Sj-siOMLyXkVPZImoNVcLO1ztKAr4lzSydjysP3sM2NFhJEnWkHjt5rfrb_aa106Lo4-HMdZP"
              }
              services={womenHaircut}
            />
          </div>

          {/* OTHER SERVICES */}
          <PriceCard
              title={"Other Services"}
              imageSrc={
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDQlqSCKGSjEl1gFrJwPVFq1FgFw9BJ1l90y-SVjgMNrQBDYydHy14bbKojsTuHFZw9Gf8pSYX55wu2tGMudxYoNTMup38tBHNrixVEOmO6xPM8c9xiXSC8lewcaqFqxyOKJN-C4nw2gesA7OPebe8ldbVRYLtgMqFMtbSoDmaw7XqLsTdEmGo20jqotcsaPRdEvc4p87Xig2mLdVKg0nxmvscWyBA_PMASz1-N5LvePmWj4XnA2yAMZTwmZshPXg0WJdpxhlqPfq2O"
              }
              services={otherServices}
            />

        </div>
      </section>

      <section className="my-24">
        <div className="max-w-4xl mx-auto text-center border border-(--text-primary) p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 border border-(--text-primary)/20 rotate-45"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 border border-(--text-primary)/20 rotate-45"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
            Ready to Elevate Your Esthetic?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Schedule your private consultation today and begin your journey
            toward clinical excellence and aesthetic perfection.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-primary text-on-primary px-12 py-5 tracking-widest hover:brightness-110 transition-all duration-300 w-full md:w-auto">
              BOOK YOUR APPOINTMENT
            </button>
            <button className="border border-primary text-primary px-12 py-5 font-label-lg text-label-lg tracking-widest hover:bg-(--text-primary)/10 transition-all duration-300 w-full md:w-auto">
              CALL CLINIC
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;