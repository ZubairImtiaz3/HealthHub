"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next-nprogress-bar";

const ViewReportsBtn = ({ id }: any) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(`/user-panel/report/${id}`);
      }}
      size="sm"
      variant="outline"
    >
      View Reports
    </Button>
  );
};

export default ViewReportsBtn;
