"use client";
import { Button } from "@/components/ui/button";

const ViewReportBtn = ({ reportLink }: any) => {
  const handleClick = () => {
    if (reportLink) {
      window.open(reportLink, "_blank");
    } else {
      console.error("No report link provided");
    }
  };

  return (
    <Button size="sm" variant="outline" onClick={handleClick}>
      View Report
    </Button>
  );
};

export default ViewReportBtn;
