export default function createIteratorObject(report) {
  const arr = [];

  for (const deparment of Object.values(report)) {
    for (const emp of Object.values(deparment)) {
      arr.push(...emp);
    }
  }
  return arr;
}
