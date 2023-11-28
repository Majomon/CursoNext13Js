import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Provider from "../app/context/Provider";

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
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
