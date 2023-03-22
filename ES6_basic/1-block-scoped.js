export default function taskBlock(trueOrFalse) {
  const task = trueOrFalse ? !trueOrFalse : trueOrFalse;
  const task2 = !task;

  return [task, task2];
}
