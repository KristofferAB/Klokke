import React from "react";

function HourView1({ timeComponents, sunrise, sunset, golden }) {
  const getCellClass = (amHours, pmHours, threshold) => {
    const amMatch = amHours.some((h) => timeComponents.hour === h);
    const pmMatch = pmHours.some((h) => timeComponents.hour === h);

    if (amMatch && timeComponents.tenMinutes >= threshold) return "highlightAM";
    if (pmMatch && timeComponents.tenMinutes >= threshold) return "highlightPM";

    for (const h of amHours) {
      if (sunrise && sunrise.hour === h && sunrise.tenMinutes === threshold) return "sunrise";
      if (sunset && sunset.hour === h && sunset.tenMinutes === threshold) return "sunset";
      if (golden && golden.hour === h && golden.tenMinutes === threshold) return "golden";
    }

    if (pmMatch) return "borderPM";
    if (amMatch) return "borderAM";
    return "white";
  };

  const c = (amHours, pmHours, threshold) =>
    getCellClass(amHours, pmHours, threshold);

  return (
    <div className="table1">
      {/* COLUMN 1 */}
      <div className="column 1">
        <div className=""></div>
        <div className=""></div>
        <div className={`cell c105 ${c([10], [22], 50)}`}></div>
        <div className=""></div>
        <div className={`cell c95 ${c([9], [21], 50)}`}></div>
        <div className={`cell c95 ${c([9], [21], 50)}`}></div>
        <div className=""></div>
        <div className={`cell c85 ${c([8], [20], 50)}`}></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* COLUMN 2 */}
      <div className="column 2">
        <div className=""></div>
        <div className=""></div>
        <div className={`cell c104 ${c([10], [22], 40)}`}></div>
        <div className=""></div>
        <div className={`cell c94 ${c([9], [21], 40)}`}></div>
        <div className={`cell c94 ${c([9], [21], 40)}`}></div>
        <div className=""></div>
        <div className={`cell c84 ${c([8], [20], 40)}`}></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* COLUMN 3 */}
      <div className="column 3">
        <div className={`cell c115 ${c([11], [23], 50)}`}></div>
        <div className={`cell c114 ${c([11], [23], 40)}`}></div>
        <div className={`cell c113 c103 ${c([10, 11], [22, 23], 30)}`}></div>
        <div className=""></div>
        <div className={`cell c93 ${c([9], [21], 30)}`}></div>
        <div className={`cell c93 ${c([9], [21], 30)}`}></div>
        <div className=""></div>
        <div className={`cell c73 c83 ${c([7, 8], [19, 20], 30)}`}></div>
        <div className={`cell c74 ${c([7], [19], 40)}`}></div>
        <div className={`cell c75 ${c([7], [19], 50)}`}></div>
      </div>

      {/* COLUMN 4 */}
      <div className="column 4">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className={`cell c102 c112 ${c([10, 11], [22, 23], 20)}`}></div>
        <div className={`cell c92 ${c([9], [21], 20)}`}></div>
        <div className={`cell c92 ${c([9], [21], 20)}`}></div>
        <div className={`cell c101 ${c([7, 8], [19, 20], 20)}`}></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* COLUMN 5 */}
      <div className="column 5">
        <div className={`cell c125 ${c([0], [12], 50)}`}></div>
        <div className={`cell c124 ${c([0], [12], 40)}`}></div>
        <div className={`cell c123 ${c([0], [12], 30)}`}></div>
        <div className={`cell c122 ${c([0], [12], 20)}`}></div>
        <div className={`cell c91 c101 c111 c121 ${c([9, 10, 11, 0], [21, 22, 23, 12], 10)}`}></div>
        <div className={`cell c91 c81 c71 c61 ${c([6, 7, 8, 9], [18, 19, 20, 21], 10)}`}></div>
        <div className={`cell c62 ${c([6], [18], 20)}`}></div>
        <div className={`cell c63 ${c([6], [18], 30)}`}></div>
        <div className={`cell c64 ${c([6], [18], 40)}`}></div>
        <div className={`cell c65 ${c([6], [18], 50)}`}></div>
      </div>

      {/* COLUMN 6 */}
      <div className="column 6">
        <div className={`cell c125 ${c([0], [12], 50)}`}></div>
        <div className={`cell c124 ${c([0], [12], 40)}`}></div>
        <div className={`cell c123 ${c([0], [12], 30)}`}></div>
        <div className={`cell c122 ${c([0], [12], 20)}`}></div>
        <div className={`cell c121 c31 c11 c21 ${c([0, 1, 2, 3], [12, 13, 14, 15], 10)}`}></div>
        <div className={`cell c61 c31 c41 c51 ${c([3, 4, 5, 6], [15, 16, 17, 18], 10)}`}></div>
        <div className={`cell c62 ${c([6], [18], 20)}`}></div>
        <div className={`cell c63 ${c([6], [18], 30)}`}></div>
        <div className={`cell c64 ${c([6], [18], 40)}`}></div>
        <div className={`cell c65 ${c([6], [18], 50)}`}></div>
      </div>

      {/* COLUMN 7 */}
      <div className="column 7">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className={`cell c12 c22 ${c([1, 2], [13, 14], 20)}`}></div>
        <div className={`cell c32 ${c([3], [15], 20)}`}></div>
        <div className={`cell c32 ${c([3], [15], 20)}`}></div>
        <div className={`cell c42 c52 ${c([4, 5], [16, 17], 20)}`}></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* COLUMN 8 */}
      <div className="column 8">
        <div className={`cell c15 ${c([1], [13], 50)}`}></div>
        <div className={`cell c14 ${c([1], [13], 40)}`}></div>
        <div className={`cell c13 c23 ${c([1, 2], [13, 14], 30)}`}></div>
        <div className=""></div>
        <div className={`cell c33 ${c([3], [15], 30)}`}></div>
        <div className={`cell c33 ${c([3], [15], 30)}`}></div>
        <div className=""></div>
        <div className={`cell c43 c53 ${c([4, 5], [16, 17], 30)}`}></div>
        <div className={`cell c54 ${c([5], [17], 40)}`}></div>
        <div className={`cell c55 ${c([5], [17], 50)}`}></div>
      </div>

      {/* COLUMN 9 */}
      <div className="column 9">
        <div className=""></div>
        <div className=""></div>
        <div className={`cell c24 ${c([2], [14], 40)}`}></div>
        <div className=""></div>
        <div className={`cell c34 ${c([3], [15], 40)}`}></div>
        <div className={`cell c34 ${c([3], [15], 40)}`}></div>
        <div className=""></div>
        <div className={`cell c44 ${c([4], [16], 40)}`}></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      {/* COLUMN 10 */}
      <div className="column 10">
        <div className=""></div>
        <div className=""></div>
        <div className={`cell c25 ${c([2], [14], 50)}`}></div>
        <div className=""></div>
        <div className={`cell c35 ${c([3], [15], 50)}`}></div>
        <div className={`cell c35 ${c([3], [15], 50)}`}></div>
        <div className=""></div>
        <div className={`cell c45 ${c([4], [16], 50)}`}></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default HourView1;
