import NavbarDashboard from "@/modules/navbar/nav-dashboard";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarDashboard />
      <main className="pt-16 md:pt-0 md:pl-96 min-h-screen">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
    </div>
  );
}
