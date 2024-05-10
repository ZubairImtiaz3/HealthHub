import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Dr. Sarah Johnson {params.id}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Pediatrician with over 15 years of experience in caring for
                children.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Bio</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dr. Sarah Johnson is a highly skilled and compassionate
                  pediatrician who has dedicated her career to providing
                  exceptional care for children. With over 15 years of
                  experience, she has a deep understanding of the unique needs
                  and challenges that children and their families face.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone: (123) 456-7890
                  <br />
                  Email: sarah.johnson@clinic.com
                </p>
              </div>
            </div>
          </div>
          <Image
            alt="Doctor"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
