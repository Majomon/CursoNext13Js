export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Curso de Next Js</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
