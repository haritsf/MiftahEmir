import { Disclosure } from "@headlessui/react";
import { GiftIcon } from "@heroicons/react/outline";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Gift = () => {
  return (
    <>
      <div className="flex flex-col">
        <p
          className="handwriting my-8 text-center text-4xl lg:text-6xl "
          style={{ color: "rgb(209 153 220)" }}
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
                    <h2 className="text-base text-gray-900">802***714 (BNI)</h2>
                    <h2 className="text-base text-gray-500">
                      a/n Fulan Bin Fulan
                    </h2>
                  </div>
                  <div className="font-medium text-center">
                    <h2 className="text-base text-gray-900">727***2551 (BCA)</h2>
                    <h2 className="text-base text-gray-500">
                      a/n Fulanah Binti Fulan
                    </h2>
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
