import PatientProfile from "@/components/dashboard/PatientProfile";
import ReportTabContent from "@/components/dashboard/ReportTabContent";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <ReportTabContent id={params.id} />
      </div>
      <div>
        <PatientProfile id={params.id} />
      </div>
    </>
  );
};

export default page;
