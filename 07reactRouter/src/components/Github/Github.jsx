import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/GraceRosario`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       }, []);
  //   });

  return (
    <>
      <div className=" bg-amber-950 p-10 flex justify-center items-center gap-10 flex-wrap">
        <img
          src={data.avatar_url}
          alt="Github DP"
          width={300}
          className="rounded-full"
        />
        <h1 className="text-right text-white text-3xl">
          Github followers: {data.followers}
        </h1>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/GraceRosario`);

  return response.json();
};
