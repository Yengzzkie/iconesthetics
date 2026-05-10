type serviceProps = {
  name: string;
  duration: string | null;
  price: number;
};

type serviceListProps = {
  title: string;
  imageSrc: string;
  services: serviceProps[];
};

const PriceCard = ({ title, imageSrc, services }: serviceListProps) => {
  return (
    <div className="flex flex-col lg:mt-6">
      <div>
        <img
          className="w-full aspect-4/5 object-cover hidden lg:block"
          data-alt="A high-end editorial portrait of a woman receiving a facial rejuvenation treatment. The lighting is sharp and cinematic, casting soft shadows across her skin. The background is pure black, and a subtle gold glow reflects off her cheekbones, emphasizing luxury and clinical precision. The overall aesthetic is minimalist and high-contrast."
          src={imageSrc}
        />
      </div>
      <div className="mt-4">
        <h2 className="font-serif text-2xl text-primary mb-6">{title}</h2>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between items-end border-b border-(--outline-variant)/30 lg:pb-2 group">
              <span className="font-body-md text-body-md text-on-surface text-xs lg:text-base group-hover:text-primary transition-colors">
                {service.name} {service.duration && `(${service.duration})`}
              </span>
              <span className="text-xs lg:text-base text-primary">
                ${service.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
