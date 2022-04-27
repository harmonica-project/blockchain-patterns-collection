const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
    sourceFile: 'collection.xlsx',
    header:{
        rows: 1
    },
    sheets: ['Patterns', 'Papers', 'Proposals'],
    columnToKey: {
        '*': '{{columnHeader}}'
    }
});

fs.writeFileSync('collection.json', JSON.stringify(result, null, 4));