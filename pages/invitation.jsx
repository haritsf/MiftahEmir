import Layout from "../components/Layout";
import ReactAudioPlayer from "react-audio-player";

// component
import HeaderWithMempelai from "../components/Invitation/HeaderWithMempelai";
import MapFrame from "../components/Invitation/MapFrame";
import Protocol from "../components/Invitation/Protocol";
import Attendance from "../components/Invitation/Attendance";
import Gift from "../components/Invitation/Gift";

import { getDataFromSheets } from "./api/sheets";
import VideoPreview from "../components/Invitation/VideoPreview";
import DetailAcara from "../components/Invitation/DetailAcara";

export default function Invitation({ data }) {
  return (
    <>
      <ReactAudioPlayer src="beautiful_crush.mp3" autoPlay />
      <Layout>
        <div className="animate__animated animate__fadeIn">
          <HeaderWithMempelai />

          <div className="flex max-w-5xl mx-auto">
            <hr className="shadow shadow-lg w-full justify-center items-center" />
          </div>

          <DetailAcara />

          <MapFrame />

          <div className="flex max-w-5xl mx-auto">
            <hr className="shadow w-full justify-center items-center" />
          </div>

          <VideoPreview />

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
