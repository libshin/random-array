const randomArray = inputArray => {
  if (!Array.isArray(inputArray) || inputArray.length === 0) {
    return [];
  }
  const array = [...inputArray];
  const length = parseInt(Math.random() * (inputArray.length - 1), 10) + 1;
  const ouputArray = [];
  for (let index = 0; index < length; index++) {
    const randomInt = parseInt(Math.random() * array.length, 10);
    ouputArray.push(array.splice(randomInt, 1)[0]);
  }
  return ouputArray;
};

export default randomArray;
