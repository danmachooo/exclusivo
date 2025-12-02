"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/haircut1.jpg",
    alt: "Taper Fade haircut",
    category: "Fade",
  },
  {
    id: 2,
    src: "/haircut2.jpg",
    alt: "Textured mullet with a taper fade",
    category: "Mullet",
  },
  {
    id: 3,
    src: "/haircut3.jpg",
    alt: "Burst fade with a textured fringe ",
    category: "Fade",
  },
  {
    id: 4,
    src: "/haircut4.jpg",
    alt: "Low taper fade.",
    category: "Fade",
  },
  {
    id: 5,
    src: "/haircut5.jpg",
    alt: "Burst fade with a textured fringe and a V-cut design in the back",
    category: "Fringe",
  },
  {
    id: 6,
    src: "/haircut6.jpg",
    alt: "Textured or messy fringe with a low taper fade",
    category: "Fade",
  },
  {
    id: 7,
    src: "/haircut7.jpg",
    alt: "Taper fade with a textured top",
    category: "Fade",
  },
  {
    id: 8,
    src: "/haircut8.jpg",
    alt: "Two-block haircut with a taper fade and a textured fringe",
    category: "Two-block",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mt-2 mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of precision cuts and styles. Every
            client leaves looking their absolute best.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-sm font-medium uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-3xl max-h-[80vh] aspect-square w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-background to-transparent">
              <p className="text-center font-medium">{selectedImage.alt}</p>
              <p className="text-center text-sm text-muted-foreground">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
