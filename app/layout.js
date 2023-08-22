import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Majomon - Curso Next JS 13",
  description: "Pagina principal",
  keywords: "tienda, online, ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
