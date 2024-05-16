import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const TabContent = () => {
  const Data = [
    {
      id: 1,
      title: "Annual Checkup",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Dental Appointment",
      date: "June 10, 2023",
    },
    {
      id: 3,
      title: "Eye Examination",
      date: "July 20, 2023",
    },
  ];

  return (
    <TabsContent value="week">
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>Medical Reports</CardTitle>
          <CardDescription>
            You can view all available reports here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {Data.map(item => (
              <div key={item.id}>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Dated: {item.date}
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

export default TabContent;
