import Image from "next/image";
import saasImage from "../public/assets/services/saas.png";
import softwareImage from "../public/assets/services/software.png";
import uiImage from "../public/assets/services/ui.png";
import partnerImage from "../public/assets/services/partner.png";

const services = [
  {
    icon: saasImage,
    title: "Complete SAAS Business Develpment",
    description:
      "We provide end-to-end SaaS business development services, from conceptualization and prototyping to launch and scaling. Our expertise includes building secure, scalable architectures, implementing seamless user experiences, and integrating cutting-edge features to help your business grow and stay competitive in the SaaS industry.",
  },
  {
    icon: softwareImage,
    title: "Customized Software Solutions",
    description:
      "Our team specializes in creating tailored software solutions that perfectly align with your business goals. Whether you need a custom CRM, ERP, or a full-scale enterprise application, we build robust and flexible systems that enhance efficiency, productivity, and scalability.",
  },
  {
    icon: uiImage,
    title: "UI/UX and Logo Design",
    description:
      "We craft beautiful and user-friendly UI/UX designs that elevate your brand and deliver a seamless experience. From user journey mapping to wireframing and high-fidelity prototyping, our design process ensures your product not only looks great but also functions flawlessly. We also create memorable logos that represent your brand identity.",
  },
  {
    icon: partnerImage,
    title: "Game Changing Business Support, Partnership and Collaboration",
    description:
      "We offer strategic partnerships and collaborations that leverage digital technologies to transform your business operations. Our services provide innovative digital solutions to optimize workflows, improve customer engagement, and enhance overall business performance, creating long-term value and growth.",
  },
];

const Services = () => {
  return (
    <section className=" z-40">
      <div className="container mx-auto">
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <Image
                  src={service.icon}
                  width={76}
                  height={76}
                  alt=""
                  className="mb-4"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
