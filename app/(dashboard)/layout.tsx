import withAuth from "@/components/auth/WithAuth";

function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
export default withAuth(RootLayout);
