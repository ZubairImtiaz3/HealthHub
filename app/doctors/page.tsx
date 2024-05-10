import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const page = () => {
  const cards = [
    {
      name: "Dr. Emily Johnson",
      designation: "Emergency Medicine Specialist",
      image: "/placeholder.svg",
      alt: "Emergency Care",
    },
    {
      name: "Dr. Michael Patel",
      designation: "Orthopedic Surgeon",
      image: "/placeholder.svg",
      alt: "Specialized Treatments",
    },
    {
      name: "Dr. Sarah Chen",
      designation: "Community Health Director",
      image: "/placeholder.svg",
      alt: "Community Programs",
    },
    {
      name: "Dr. David Miller",
      designation: "Pediatrician",
      image: "/placeholder.svg",
      alt: "Pediatric Care",
    },
    {
      name: "Dr. Rachel Thompson",
      designation: "Physical Therapist",
      image: "/placeholder.svg",
      alt: "Rehabilitation Services",
    },
    {
      name: "Dr. Christopher Lee",
      designation: "Psychiatrist",
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
              Our Doctors
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              aperiam quo eius unde debitis iusto sunt quia, similique corporis
              pariatur temporibus minus dolores suscipit, impedit mollitia,
              aliquid exercitationem accusamus.
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
                <h3 className="font-bold text-xl">{card.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.designation}
                </p>
                <Button className="mt-4">View Profile</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
