function duplicateLetters(...args) {
  if (typeof args[0] !== 'string') {
    throw new Error('Sent parameter is not a string');
  }
  
  try {
    var arrOfString = args[0].split("");
    let uniqueValofArr = new Array(...new Set(arrOfString));

    // if all the values are unique - thats is no duplicate present
    if (arrOfString.length == uniqueValofArr.length) {
      return false;
    }

    let resultArr = [];

    uniqueValofArr.forEach((ele) => {
      let alpahetcount = 0;
      resultArr.push(
        arrOfString.reduce((acc, cur) => {
          if (ele == cur || ele == acc) {
            alpahetcount++;
          }
          return alpahetcount;
        })
      );
    });

    return resultArr.sort((a, b) => a - b).pop();
  } catch (error) {
    throw new Error(
      `An error has occured in function duplicateLetters ${error.toString()}`
    );
  }
}

export { duplicateLetters };
