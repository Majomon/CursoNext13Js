"use client";
import { useParams } from "next/navigation";

function UsersPage({}) {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <button
        onClick={() => {
          console.log("Works!!!");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UsersPage;
