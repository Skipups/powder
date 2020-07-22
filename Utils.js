// removes . and spaces, replaces with -
const cleanedResortString = (str) => {
  const resortCleaned1 = str.replace(/\s/g, "-");
  const resortCleaned2 = resortCleaned1.replace(/\./g, "");

  return resortCleaned2;
};

// input- Thu Jul 02 2020   output-  29/06/2020
const cleanedDepartureDate = (str) => {
  let monthNumber =
    "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(str.split(" ")[1]) / 3 + 1;

  //add 0 infront of month
  let month =
    monthNumber.toString().length === 1
      ? ("0" + monthNumber).slice(-2)
      : monthNumber;

  let day = str.split(" ")[2];
  let yr = str.split(" ")[3];

  return `${day}/${month}/${yr}`;
};

module.exports = { cleanedResortString, cleanedDepartureDate };
