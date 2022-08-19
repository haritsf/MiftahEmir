import Image from "next/image";
import bgInv from "../../public/images/6.png";

const HeaderWithMempelai = () => {
  return (
    <>
      <div
        className="flex flex-col"
        style={{
          backgroundImage: `url(${bgInv.src})`,
          backgroundSize: "cover",
        }}
      >
        {/* Header */}
        <div className="flex">
          <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
            {/* <div> */}
              <Image
                src="/images/basmalah.png"
                width={288}
                height={93}
                alt="Bismillah"
              />
            {/* </div> */}
            <p className="mt-2 mb-2">
              Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
            </p>
            <p className="mx-2">
              Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
              menyelenggarakan pernikahan putra - putri kami:
            </p>
          </div>
        </div>

        {/* Mempelai */}
        <div className="flex flex-col md:flex-row justify-center items-center my-8">
          {/* CPP */}
          <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
            <div>
              <Image
                src="/images/asset_emir_solo_small.png"
                width={256}
                height={256}
                alt="Avatar Emir"
              />
            </div>
            <div>
              <p
                className="handwriting text-2xl"
                style={{ color: "rgb(209 153 220)" }}
              >
                Emir Firdaus, S.Kom.
              </p>
              <p className="text-xl">Putra Pertama</p>
              <p className="text-sm">Bapak Hanafi, S. Sos.</p>
              <p className="text-sm">Ibu Lelayati</p>
            </div>
          </div>

          {/* CPW */}
          <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
            <div>
              <Image
                src="/images/asset_miftah_solo_small.png"
                width={256}
                height={256}
                alt="Avatar Miftah"
              />
            </div>
            <div>
              <p
                className="handwriting text-2xl"
                style={{ color: "rgb(209 153 220)" }}
              >
                Miftahul Jannatul M., S. K. M.
              </p>
              <p className="text-xl">Putri Pertama</p>
              <p className="text-sm">Bapak Suhilman Efendi</p>
              <p className="text-sm">Ibu Misbahuliyati Tsaniyah</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWithMempelai;
