import { UserIcon } from "@heroicons/react/outline";
import format from "date-fns/format";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FeedUcapan = ({ feed }) => {
  return (
    <div className="flow-root overflow-y-auto" style={{height: "50vh"}}>
      <ul className="mb-8">
        {feed
          .slice(0)
          .reverse()
          .map((data, dataIdx) => (
            <li key={dataIdx}>
              <div className="relative pb-8">
                {dataIdx !== feed.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
                      <UserIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-base text-gray-500">
                        <span className="font-semibold text-gray-900">
                          {data.name}
                        </span>
                        {` mengucapkan "${data.greeting}"`} <br />
                        <time
                          dateTime={data.timestamp}
                          className="italic text-sm text-gray-500"
                        >
                          {format(
                            new Date(data.timestamp),
                            "d LLLL yyyy HH:mm",
                            "id-ID"
                          )}
                        </time>
                      </p>
                      {data.confirm == "Y" ? (
                        <div
                          className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                          style={{
                            backgroundColor: "rgb(141 221 175)",
                            color: "rgb(22 101 52)",
                          }}
                        >
                          Hadir
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FeedUcapan;
