export const cleanseData = data => data
  .split(' ')
  .map(str => str[0]
    .toUpperCase() + str.slice(1)
  ).join(' ');

export const spinalTapCase = data => {
  return cleanseData(data)
    .split(/(?=[A-Z])/)
    .map(str => str
      .replace(/[^a-zA-Z0-9-]+/g, " ")
      .trim()
      .toLowerCase()
    )
    .join('-');
};
