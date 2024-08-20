const daysAsMs = (days) => {
  return days * 24 * 60 * 60 *1000;
};

const formatTimestamp = (tsInMs) => {
  return new Date(tsInMs).toLocaleDateString('sv-SE');
};

export const formattedDate = (daysDelta = 0) => {
  // Deliver the date, formatted in YYYY-MM-DD format, for today by default,
  // or offset by number of daysDelta. Takes negative or positive numbers.
  const now = new Date().getTime();
  return formatTimestamp(now + daysAsMs(daysDelta));
};

export const dateAsNum = (dateStr) => {
  return Number(dateStr.replaceAll('-', ''));
};
