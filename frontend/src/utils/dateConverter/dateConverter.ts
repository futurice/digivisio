const dateOptionsWithTime: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

const dateConverter = (date: string, showTime = false) =>
  new Intl.DateTimeFormat('fi-FI', showTime ? dateOptionsWithTime : dateOptions).format(new Date(date));

export default dateConverter;
