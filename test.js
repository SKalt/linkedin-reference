const fs = require('fs');

describe('all JSON files', function(){
  const check = (dir, file)=>{
    it(`${dir}/${file} is valid JSON`, function(){
      JSON.parse(fs.readFileSync(`${dir}/${file}`));
    });
  }
  fs.readdirSync('json/codes').forEach(file => check('json/codes', file))
  fs.readdirSync('json/field-descriptions')
    .forEach(file => check('json/field-descriptions', file));
})
