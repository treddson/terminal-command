const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const fileToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(fileToString);
    });
};

module.exports.touch = (fileName) => {
    fs.writeFile(`${fileName}.txt`, '', 'utf8', (err) => {
        if (err) throw err;

        console.log(`File ${fileName} created`);
    });
};

module.exports.mkdir = (dirName) => {
    fs.mkdir(`./${dirName}`, (err) => {
        if (err) throw err;

        console.log(`Directory #{dirName} created`);
    })
};