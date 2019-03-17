const numToWords = limit => {
  const words = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  const count = words
    .map(x => x.length)
    .slice(0, limit)
    .reduce((acc, elm) => acc+elm, 0);
};

numToWords(5);
