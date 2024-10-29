import { useState } from 'react';

export const GalleryContainer = ({ images }) => {
  // Group images based on the pattern (4 images, 4 images, 2 images)
  const rows = [];
  let i = 0;

  while (i < images.length) {
    console.log((i / 4) % 3, i);
    if ((i / 4) % 3 === 2) {
      rows.push(images.slice(i, i + 2)); // Row with 2 images
      i += 2;
    } else {
      rows.push(images.slice(i, i + 4)); // Row with 4 images
      i += 4;
    }
  }

  return (
    <section className="mx-auto max-w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid ${row.length === 4 ? 'grid-col-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-col-1 md:grid-cols-2'}`}
        >
          {row.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={`Gallery image ${rowIndex * 4 + index + 1}`}
                className="h-full w-full object-cover px-4 pb-6"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
