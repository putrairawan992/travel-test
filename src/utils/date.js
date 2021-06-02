const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];

export const dateFormat = string => {
  if (!string) return 'date invalid';

  const date = new Date(string);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${day} ${month} ${year}`;
};

export const timeFormat = string => {
  const date = new Date(string);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
};
