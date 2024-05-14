import Image from "next/image";
import { checkAuth } from "@/utils/supabase/session";
import { redirect } from "next/navigation";

interface Props {
  title: string;
  description: string;
  imgOrder: "left" | "right";
  children: React.ReactNode;
}

export async function AuthTemplate({
  title,
  description,
  imgOrder,
  children,
}: Props) {
  const session = await checkAuth();
  if (session?.access_token) {
    redirect("/user-panel");
  }

  const imageOrderClass = imgOrder === "left" ? "order-1" : "order-2";
  const contentOrderClass = imgOrder === "left" ? "order-2" : "order-1";

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div
        className={`flex items-center justify-center py-12 ${contentOrderClass}`}
      >
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-balance text-muted-foreground">{description}</p>
          </div>
          {children}
        </div>
      </div>
      <div className={`hidden bg-muted lg:block ${imageOrderClass}`}>
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
