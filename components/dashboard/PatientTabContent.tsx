import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ViewReportsBtn from "@/components/dashboard/ViewReportsBtn";

const PatientTabContent = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: patients, error } = await supabase.from("patients").select(
    `*, 
        admins (*, profiles (*))
        `,
  );

  if (error) {
    console.error("Error fetching patients:", error);
    return <div>Error loading patients</div>;
  }

  return (
    <Card className="mt-12" x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Patients</CardTitle>
        <CardDescription>
          You can view all associated patients here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {patients.length > 0 ? (
            patients.map(patient => (
              <div key={patient.id}>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <div className="text-center">
                      <h3 className="text-lg font-medium">
                        {patient.first_name} {patient.last_name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Created By: ({patient.admins.admin_type}){" "}
                        {patient.admins.profiles.first_name}{" "}
                        {patient.admins.profiles.last_name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Dated:{" "}
                        {new Date(patient.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <ViewReportsBtn id={patient.id} />
                  </CardHeader>
                </Card>
              </div>
            ))
          ) : (
            <h3 className="text-center font-semibold">
              No patients record found for you right now.
            </h3>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientTabContent;
