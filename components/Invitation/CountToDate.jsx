import React, { useEffect } from "react";
import gsap from "gsap";

const CountToDate = () => {
  useEffect(function mount() {
    window.addEventListener("load", () => {
      console.log(document);
      let hariH = "2022,07,03";

      (function () {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const countDown = new Date(hariH).getTime();
        const x = setInterval(() => {
          const now = new Date().getTime();
          const distance = countDown - now;

          document.getElementById("days").innerText = setNumber(distance / day);

          document.getElementById("hours").innerText = setNumber(
            (distance % day) / hour
          );
          document.getElementById("minutes").innerText = setNumber(
            (distance % hour) / minute
          );
          animateFlip(seconds, Math.floor((distance % minute) / second));

          //do something later when date is reached

          // if (distance < 0) {
          //   let headline = document.getElementById("headline"),
          //     countdown = document.getElementById("countdown"),
          //     content = document.getElementById("content");

          //   headline.innerText = "This is the Day";
          //   countdown.style.display = "none";
          //   content.style.display = "block";

          //   clearInterval(x);
          // }
        }, 1000);
      })();

      function animateFlip(element, value) {
        const valueInDom = element.querySelector(".bottom-back").innerText;
        const currentValue = value < 10 ? "0" + value : "" + value;

        if (valueInDom === currentValue) return;

        element.querySelector(".top-back span").innerText = currentValue;
        element.querySelector(".bottom-back span").innerText = currentValue;

        gsap.to(
          element.querySelector(".top"),
          0.7,
          // { x: 0 },
          {
            rotationX: "-180deg",
            transformPerspective: 300,
            onComplete: function () {
              element.querySelector(".top").innerText = currentValue;
              element.querySelector(".bottom").innerText = currentValue;
              gsap.set(element.querySelector(".top"), { rotationX: 0 });
            },
          }
        );

        gsap.to(
          element.querySelector(".top-back"),
          0.7,
          // { x: 0 },
          {
            rotationX: 0,
            transformPerspective: 300,
            clearProps: "all",
          }
        );
      }

      function setNumber(num) {
        const res = Math.floor(num);
        return res >= 10 ? res : `0${res}`;
      }
    });
  });

  return (
    <div className="max-w-4xl mx-auto mt-8 z-10">
      <div className="mt-14 flex items-center justify-between">
        <div className="flex items-center mr-7 flex-col flex-nowrap">
          <span
            className="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
            id="days"
          >
            <span className="top">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom">08</span>
            <span className="bottom-back">
              <span>00</span>
            </span>
          </span>
          <span className="title">Days</span>
        </div>

        <div className="flex items-center mr-7 flex-col flex-nowrap">
          <span
            className="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
            id="hours"
          ></span>
          <span className="title">Hours</span>
        </div>

        <div className="flex items-center mr-7 flex-col flex-nowrap">
          <span
            className="time-elem relative w-36 h-32 shadow-xl flex items-center justify-center mb-5 rounded-lg text-6xl"
            id="minutes"
          ></span>
          <span className="title">Minutes</span>
        </div>

        <div className="flex items-center mr-7 flex-col flex-nowrap">
          <span className="seconds time-elem mb-6 text-center" id="seconds">
            <span className="top">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom">00</span>
            <span className="bottom-back">
              <span>00</span>
            </span>
          </span>
          <span className="title">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountToDate;
