import { NextResponse } from "next/server";

export async function GET() {
  // Puedo extraer parametros
  // Puedo consultar una base de datos
  // Puedo comunicarme con otros servidores 
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json({ data });
}

export function POST() {
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
