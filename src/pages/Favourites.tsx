import React from "react";
import { useAppSelector } from "../hooks/redux";

export default function Favourites() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((item) => (
          <li key={item}>
            <a href={item} target="_blank" rel="noreferrer">
              url: {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
