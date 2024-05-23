import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Droplet,
  Gauge,
  Heart,
  HeartPulse,
  Thermometer,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PatientProfile = async ({ id }: any) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: patients, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", id);

  const patient = patients ? patients[0] : null;

  return (
    <Card className="overflow-hidden mt-12" x-chunk="dashboard-05-chunk-4">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            <span>
              Patient: {patient.first_name} {patient?.last_name}
            </span>
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Patient ID</span>
            </Button>
          </CardTitle>
          <CardDescription>
            Updated: {new Date(patient.created_at).toLocaleDateString()}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold text-lg">Health Metrics</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Blood Pressure</h4>
                <span className="text-muted-foreground">120/80 mmHg</span>
              </div>
              <Gauge />
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Heart Rate</h4>
                <span className="text-muted-foreground">120/80 mmHg</span>
              </div>
              <HeartPulse />
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Body Temperature</h4>
                <span className="text-muted-foreground">120/80 mmHg</span>
              </div>
              <Thermometer />
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Blood Sugar Level</h4>
                <span className="text-muted-foreground">120/80 mmHg</span>
              </div>
              <Droplet />
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="font-semibold">Doctor&apos;s Notes</div>
        <div className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Patient Profile is safe with us.
        </div>
      </CardFooter>
    </Card>
  );
};

export default PatientProfile;
