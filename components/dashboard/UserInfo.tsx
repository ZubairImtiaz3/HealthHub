import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserInfo = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  const profile = profiles ? profiles : null;
  return (
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="overflow-hidden rounded-full"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={profile?.user?.image ?? ""}
            alt={profile?.user?.name ?? ""}
          />
          <AvatarFallback>
            {profile?.first_name?.[0]}
            {profile?.last_name?.[0]}
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
  );
};

export default UserInfo;
