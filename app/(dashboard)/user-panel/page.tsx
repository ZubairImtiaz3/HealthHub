import PatientTabContent from "@/components/dashboard/PatientTabContent";
import UserProfile from "@/components/dashboard/UserProfile";

export default function page() {
  return (
    <>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <PatientTabContent />
      </div>
      <div>
        <UserProfile />
      </div>
    </>
  );
}
