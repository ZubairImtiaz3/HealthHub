import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FindDoc = () => {
  return (
    <section id="findDoc" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find a Doctor
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              Search our directory of experienced physicians and specialists to
              find the right care for your needs.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Input
                className="flex-1"
                placeholder="Search by name, specialty, or location"
                type="text"
              />
              <Button>Find a Doctor</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Find a Doctor"
              className="aspect-square overflow-hidden rounded-xl object-cover"
              height={500}
              src="/placeholder.svg"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDoc;
