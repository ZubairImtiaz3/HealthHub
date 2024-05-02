import Link from "next/link";
import Image from "next/image";
import React from "react";

const Services = () => {
  const cards = [
    {
      title: "Emergency Care",
      description:
        "Our dedicated team is available 24/7 to provide urgent medical attention and care.",
      image: "/placeholder.svg",
      alt: "Emergency Care",
    },
    {
      title: "Specialized Treatments",
      description:
        "From advanced surgeries to specialized therapies, we offer a wide range of treatments to meet diverse healthcare needs.",
      image: "/placeholder.svg",
      alt: "Specialized Treatments",
    },
    {
      title: "Community Programs",
      description:
        "We engage with the community through various health initiatives and programs aimed at promoting wellness and preventive care.",
      image: "/placeholder.svg",
      alt: "Community Programs",
    },
    {
      title: "Pediatric Care",
      description:
        "Our pediatric department provides compassionate care for children, ensuring their health and well-being from infancy through adolescence.",
      image: "/placeholder.svg",
      alt: "Pediatric Care",
    },
    {
      title: "Rehabilitation Services",
      description:
        "We offer comprehensive rehabilitation services to help patients regain independence and improve their quality of life after injury or illness.",
      image: "/placeholder.svg",
      alt: "Rehabilitation Services",
    },
    {
      title: "Mental Health Support",
      description:
        "Our mental health professionals provide support and treatment for individuals facing emotional and psychological challenges, promoting mental wellness and resilience.",
      image: "/placeholder.svg",
      alt: "Mental Health Support",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our hospital is committed to delivering compassionate care to all
              individuals in need, striving to enhance lives and foster
              well-being within our community.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt={card.alt}
                className="object-cover w-full h-48"
                height={300}
                src={card.image}
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500}
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
