import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ViewReportBtn from "@/components/dashboard/ViewReportBtn";

const ReportTabContent = async ({ id }: { id: string }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: reports, error } = await supabase
    .from("reports")
    .select(
      `*, 
        admins (*, profiles (*))
        `,
    )
    .eq("patient_id", id);

  if (error) {
    console.error("Error fetching reports:", error);
    return <div>Error loading reports</div>;
  }

  return (
    <Card x-chunk="dashboard-05-chunk-3" className="mt-12">
      <CardHeader className="px-7">
        <CardTitle>Reports</CardTitle>
        <CardDescription>
          You can view all reports of the selected patient here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {reports?.map(report => (
            <div key={report.id}>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-center">
                      {report?.report_title}
                    </h3>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Report By: ({report.admins?.admin_type}){" "}
                      {report.admins?.profiles.first_name}{" "}
                      {report.admins?.profiles.last_name}
                    </p>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      Dated: {new Date(report?.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <ViewReportBtn reportLink={report?.report_link} />
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportTabContent;
