import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // wrap everything to block potential overflow from children
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
