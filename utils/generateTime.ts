export const generateTimeSlots = (
  start: string,
  end: string,
  duration: number,
) => {
  const slots: string[] = [];
  const [startH, startM] = start.slice(0, 5).split(":").map(Number);
  const [endH, endM] = end.slice(0, 5).split(":").map(Number);

  let totalMins = startH * 60 + startM;
  const endMins = endH * 60 + endM;

  while (totalMins <= endMins) {
    const h = Math.floor(totalMins / 60)
      .toString()
      .padStart(2, "0");
    const m = (totalMins % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
    totalMins += duration;
  }
  return slots;
};
