const randomArray = (inputArray, border) => {
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    return [];
  }
  let inf = 1;
  let sup = inputArray.length;
  if (border !== undefined) {
    if (Array.isArray(border) && border.length === 2) {
      inf = Math.max(inf, Math.min(inputArray.length - 1, border[0], border[1]));
      sup = Math.min(sup, Math.max(border[0], border[1]));
    } else if (Array.isArray(border) && border.length === 1) {
      sup = Math.min(inputArray.length, border[0]);
    } else if (typeof border === "number") {
      sup = Math.min(inputArray.length, border);
    }
  }
  const array = [...inputArray];
  const length = parseInt(Math.random() * (sup - inf + 1), 10) + inf;
  const ouputArray = [];
  for (let index = 0; index < length; index++) {
    const randomInt = parseInt(Math.random() * array.length, 10);
    ouputArray.push(array.splice(randomInt, 1)[0]);
  }
  return ouputArray;
};

export default randomArray;
