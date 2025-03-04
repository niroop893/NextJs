import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-2 font-bold my-1">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 widht=30px height=30px">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}