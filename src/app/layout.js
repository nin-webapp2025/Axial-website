import Footer from "@/components/layout/Footer";
import AmbientLayer from "@/components/layout/AmbientLayer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import axialContent from "@/data/axialContent";
import "../styles/globals.css";

export const metadata = {
  title: {
    default: axialContent.siteName,
    template: `%s | ${axialContent.siteName}`,
  },
  description:
    axialContent.pages.find((page) => page.page === "home")?.sections.hero
      .description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <AmbientLayer />
        </div>
      </body>
    </html>
  );
}
