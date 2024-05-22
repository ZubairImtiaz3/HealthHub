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
import { Button } from "@/components/ui/button";

const ReportTabContent = async ({ id }: { id: string }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: reports, error } = await supabase
    .from("reports")
    .select("*")
    .eq("patient_id", id);

  if (error) {
    console.error("Error fetching reports:", error);
    return <div>Error loading reports</div>;
  }

  return (
    <TabsContent value="week">
      <Card x-chunk="dashboard-05-chunk-3">
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
                      <h3 className="text-lg font-medium">
                        {report.report_title}
                      </h3>
                      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                        Dated:{" "}
                        {new Date(report.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Report
                    </Button>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ReportTabContent;
