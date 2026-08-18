import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();

  return (
    <>
      <div className="bg-amber-950 text-white text-3xl text-center p-4">
        User: {userid}
      </div>
    </>
  );
}
