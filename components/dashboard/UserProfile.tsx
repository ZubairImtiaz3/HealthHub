import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { Cake, Copy, Phone, User, UserSearch } from "lucide-react";
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
import { checkAuth } from "@/utils/supabase/session";

const UserProfile = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const user = await checkAuth();

  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);

  if (error) {
    console.error("Error fetching profile:", error);
    return <div>Error loading Profile</div>;
  }

  const profile = profiles ? profiles[0] : null;

  return (
    <Card className="overflow-hidden mt-12" x-chunk="dashboard-05-chunk-4">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            <span>
              Welcome {profile?.first_name} {profile?.last_name} !
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
          <CardDescription>{profile?.email}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold text-lg">User Information</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Gender</h4>
                <span className="text-muted-foreground">
                  {profile?.gender.charAt(0).toUpperCase() +
                    profile?.gender.slice(1)}
                </span>
              </div>
              <UserSearch />
            </li>
            <li className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Phone Number</h4>
                <span className="text-muted-foreground">
                  {profile?.phone_number}
                </span>
              </div>
              <Phone />
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="font-semibold">Disclamier</div>
        <div className="text-muted-foreground">
          This patient information or report cannot be used against the person
          in court or any legal proceedings to avoid any misuse. <br /> <br />
          All medical data is confidential and protected under applicable
          privacy laws. Any unauthorized use or disclosure of this information
          is strictly prohibited.
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Your profile is safe with us.
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserProfile;
