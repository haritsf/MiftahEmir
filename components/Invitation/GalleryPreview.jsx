import Image from "next/image";

const GalleryPreview = () => {
  return (
    <div className="grid grid-rows-1 md:flex-row justify-center items-center">
      <p
        className="handwriting my-8 text-center text-4xl lg:text-6xl text-red-700"
        // style={{ color: "rgb(209 153 220)" }}
      >
        Gallery
      </p>
      <div className="mx-2 my-2 justify-center text-center">
        <Image
          src="/images/grid/1.jpg"
          width={265}
          height={540}
          alt="G1"
          className="animate__animated animate__fadeInUp animate__delay-3s"
        />
      </div>
      <div className="mx-2 my-2 justify-center text-center">
        <Image
          src="/images/grid/2.jpg"
          width={265}
          height={540}
          alt="G2"
          className="animate__animated animate__fadeInUp animate__delay-3s"
        />
      </div>
      <div className="mx-2 my-2 justify-center text-center">
        <Image
          src="/images/grid/3.jpg"
          width={265}
          height={540}
          alt="G3"
          className="animate__animated animate__fadeInUp animate__delay-3s"
        />
      </div>
      {/* <div className="mx-2 my-2 justify-center text-center">
        <Image
          src="/images/grid/4.jpg"
          width={265}
          height={540}
          alt="G4"
          className="animate__animated animate__fadeInUp animate__delay-3s"
        />
      </div> */}
      <div style={{ textAlign: "center" }}>
        <video
          // className="justify-center items-center"
          controls
          src={"/MiftahEmir-Engage-Small.mp4"}
          //   style={{ width: "400px", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default GalleryPreview;
