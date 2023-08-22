import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-red-400 py-5 px-16 flex justify-between items-center">
      <Link href="/">
        <h2 className="text-3xl font-bold">Next Js 13 - Curso</h2>
      </Link>
      <ul className="flex gap-4">
        <li className="list-none">
          <Link href="/">Home</Link>
        </li>
        <li className="list-none">
          <Link href="/about">About</Link>
        </li>
        <li className="list-none">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="list-none">
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
