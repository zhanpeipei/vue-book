export function getTime(){
  let time=((new Date).getTime() + "").substring(0, 10);
  return time;
}
