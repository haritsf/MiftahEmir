import { Disclosure } from "@headlessui/react";
import { GiftIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ClipboardJS from "clipboard";

const Gift = () => {
  return (
    <>
      <div className="flex flex-col">
        <p
          className="handwriting my-8 text-center text-4xl lg:text-6xl text-red-700"
          // style={{ color: "rgb(209 153 220)" }}
        >
          Wedding Gift
        </p>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between rounded-lg bg-red-300 mx-4 px-4 py-2 text-left text-base font-medium text-white hover:bg-red-300 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <GiftIcon className="h-5 w-5 text-white" aria-hidden="true" />
                Open
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="grid grid-rows-2">
                  <div className="font-medium text-center">
                    <p className="italic">
                      Tanpa mengurangi rasa hormat, bagi anda yang ingin
                      memberikan tanda kasih untuk kami, dapat melalui
                      <br />
                    </p>
                    <Image
                      src="/images/logoBSI.jpeg"
                      width={100}
                      height={63}
                      alt="logoBSI"
                    />
                  </div>
                  <div className="font-medium text-center">
                    <h2 className="text-base text-gray-900">
                      Bank Syariah Indonesia
                      <br />
                      7206 5983 38
                    </h2>
                    <h2 className="text-base text-gray-500">
                      a/n <b>Emir Firdaus</b>
                    </h2>
                    <button
                      data-clipboard-text="7206598338"
                      className="btnCB mt-1 bg-red-300 text-white inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2"
                      onClick={() => {
                        new ClipboardJS(".btnCB");
                      }}
                    >
                      Salin Rekening
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Gift;
