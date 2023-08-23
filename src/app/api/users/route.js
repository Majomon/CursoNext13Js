import { NextResponse } from "next/server";

export async function GET() {
  // Puedo extraer parametros
  // Puedo consultar una base de datos
  // Puedo comunicarme con otros servidores
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json({ data });
}

export async function POST(request) {
  //Información que mande el cliente
  const { nombre, apellido } = await request.json();
  console.log(nombre, apellido);
  return NextResponse.json({
    message: "Creando datos",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Modificando datos",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando datos",
  });
}
