// src/core.js

interface Result {
  resistance: number;
  tolerance: number;
};

export function calculateResistorValue(value: string): Result | null {
  if (value == undefined || value == null || value === "") {
    return null;
  }

  value = value.trim().toLowerCase();

  let result: Result = { resistance: 0, tolerance: 0 };

  if (value.length == 3) {
    result.tolerance = 0.05;
  } else if (value.length == 4) {
    result.tolerance = 0.01;
  }

  if (/^\d{3}$/.test(value)) {
    const mantissa = parseInt(value.substr(0, 2), 10);
    const exponent = parseInt(value.substr(2, 1), 10);
    const resistance = mantissa * Math.pow(10, exponent);
    result.resistance = resistance;
    return result;
  } else if (/^\d{4}$/.test(value)) {
    const mantissa = parseInt(value.substr(0, 3), 10);
    const exponent = parseInt(value.substr(3, 1), 10);
    const resistance = mantissa * Math.pow(10, exponent);
    result.resistance = resistance;
    return result;
  } else if (/^\d*r\d*$/.test(value) &&
    (value.length == 3 || value.length == 4) &&
    value.split('r').length === 2 &&
    value.indexOf('r') != value.length - 1) {
    result.resistance = parseFloat(value.replace('r', '.'));
    return result;
  } else if (value.length == 3) {
    const codeMap: Record<string, number> = {};

    codeMap["01"] = 100;
    codeMap["02"] = 102;
    codeMap["03"] = 105;
    codeMap["04"] = 107;
    codeMap["05"] = 110;
    codeMap["06"] = 113;
    codeMap["07"] = 115;
    codeMap["08"] = 118;
    codeMap["09"] = 121;
    codeMap["10"] = 124;
    codeMap["11"] = 127;
    codeMap["12"] = 130;
    codeMap["13"] = 133;
    codeMap["14"] = 137;
    codeMap["15"] = 140;
    codeMap["16"] = 143;
    codeMap["17"] = 147;
    codeMap["18"] = 150;
    codeMap["19"] = 154;
    codeMap["20"] = 158;
    codeMap["21"] = 162;
    codeMap["22"] = 165;
    codeMap["23"] = 169;
    codeMap["24"] = 174;
    codeMap["25"] = 178;
    codeMap["26"] = 182;
    codeMap["27"] = 187;
    codeMap["28"] = 191;
    codeMap["29"] = 196;
    codeMap["30"] = 200;
    codeMap["31"] = 205;
    codeMap["32"] = 210;
    codeMap["33"] = 215;
    codeMap["34"] = 221;
    codeMap["35"] = 226;
    codeMap["36"] = 232;
    codeMap["37"] = 237;
    codeMap["38"] = 243;
    codeMap["39"] = 249;
    codeMap["40"] = 255;
    codeMap["41"] = 261;
    codeMap["42"] = 267;
    codeMap["43"] = 274;
    codeMap["44"] = 280;
    codeMap["45"] = 287;
    codeMap["46"] = 294;
    codeMap["47"] = 301;
    codeMap["48"] = 309;
    codeMap["49"] = 316;
    codeMap["50"] = 324;
    codeMap["51"] = 332;
    codeMap["52"] = 340;
    codeMap["53"] = 348;
    codeMap["54"] = 357;
    codeMap["55"] = 365;
    codeMap["56"] = 374;
    codeMap["57"] = 383;
    codeMap["58"] = 392;
    codeMap["59"] = 402;
    codeMap["60"] = 412;
    codeMap["61"] = 422;
    codeMap["62"] = 432;
    codeMap["63"] = 442;
    codeMap["64"] = 453;
    codeMap["65"] = 464;
    codeMap["66"] = 475;
    codeMap["67"] = 487;
    codeMap["68"] = 499;
    codeMap["69"] = 511;
    codeMap["70"] = 523;
    codeMap["71"] = 536;
    codeMap["72"] = 549;
    codeMap["73"] = 562;
    codeMap["74"] = 576;
    codeMap["75"] = 590;
    codeMap["76"] = 604;
    codeMap["77"] = 619;
    codeMap["78"] = 634;
    codeMap["79"] = 649;
    codeMap["80"] = 665;
    codeMap["81"] = 681;
    codeMap["82"] = 698;
    codeMap["83"] = 715;
    codeMap["84"] = 732;
    codeMap["85"] = 750;
    codeMap["86"] = 768;
    codeMap["87"] = 787;
    codeMap["88"] = 806;
    codeMap["89"] = 825;
    codeMap["90"] = 845;
    codeMap["91"] = 866;
    codeMap["92"] = 887;
    codeMap["93"] = 909;
    codeMap["94"] = 931;
    codeMap["95"] = 953;
    codeMap["96"] = 976;

    const factorMap: Record<string, number> = {};
    factorMap["z"] = 0.001;
    factorMap["y"] = 0.01;
    factorMap["r"] = 0.01;
    factorMap["x"] = 0.1;
    factorMap["s"] = 0.1;
    factorMap["a"] = 1;
    factorMap["b"] = 10;
    factorMap["h"] = 10;
    factorMap["c"] = 100;
    factorMap["d"] = 1000;
    factorMap["e"] = 10000;
    factorMap["f"] = 100000;

    const code = value.substr(0, 2);
    const factor = value.substr(2, 1);

    if (codeMap[code] != undefined && factorMap[factor] != undefined) {
      result.resistance = codeMap[code] * factorMap[factor];
      result.tolerance = 0.01;
      return result;
    }
  }

  return null;
}