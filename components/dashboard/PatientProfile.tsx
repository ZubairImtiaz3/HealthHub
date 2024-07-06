import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { Copy } from "lucide-react";
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
              Patient: {patient?.first_name} {patient?.last_name}
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
            Updated: {new Date(patient?.created_at).toLocaleDateString()}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="font-semibold">Important Note</div>
        <div className="text-muted-foreground">
          <div className="text-muted-foreground">
            This patient information or report cannot be used against the person
            in court or any legal proceedings to avoid any misuse. <br /> <br />
            All medical data is confidential and protected under applicable
            privacy laws. Any unauthorized use or disclosure of this information
            is strictly prohibited.
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Patient reports are safe with us.
        </div>
      </CardFooter>
    </Card>
  );
};

export default PatientProfile;
