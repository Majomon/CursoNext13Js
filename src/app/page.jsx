/* "use client"; */
//  Si no coloco el "useCliente toda la app se rompe porque necesita que le diga que es un componente
//que se renderiza del lado del cliente. Ej: Evento click, localstorage, useState, useEffect, etc
// Los componentes Hijos heredan esta propiedad

import Users from "@/src/components/Users";

export default function HomePage() {
  return (
    /* Server component */
    <section>
      {/* Client component */}
      <Users />
    </section>
  );
}
