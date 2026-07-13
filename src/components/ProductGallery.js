"use client";

import { useState } from "react";

export default function ProductGallery({
  image,
  gallery,
}) {

  const images = [
    image,
    ...(gallery
      ? gallery
          .split("|")
          .map((img) => img.trim())
          .filter(Boolean)
      : []),
  ];

  const [selected, setSelected] =
    useState(images[0]);

  return (
    <div>

      <div className="bg-white border rounded-2xl overflow-hidden">

        <img
          src={selected}
          alt=""
          className="
            w-full
            aspect-square
            object-cover
          "
        />

      </div>

      {images.length > 1 && (

        <div className="grid grid-cols-5 gap-2 mt-3">

          {images.map((img, index) => (

            <button
              key={index}
              onClick={() =>
                setSelected(img)
              }
              className={`
                border
                rounded-lg
                overflow-hidden
                ${
                  selected === img
                    ? "border-green-600"
                    : ""
                }
              `}
            >
              <img
                src={img}
                alt=""
                className="
                  w-full
                  h-16
                  object-cover
                "
              />
            </button>

          ))}

        </div>

      )}

    </div>
  );
}