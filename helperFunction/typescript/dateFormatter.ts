export const formatterDate = (time: string): string => {
    if (time !== null) {
      const correctDateString = new Date(time);
      const formattedTime = correctDateString.toLocaleDateString() + ' ' + correctDateString.toLocaleTimeString();
      return formattedTime;
    } else {
      return (time = '-');
    }
  };
  