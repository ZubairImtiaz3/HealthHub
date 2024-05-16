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

const RightSide = () => {
  return (
    <Card className="overflow-hidden mt-12" x-chunk="dashboard-05-chunk-4">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            <span>Patient: John Doe</span>
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Patient ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Updated: May 15, 2024</CardDescription>
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
          More Associated Patient
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="sr-only">Previous Patient</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="sr-only">Next Patient</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default RightSide;
