import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const getUser = router.query;

  return (
    <Layout>
      <div id="landing">
        <Image
          className="w-full h-auto object-cover animate__animated animate__fadeIn"
          layout="fill"
          src="/images/cincin_lightroom.jpg"
          alt="Backgorund Decorative"
        />
        <div className="bg-white opacity-75 absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex">
            <h1 className="handwriting text-center text-2xl lg:text-4xl animate__animated animate__fadeIn">
              The wedding of
            </h1>
          </div>
          <div className="flex pb-3">
            <h2 className="handwriting text-center text-4xl lg:text-6xl animate__animated animate__fadeIn">
              Miftah & Emir
            </h2>
          </div>
          <div className="flex animate__animated animate__fadeIn">
            <h3 className="text-xl lg:text-2xl mb-4">
              Minggu, 04 September 2022
            </h3>
          </div>
          {getUser.undang ? (
            <div className="flex flex-row space-x-8">
              <div className="flex animate__animated animate__fadeIn">
                <h2 className="text-lg lg:text-xl mb-4 text-center">
                  Kepada Bapak/Ibu/Saudara/i <br />
                  <b>{getUser.undang}</b>
                </h2>
              </div>
            </div>
          ) : null}
          <div className="flex flex-row space-x-8 px-4">
            <p className="text-base text-center">
              Dengan memohon Ridho dan Rahmat Allah SWT, kami mengundang anda
              untuk hadir di acara pernikahan putra putri kami.
            </p>
          </div>
          <div className="flex flex-row space-x-8 mt-4">
            <Link href="/invitation" target="_self">
              <div className="flex cursor-pointer bg-red-200 text-red-900 hover:text-white hover:bg-transparent border border-solid border-red-500 shadow rounded-md p-2 px-4 transition-all duration-500 ">
                Lihat Undangan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
