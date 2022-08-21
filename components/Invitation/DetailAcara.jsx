import cornerFlower from "../../public/images/2_trans.png";

const DetailAcara = () => {
  return (
    <>
      <div
        className="flex flex-col"
        id="acara"
        style={{
          backgroundImage: `url(${cornerFlower.src})`,
          backgroundSize: "cover",
        }}
      >
        <p
          className="handwriting my-8 text-center text-4xl lg:text-6xl text-red-700 animate__animated animate__pulse animate__infinite"
          // style={{ color: "rgb(209 153 220)" }}
        >
          Save the Date
        </p>

        <p className="mb-4 text-center mx-8">
          Pernikahan putra - putri kami Insya Allah akan dilaksanakan pada:
        </p>

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
      </div>
    </>
  );
};

export default DetailAcara;
