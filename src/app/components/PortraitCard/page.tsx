import Image from 'next/image';
import Link from 'next/link';

export default function PortraitCard() {
  return (
    <Link href="/about">
      <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/256px-Ada_Lovelace_portrait.jpg?20130907213703"
          alt="Portrait of Ada Lovelace"
          width={300}
          height={300}
          className="rounded-full mb-4"
        />
        <p className="text-center text-gray-700">
          Ada Lovelace.
        </p>
      </div>
    </Link>
  );
}