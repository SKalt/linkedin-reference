const json2csv = require('json2csv');
const fs = require('fs');

const toCsv = (dir, file) =>{
  let data = JSON.parse(fs.readFileSync(`json/${dir}/${file}`));
  let fields = Object.keys(data[0]);
  let newFilePath =`csvs/${dir}/${file.replace('json', 'csv')}`;
  fs.writeFileSync(newFilePath, json2csv({fields, data}));
}

fs.readdirSync('json/codes').map(file => toCsv('codes', file));
fs.readdirSync('json/field-descriptions')
  .map(file => toCsv('field-descriptions', file));
