import React from "react";

function HourView1({ timeComponents, sunrise, sunset, golden }) {
  return (
    <div className="table1">
      {/* ---> COLUMN 1 <--- */}
      <div className="column 1">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c105 ${
            (timeComponents.hour === 10) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 22) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : sunrise && sunrise.hour === 10 && sunrise.tenMinutes === 50
              ? "sunrise"
              : sunset && sunset.hour === 10 && sunset.tenMinutes === 50
              ? "sunset"
              : golden && golden.hour === 10 && golden.tenMinutes === 50
              ? "golden"
              : timeComponents.hour === 22
              ? "borderPM"
              : timeComponents.hour === 10
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 10 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c95 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : sunrise && sunrise.hour === 9 && sunrise.tenMinutes === 50
              ? "sunrise"
              : sunset && sunset.hour === 9 && sunset.tenMinutes === 50
              ? "sunset"
              : golden && golden.hour === 9 && golden.tenMinutes === 50
              ? "golden"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>
        <div
          className={`cell c95 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : sunrise && sunrise.hour === 9 && sunrise.tenMinutes === 50
              ? "sunrise"
              : sunset && sunset.hour === 9 && sunset.tenMinutes === 50
              ? "sunset"
              : golden && golden.hour === 9 && golden.tenMinutes === 50
              ? "golden"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c85 ${
            (timeComponents.hour === 8) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 20) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : sunrise && sunrise.hour === 8 && sunrise.tenMinutes === 50
              ? "sunrise"
              : sunset && sunset.hour === 8 && sunset.tenMinutes === 50
              ? "sunset"
              : golden && golden.hour === 8 && golden.tenMinutes === 50
              ? "golden"
              : timeComponents.hour === 20
              ? "borderPM"
              : timeComponents.hour === 8
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 20 */}
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 2 <--- */}
      <div className="column 2">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c104 ${
            (timeComponents.hour === 10) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 22) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : sunrise && sunrise.hour === 10 && sunrise.tenMinutes === 40
              ? "sunrise"
              : sunset && sunset.hour === 10 && sunset.tenMinutes === 40
              ? "sunset"
              : golden && golden.hour === 10 && golden.tenMinutes === 40
              ? "golden"
              : timeComponents.hour === 22
              ? "borderPM"
              : timeComponents.hour === 10
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 10 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c94 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>
        <div
          className={`cell c94 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c84 ${
            (timeComponents.hour === 20) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : (timeComponents.hour === 20) & (timeComponents.tenMinutes >= 40)
              ? " higlight"
              : timeComponents.hour === 20
              ? "borderPM"
              : timeComponents.hour === 8
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 20 */}
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 3 <--- */}
      <div className="column 3">
        <div
          className={`cell c115 ${
            (timeComponents.hour === 11) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 23) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 11 */}
        </div>

        <div
          className={`cell c114 ${
            (timeComponents.hour === 11) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 23) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 11 */}
        </div>

        <div
          className={`cell c113 c103 ${
            (timeComponents.hour === 10 || timeComponents.hour === 11) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 22 || timeComponents.hour === 23) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 22 || timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 10 || timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 10/11 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c93 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>
        <div
          className={`cell c93 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c73 83 ${
            (timeComponents.hour === 19 || timeComponents.hour === 20) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : (timeComponents.hour === 7 || timeComponents.hour === 8) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : timeComponents.hour === 20 || timeComponents.hour === 19
              ? "borderPM"
              : timeComponents.hour === 8 || timeComponents.hour === 7
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 19/20 */}
        </div>
        <div
          className={`cell c74 ${
            (timeComponents.hour === 19) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : (timeComponents.hour === 7) & (timeComponents.tenMinutes >= 40)
              ? " higlight"
              : timeComponents.hour === 19 || timeComponents.hour === 7
              ? "borderPM"
              : "white"
          }`}
        >
          {/* 19 */}
        </div>
        <div
          className={`cell c75 ${
            (timeComponents.hour === 19) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : (timeComponents.hour === 7) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : timeComponents.hour === 19 || timeComponents.hour === 7
              ? "borderPM"
              : "white"
          }`}
        >
          {/* 19 */}
        </div>
      </div>

      {/* ---> COLUMN 4 <--- */}
      <div className="column 4">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c102 c112 ${
            (timeComponents.hour === 10 || timeComponents.hour === 11) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 22 || timeComponents.hour === 23) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 22 || timeComponents.hour === 23
              ? "borderPM"
              : timeComponents.hour === 10 || timeComponents.hour === 11
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 10/11 */}
        </div>
        <div
          className={`cell c92 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>
        <div
          className={`cell c92 ${
            (timeComponents.hour === 9) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 21) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 21 */}
        </div>

        <div
          className={`cell c101 ${
            (timeComponents.hour === 19 || timeComponents.hour === 20) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : (timeComponents.hour === 7 || timeComponents.hour === 8) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : timeComponents.hour === 20 || timeComponents.hour === 19
              ? "borderPM"
              : timeComponents.hour === 8 || timeComponents.hour === 7
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 19/20 */}
        </div>

        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 5 <--- */}
      <div className="column 5">
        <div
          className={`cell c125 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>

        <div
          className={`cell c124 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>

        <div
          className={`cell c123 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>

        <div
          className={`cell c122 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>
        <div
          className={`cell c91 c101 c111 c121 ${
            (timeComponents.hour === 21 ||
              timeComponents.hour === 22 ||
              timeComponents.hour === 23 ||
              timeComponents.hour === 12) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 9 ||
                  timeComponents.hour === 10 ||
                  timeComponents.hour === 11 ||
                  timeComponents.hour === 0) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 21 ||
                timeComponents.hour === 22 ||
                timeComponents.hour === 23 ||
                timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 9 ||
                timeComponents.hour === 10 ||
                timeComponents.hour === 11 ||
                timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 9, 10, 11, 12 */}
        </div>

        <div
          className={`cell c91 c81 c71 c61 ${
            (timeComponents.hour === 18 ||
              timeComponents.hour === 19 ||
              timeComponents.hour === 20 ||
              timeComponents.hour === 21) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 6 ||
                  timeComponents.hour === 7 ||
                  timeComponents.hour === 8 ||
                  timeComponents.hour === 9) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 18 ||
                timeComponents.hour === 19 ||
                timeComponents.hour === 20 ||
                timeComponents.hour === 21
              ? "borderPM"
              : timeComponents.hour === 6 ||
                timeComponents.hour === 7 ||
                timeComponents.hour === 9 ||
                timeComponents.hour === 9
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 6,7,8,9 */}
        </div>

        <div
          className={`cell c62 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>
        <div
          className={`cell c63 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>
        <div
          className={`cell c64 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>
        <div
          className={`cell c65 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>
      </div>

      {/* ---> COLUMN middle  <--- */}
      {/* <div className="column middle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="center"> 0</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}

      {/* ---> COLUMN 6 <--- */}
      <div className="column 6">
        <div
          className={`cell c125 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>
        <div
          className={`cell c124 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>
        <div
          className={`cell c123 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>
        <div
          className={`cell c122 ${
            (timeComponents.hour === 0) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 12) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 12
              ? "borderPM"
              : timeComponents.hour === 0
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12 */}
        </div>

        <div
          className={`cell c121 c31 c11 c21 ${
            (timeComponents.hour === 12 ||
              timeComponents.hour === 13 ||
              timeComponents.hour === 14 ||
              timeComponents.hour === 15) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 0 ||
                  timeComponents.hour === 1 ||
                  timeComponents.hour === 2 ||
                  timeComponents.hour === 3) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 12 ||
                timeComponents.hour === 13 ||
                timeComponents.hour === 14 ||
                timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 0 ||
                timeComponents.hour === 1 ||
                timeComponents.hour === 2 ||
                timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 12, 13,14, 15 */}
        </div>
        <div
          className={`cell c61 c 31 c41 c51 ${
            (timeComponents.hour === 15 ||
              timeComponents.hour === 16 ||
              timeComponents.hour === 17 ||
              timeComponents.hour === 18) &
            (timeComponents.tenMinutes >= 10)
              ? "highlightPM"
              : (timeComponents.hour === 3 ||
                  timeComponents.hour === 4 ||
                  timeComponents.hour === 5 ||
                  timeComponents.hour === 6) &
                (timeComponents.tenMinutes >= 10)
              ? "highlightAM"
              : timeComponents.hour === 15 ||
                timeComponents.hour === 16 ||
                timeComponents.hour === 17 ||
                timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 3 ||
                timeComponents.hour === 4 ||
                timeComponents.hour === 5 ||
                timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 15, 16,17,18 */}
        </div>
        <div
          className={`cell c62 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>

        <div
          className={`cell c63 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>
        <div
          className={`cell c64 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>

        <div
          className={`cell c65 ${
            (timeComponents.hour === 6) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 18) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 18
              ? "borderPM"
              : timeComponents.hour === 6
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 06 */}
        </div>
      </div>

      {/* ---> COLUMN 7 <--- */}
      <div className="column 7">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c12 c22 ${
            (timeComponents.hour === 1 || timeComponents.hour === 2) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 13 || timeComponents.hour === 14) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 13 || timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 1 || timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 10/11 */}
        </div>
        <div
          className={`cell c32 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>

        <div
          className={`cell c32 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>

        <div
          className={`cell c42 c52 ${
            (timeComponents.hour === 4 || timeComponents.hour === 5) &
            (timeComponents.tenMinutes >= 20)
              ? "highlightAM"
              : (timeComponents.hour === 16 || timeComponents.hour === 17) &
                (timeComponents.tenMinutes >= 20)
              ? "highlightPM"
              : timeComponents.hour === 16 || timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 4 || timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 04/05 */}
        </div>

        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 8 <--- */}
      <div className="column 8">
        <div
          className={`cell c15 ${
            (timeComponents.hour === 1) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 13) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 13
              ? "borderPM"
              : timeComponents.hour === 1
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 01 */}
        </div>

        <div
          className={`cell c14 ${
            (timeComponents.hour === 1) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 13) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 13
              ? "borderPM"
              : timeComponents.hour === 1
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 01 */}
        </div>

        <div
          className={`cell c13 c14 ${
            (timeComponents.hour === 1 || timeComponents.hour === 2) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 13 || timeComponents.hour === 14) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 13 || timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 1 || timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 10/11 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c33 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>
        <div
          className={`cell c33 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c43 c53 ${
            (timeComponents.hour === 4 || timeComponents.hour === 5) &
            (timeComponents.tenMinutes >= 30)
              ? "highlightAM"
              : (timeComponents.hour === 16 || timeComponents.hour === 17) &
                (timeComponents.tenMinutes >= 30)
              ? "highlightPM"
              : timeComponents.hour === 16 || timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 4 || timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 04/05 */}
        </div>

        <div
          className={`cell c54 ${
            (timeComponents.hour === 5) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 17) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 05 */}
        </div>
        <div
          className={`cell c55 ${
            (timeComponents.hour === 5) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 17) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 17
              ? "borderPM"
              : timeComponents.hour === 5
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 05 */}
        </div>
      </div>
      {/* ---> COLUMN 9 <--- */}
      <div className="column 9">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c24 ${
            (timeComponents.hour === 2) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 14) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 02 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c34 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>
        <div
          className={`cell c34 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c44 ${
            (timeComponents.hour === 4) & (timeComponents.tenMinutes >= 40)
              ? "highlightAM"
              : (timeComponents.hour === 16) & (timeComponents.tenMinutes >= 40)
              ? "highlightPM"
              : timeComponents.hour === 16
              ? "borderPM"
              : timeComponents.hour === 4
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 04 */}
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>

      {/* ---> COLUMN 10 <--- */}
      <div className="column 10">
        <div className=""></div>
        <div className=""></div>
        <div
          className={`cell c25 ${
            (timeComponents.hour === 2) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 14) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 14
              ? "borderPM"
              : timeComponents.hour === 2
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 02 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c35 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>
        <div
          className={`cell c35 ${
            (timeComponents.hour === 3) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 15) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 15
              ? "borderPM"
              : timeComponents.hour === 3
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 03 */}
        </div>

        <div className=""></div>
        <div
          className={`cell c45 ${
            (timeComponents.hour === 4) & (timeComponents.tenMinutes >= 50)
              ? "highlightAM"
              : (timeComponents.hour === 16) & (timeComponents.tenMinutes >= 50)
              ? "highlightPM"
              : timeComponents.hour === 16
              ? "borderPM"
              : timeComponents.hour === 4
              ? "borderAM"
              : "white"
          }`}
        >
          {/* 04 */}
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default HourView1;
