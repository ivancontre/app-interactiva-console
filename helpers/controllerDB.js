const fs = require('fs');

const fileName = './db/data.json';

const saveFile = (data) => {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
};

const readFile = () => {
    if (!fs.existsSync(fileName)) {
        return null;
    }

    const info = fs.readFileSync(fileName, 'utf-8');

    return JSON.parse(info);
};

module.exports = {
    saveFile,
    readFile
};