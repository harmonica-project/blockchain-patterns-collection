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

const strResult = JSON.stringify(JSON.parse(JSON.stringify(result).replace(/:(\d+)([,\}])/g, ':"$1"$2')), null, 4);

fs.writeFileSync('collection.json', strResult);