export const formatTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const isToday = dtime(0) === dtime(0, date);
  return isToday
    ? `${date.getHours()}:${date.getMinutes()}`
    : `${date.getDate()}.${date.getMonth() + 1}.` +
        `${date.getFullYear()}`.slice(2);
};

function dtime(e: any, date?: Date) {
  if (!date) {
    date = new Date();
  }
  date.setDate(date.getDate() + e);
  return date.toLocaleDateString();
}
