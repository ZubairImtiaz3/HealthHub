import Image from "next/image";
import { Button } from "@/components/ui/button";

const ViewReports = () => {
  return (
    <section
      id="reports"
      className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              alt="View Reports"
              className="aspect-square overflow-hidden rounded-xl object-cover"
              height={500}
              src="/placeholder.svg"
              width={500}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              View Reports
            </h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              Access your medical records, test results, and other important
              documents securely online.
            </p>
            <div className="mt-6">
              <Button>View Reports</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewReports;
