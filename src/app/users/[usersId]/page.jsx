"use client";
import { useParams } from "next/navigation";

function UsersPage({}) {
  const params = useParams();

  return (
    <div>
      <button
        onClick={() => {
          console.log(`Usuario de ID: ${params.usersId}`);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UsersPage;
