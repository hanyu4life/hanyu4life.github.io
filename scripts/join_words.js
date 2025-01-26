const fs = require('fs');
const allLines = fs.readFileSync('../data/words.txt', { encoding: 'utf-8' });
const joinWords = allLines.split('\n').map(t => '\'' + t + '\'').join(',');
fs.writeFileSync('../output/join_words.txt', joinWords, { encoding: 'utf-8' });
console.log('DONE');