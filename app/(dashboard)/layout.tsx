import withAuth from "@/components/auth/WithAuth";
import Header from "@/components/dashboard/Header";
import LeftSideBar from "@/components/dashboard/LeftSideBar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <LeftSideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
export default withAuth(RootLayout);
