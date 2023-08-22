import Link from "next/link";

export const metadata = {
  title: "Shop Page",
};
export default function ShopLayout({ children }) {
  // Aca solamente retorn el children. No todo el HTML
  return (
    <>
      <nav>
        <h3>Sección tienda</h3>
        <ul>
          <li>
            <Link href="/shop/category">Categorias</Link>
          </li>
          <li>
            <Link href="/shop/category/computers">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
