import { useForm } from "react-hook-form";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { CloudUploadIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

const kedatangan = [
  {
    label: "Sendiri",
  },
  {
    label: "Berpasangan",
  },
];

import FeedUcapan from "./FeedUcapan";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Attendance = ({ sheetdata }) => {
  const router = useRouter();
  const [datang, setDatang] = useState(false);
  const [bersama, setBersama] = useState(kedatangan[0]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  const sentKehadiran = async (data) => {
    Object.assign(data, {
      akanDatang: datang,
      datangBersama: bersama.label,
    });
    fetch("/api/sentData", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      if (response.status === 201) {
        toast.success("Kehadiran Anda disimpan, Terima Kasih");
        setTimeout(() => router.push("/invitation"), 3000);
      }
    });
    // reset(); // clears the input on submitting
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-8">
        <div className="grow mx-2 my-2 px-4 py-2 shadow-lg rounded-md border border-solid border-gray-500">
          <p className="text-lg font-medium text-gray-900">
            Konfirmasi Kehadiran
          </p>

          <form onSubmit={handleSubmit(sentKehadiran)}>
            <textarea
              id="namaHadir"
              name="namaHadir"
              {...register("namaHadir", {
                required: "This is required!",
                minLength: {
                  value: 1,
                  message: "Please lengthen this text to 1 characters or more.",
                },
              })}
              rows={1}
              style={{
                resize: "none",
              }}
              className={classNames(
                errors.namaHadir
                  ? "border-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 "
                  : "focus:ring-red-300 focus:border-red-300",
                "shadow-sm mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              )}
              placeholder="Nama Anda"
            />
            <textarea
              id="ucapan"
              name="ucapan"
              {...register("ucapan", {
                required: "This is required!",
                minLength: {
                  value: 1,
                  message: "Please lengthen this text to 1 characters or more.",
                },
              })}
              rows={3}
              style={{
                resize: "none",
              }}
              className={classNames(
                errors.ucapan
                  ? "border-red-300 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 "
                  : "focus:ring-red-300 focus:border-red-300",
                "shadow-sm mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              )}
              placeholder="Ucapan"
            />
            <p className="pt-2 text-base font-medium text-gray-900">
              Apakah Anda Akan Datang?
            </p>
            <div className="flex flex-row items-center py-2">
              <p className="text-base font-medium text-gray-900">Tidak</p>
              <Switch
                checked={datang}
                onChange={setDatang}
                className="mx-2 flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
              >
                <span className="sr-only">Use Attendance</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bg-white w-full h-full rounded-md"
                />
                <span
                  aria-hidden="true"
                  className={classNames(
                    datang ? "bg-red-300" : "bg-gray-200",
                    "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
                  )}
                />
                <span
                  aria-hidden="true"
                  className={classNames(
                    datang ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
                  )}
                />
              </Switch>
              <p className="text-base font-medium text-gray-900">Ya</p>
            </div>

            {datang ? (
              <div className="flex flex-col py-2">
                <p className="text-base font-medium text-gray-900">
                  Dengan Siapa Anda Akan Datang?
                </p>
                <RadioGroup value={bersama} onChange={setBersama}>
                  <RadioGroup.Label className="sr-only">
                    Attendance With
                  </RadioGroup.Label>
                  <div className="relative bg-white rounded-md -space-y-px">
                    {kedatangan.map((attend, attendIdx) => (
                      <RadioGroup.Option
                        key={attend.label}
                        value={attend}
                        className="relative py-2 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex items-center text-sm">
                              <span
                                className={classNames(
                                  checked
                                    ? "bg-red-300 border-transparent"
                                    : "bg-white border-gray-300",
                                  active
                                    ? "ring-2 ring-offset-2 ring-red-300"
                                    : "",
                                  "h-4 w-4 rounded-full border flex items-center justify-center"
                                )}
                                aria-hidden="true"
                              >
                                <span className="rounded-full bg-white w-1.5 h-1.5" />
                              </span>
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? "text-red-500" : "text-gray-900",
                                  "ml-3 text-base font-medium"
                                )}
                              >
                                {attend.label}
                              </RadioGroup.Label>
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            ) : null}
            <button
              type="submit"
              className="inline-flex items-center px-2 py-2 border border-red-300 shadow-lg text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <CloudUploadIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
              <p className="pl-2 text-base font-medium text-white">Kirim</p>
            </button>
          </form>
        </div>
        <div
          className="grow mx-2 my-2 px-4 py-2 shadow-lg rounded-md border border-solid border-gray-500"
          id="feed-ucapan"
        >
          <p className="text-lg font-medium text-gray-900 pb-2">
            Ucapan dan Doa
          </p>
          <FeedUcapan feed={sheetdata} />
        </div>
      </div>
    </>
  );
};

export default Attendance;
