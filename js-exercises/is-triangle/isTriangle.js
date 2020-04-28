

function isTriangle(...sides) {
  if (sides.length > 3) {
    throw new Error(
      `Number of parameter passed is more than 3, Triangle has only three sides`
    );
  }

  const isAllSidesNumber = (side) => typeof side == "number";

  if (sides.every(isAllSidesNumber)) {
    sides = sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2];
  }

  return false;
}

export { isTriangle };