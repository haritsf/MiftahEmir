import Image from "next/image";

const HeaderWithMempelai = () => {
  return (
    <>
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex">
          <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
            <p
              className="handwriting mb-8 text-center text-3xl lg:text-6xl"
              style={{ color: "rgb(209 153 220)" }}
            >
              Bismillahirrahmanirrahim
            </p>
            <p className="mt-8 mb-2">
              Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
            </p>
            <p>
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
                src="/images/emir_avatar.jpg"
                className="rounded-full"
                width={192}
                height={192}
                alt="Avatar Itsbat"
              />
            </div>
            <div>
              <p
                className="handwriting my-4 text-4xl"
                style={{ color: "rgb(209 153 220)" }}
              >
                Emir Firdaus, S.Kom.
              </p>
              <p className="text-xl lg:mb-2">Putra dari</p>
              <p className="text-sm">Bapak Hanafi, S. Sos.</p>
              <p className="text-sm">Ibu Lelayati</p>
            </div>
          </div>

          {/* CPW */}
          <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
            <div>
              <Image
                src="/images/miftah_avatar.jpg"
                className="rounded-full"
                width={192}
                height={192}
                alt="Avatar Fithriyya"
              />
            </div>
            <div>
              <p
                className="handwriting my-4 text-4xl"
                style={{ color: "rgb(209 153 220)" }}
              >
                Miftahul Jannatul Madaniyah, S. K. M.
              </p>
              <p className="text-xl lg:mb-2">Putri dari</p>
              <p className="text-sm"> Bapak Suhilman Efendi</p>
              <p className="text-sm">Ibu Misbahuliyati Tsaniyah</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWithMempelai;
