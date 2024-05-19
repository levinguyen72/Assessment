export const formatDateTime = (dateStr: string, timeStr: string ): string => {
  let date = new Date(dateStr);

  // Extract hours and minutes from the time string
  let [hours, minutes] = timeStr.split(':').map(Number);

  // Set the specific time to the Date object
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);

  // Adjust for Singapore Time (GMT+8)
  let singaporeOffset = 8 * 60; // Singapore is GMT+8
  let localOffset = date.getTimezoneOffset();
  let offsetDifference = singaporeOffset - localOffset;
  date.setMinutes(date.getMinutes() + offsetDifference);

  // Format the date to the desired format
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hoursFormatted = String(date.getHours()).padStart(2, '0');
  const minutesFormatted = String(date.getMinutes()).padStart(2, '0');
  const secondsFormatted = String(date.getSeconds()).padStart(2, '0');

  // Construct the final ISO 8601 format string
  let isoString = `${year}-${month}-${day}T${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;

  return isoString;
}

export const formatDateSingapore = (dateStr: string): string => {
  // Parse the date string to create a Date object
  let date = new Date(dateStr);

  // Convert to Singapore Time (GMT+8)
  // Singapore is UTC+8, so we need to adjust the time accordingly
  let singaporeOffset = 8 * 60; // minutes
  let localOffset = date.getTimezoneOffset(); // in minutes
  let offsetDifference = singaporeOffset - localOffset;
  date.setMinutes(date.getMinutes() + offsetDifference);

  // Format the date to YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  // Construct the final date string in YYYY-MM-DD format
  let formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}