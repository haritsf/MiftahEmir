import { Disclosure } from "@headlessui/react";
import { GiftIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/solid";
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
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-300 px-4 py-2 text-left text-base font-medium text-white hover:bg-red-300 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                <GiftIcon className="h-5 w-5 text-white" aria-hidden="true" />
                Open
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="grid grid-cols-2">
                  <div className="font-medium text-center">
                    <h2 className="text-base text-gray-900">
                      0081093822100 (BJB)
                    </h2>
                    <h2 className="text-base text-gray-500">a/n Emir Fidaus</h2>
                    <button
                      data-clipboard-text="0081093822100"
                      className="btnCB mt-1 bg-red-300 text-white inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2"
                      onClick={() => {
                        new ClipboardJS(".btnCB");
                      }}
                    >
                      Salin Rekening
                    </button>
                  </div>
                  <div className="font-medium text-center">
                    <h2 className="text-base text-gray-900">
                      727***2551 (BSI)
                    </h2>
                    <h2 className="text-base text-gray-500">
                      a/n Emir Firdaus
                    </h2>
                    {/* <button
                      data-clipboard-text="7275002551"
                      className="btnCB mt-1 bg-red-300 text-white inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2"
                      onClick={() => {
                        new ClipboardJS(".btnCB");
                      }}
                    >
                      Salin Rekening
                    </button> */}
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
