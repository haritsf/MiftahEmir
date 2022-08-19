import Link from "next/link";
import { MapIcon } from "@heroicons/react/outline";
const MapFrame = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center my-2">
        <div className="flex flex-col border border-solid border-gray-300 shadow-md rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4238549233081!2d106.77221182922551!3d-6.303690666718496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc482d17299a47759!2zNsKwMTgnMTMuMyJTIDEwNsKwNDYnMjEuOSJF!5e0!3m2!1sen!2sid!4v1659614925666!5m2!1sen!2sid"
            style={{
              height: "50vh",
              width: "90vw",
              padding: "0px",
              borderWidth: "0px",
              margin: "0px",
              left: "0px",
              top: "0px",
              touchAction: "pan-x pan-y",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Link href="https://goo.gl/maps/eAMq59y9bF3r7xna6" target="_blank">
            <button
              type="button"
              className="inline-flex items-center px-2 py-2 border border-red-300 shadow-lg text-base justify-center font-medium rounded-md text-white bg-red-300 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <MapIcon className="h-5 w-5 text-white" aria-hidden="true" />
              <p className="pl-2 text-base font-medium text-white">
                Lihat Lokasi
              </p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MapFrame;
