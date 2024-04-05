export const formatterDate = (time) => {
  if (time !== null) {
    const correctDateString = new Date(time);
    const formattedTime = correctDateString.toLocaleDateString() + ' ' + correctDateString.toLocaleTimeString();
    return formattedTime;
  } else {
    return (time = '-');
  }
};
