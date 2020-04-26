

function isTriangle(...sides) {
  if (sides.length > 3) {
    throw new Error(
      `Number of paramter passed is more than 3, Triangle has only three sides`
    );
  }

  const isAllsidesNumber = (slide) => typeof slide == "number";

  if (sides.every(isAllsidesNumber)) {
    sides = sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2];
  }

  return false;
}

export { isTriangle };