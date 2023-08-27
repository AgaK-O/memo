/**
 * Function shuffles the elements inside a given array (Durstenfeld shuffle).
 */
export function randomizeArray<T>(arr: T[]): T[] {
    const newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; --i) {
      const x = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[x];
      newArray[x] = temp;
    }
    return newArray;
  }