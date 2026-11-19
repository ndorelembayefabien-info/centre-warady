
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Layout réservé aux pages publiques
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}
