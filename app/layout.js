import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

/* Los metada solamente funcionan en paginas del lado del servidor */
export const metadata = {
  title: "Majomon - Curso Next JS 13",
  description: "Pagina principal",
  keywords: "tienda, online, ecommerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
