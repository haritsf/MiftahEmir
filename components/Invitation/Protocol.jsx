import Image from "next/image";

const Protocol = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center my-8">
        <div className="mx-2 my-2 px-4 py-2 justify-center text-center">
          <Image
            src="/images/protocol/41.png"
            className="rounded-full"
            width={128}
            height={128}
            alt="Memakai Masker"
          />
          <span className="p-2 flex flex-col handwriting text-base font-medium text-gray-600">
            Memakai Masker
          </span>
        </div>
        <div className="mx-2 my-2 px-4 py-2 justify-center text-center">
          <Image
            src="/images/protocol/42.png"
            className="rounded-full"
            width={128}
            height={128}
            alt="Mencuci Tangan"
          />
          <span className="p-2 flex flex-col handwriting text-base font-medium text-gray-600">
            Mencuci Tangan
          </span>
        </div>
        <div className="mx-2 my-2 px-4 py-2 justify-center text-center">
          <Image
            src="/images/protocol/43.png"
            className="rounded-full"
            width={128}
            height={128}
            alt="Gunakan Handsanitizer"
          />
          <span className="p-2 flex flex-col handwriting text-base font-medium text-gray-600">
            Gunakan Handsanitizer
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-center items-center my-8">
        <div className="mx-2 my-2 px-4 py-2 justify-center text-center">
          <Image
            src="/images/protocol/44.png"
            className="rounded-full"
            width={128}
            height={128}
            alt="Hindari Kerumunan"
          />
          <span className="p-2 flex flex-col handwriting text-base font-medium text-gray-600">
            Hindari Kerumunan
          </span>
        </div>
        <div className="mx-2 my-2 px-4 py-2 justify-center text-center">
          <Image
            src="/images/protocol/45.png"
            className="rounded-full"
            width={128}
            height={128}
            alt="Tidak Bersalaman"
          />
          <span className="p-2 flex flex-col handwriting text-base font-medium text-gray-600">
            Tidak Bersalaman
          </span>
        </div>
        <div className="mx-2 my-2 px-4 py-2 justify-center text-center">
          <Image
            src="/images/protocol/46.png"
            className="rounded-full"
            width={128}
            height={128}
            alt="Menjaga Jarak"
          />
          <span className="p-2 flex flex-col handwriting text-base font-medium text-gray-600">
            Menjaga Jarak
          </span>
        </div>
      </div>
    </>
  );
};

export default Protocol;
