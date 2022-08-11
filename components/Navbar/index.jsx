import Link from "next/link";

import {
  AnnotationIcon,
  CollectionIcon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";

export function DesktopNavbar() {
  return (
    <nav className="bg-white shadow fixed w-full hidden lg:flex z-50">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-around h-16">
          <div className="flex flex-grow">
            <p>#FirdausilJannati</p>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Home
                  </a>
                </Link>
                <Link href="/invitation">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Invitation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <section
      id="bottom-navigation"
      className="lg:hidden block fixed inset-x-0 bottom-0 z-50 bg-white shadow"
    >
      <div id="tabs" className="flex justify-between">
        <Link href="/">
          <a className="w-full focus:text-gray-500 hover:text-gray-500 justify-center inline-block text-center pt-2 pb-1">
            <HomeIcon className="h-5 w-5 mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-home block text-xs mb-1">Home</span>
          </a>
        </Link>
        <Link href="/invitation">
          <a className="w-full focus:text-gray-500 hover:gray-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <NewspaperIcon className="h-5 w-5 mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-invitation block text-xs mb-1">
              Invitation
            </span>
          </a>
        </Link>
        <Link href="/invitation#acara">
          <a className="w-full focus:text-gray-500 hover:text-gray-500 justify-center inline-block text-center pt-2 pb-1">
            <CollectionIcon className="h-5 w-5 mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-acara block text-xs mb-1">Acara</span>
          </a>
        </Link>
        <Link href="/invitation#ucapan">
          <a className="w-full focus:text-gray-500 hover:text-gray-500 justify-center inline-block text-center pt-2 pb-1">
            <AnnotationIcon className="h-5 w-5 mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-ucapan block text-xs mb-1">Ucapan</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
