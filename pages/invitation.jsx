import Layout from "../components/Layout";
import ReactAudioPlayer from "react-audio-player";

// component
import HeaderWithMempelai from "../components/Invitation/HeaderWithMempelai";
import MapFrame from "../components/Invitation/MapFrame";
import Protocol from "../components/Invitation/Protocol";
import Attendance from "../components/Invitation/Attendance";
import Gift from "../components/Invitation/Gift";

import { getDataFromSheets } from "./api/sheets";
import bgInv from "../public/images/bg_full.png"

export default function Invitation({ data }) {
  return (
    <>
      <ReactAudioPlayer src="bgm.mp3" autoPlay />
      <Layout>
        <div
          className="mx-4 lg:mx-0 animate__animated animate__fadeIn"
          style={{
            backgroundImage: `url(${bgInv.src})`,
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <HeaderWithMempelai />

          <div className="flex max-w-5xl mx-auto">
            <hr className="shadow shadow-lg w-full justify-center items-center" />
          </div>

          <div
            className="flex flex-col justify-center items-center my-8 max-w-4xl mx-auto"
            id="acara"
          >
            <p
              className="handwriting my-8 text-center text-4xl lg:text-6xl"
              style={{ color: "rgb(209 153 220)" }}
            >
              Save the Date
            </p>

            <div className="flex flex-col mx-8 max-w-xs justify-center items-center text-center">
              {/* <CountToDate /> */}
              <p className="mb-4 text-center">
                Pernikahan putra - putri kami Insya Allah akan dilaksanakan
                pada:
              </p>
            </div>

            <div className="grid grid-rows-1 md:flex-row justify-center items-center my-8">
              {/* Kiri */}
              <div className="mx-2 mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
                <p>
                  Akad Nikah <br />
                  Tanggal : Minggu, 04 September 2022 <br />
                  Waktu : Pukul 08.00 - 09.00 WIB <br />
                  Lokasi : Komplek PDK No.83 RT 001/004, Cirendeu, Lebak Bulus
                </p>
              </div>
              {/* Kanan */}
              <div className="mx-2 mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
                <p>
                  Resepsi Pernikahan <br />
                  Tanggal : Minggu, 04 September 2022 <br />
                  Waktu : Pukul 11.00 - 15.00 WIB <br />
                  Lokasi : Komplek PDK No.83 RT 001/004, Cirendeu, Lebak Bulus{" "}
                  <br />
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center my-2">
              <div className="flex flex-col border border-solid border-gray-300 shadow-md rounded-md">
                <MapFrame />
              </div>
            </div>
          </div>

          <div className="flex max-w-5xl mx-auto my-8">
            <hr className="shadow w-full justify-center items-center" />
          </div>

          <div>
            <p
              className="handwriting my-8 text-center text-4xl lg:text-6xl"
              style={{ color: "rgb(209 153 220)" }}
            >
              Protokol Kesehatan
            </p>
            <Protocol />
          </div>

          <div className="flex flex-col max-w-5xl mx-auto my-8 md:max-w-xl lg:max-w-3xl">
            <blockquote className="text-center">
              &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
              menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar
              kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
              di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
              itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
              yang berpikir.&quot;
            </blockquote>
            <p className="text-center my-4">QS. Ar-Rum:21</p>
          </div>

          <div className="flex flex-col text-center max-w-5xl mx-auto">
            <p>Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh</p>
            <p className="mt-4">Kami yang berbahagia,</p>
            <p>Kel. Bapak Suhilman Efendi & Ibu Misbahuliyati Tsaniyah</p>
            <p>Kel. Bapak Hanafi, S. Sos. & Ibu Lelayati</p>
            <p
              className="handwriting my-8 text-center text-4xl lg:text-6xl"
              style={{ color: "rgb(209 153 220)" }}
            >
              Miftah & Emir
            </p>
          </div>

          <div id="ucapan">
            <Attendance sheetdata={data} />
          </div>
          <div id="gift" style={{ paddingBottom: "15vh" }}>
            <Gift />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const sheet = await getDataFromSheets();
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}
