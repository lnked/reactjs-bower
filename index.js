const path = require('path');
const https = require('https')
const fs = require('fs');

const version = '16.3.2';

const resource = [
    `https://unpkg.com/react@${version}/umd/react.production.min.js`,
    `https://unpkg.com/react@${version}/umd/react.development.js`,
    `https://unpkg.com/react-dom@${version}/umd/react-dom.development.js`,
    `https://unpkg.com/react@${version}/umd/react.production.min.js`,
    `https://unpkg.com/react-dom@${version}/umd/react-dom.production.min.js`
];

const download = function(url) {
    const file = fs.createWriteStream(path.basename(url));

    https.get(url, (response) => {
        response.pipe(file);

        file.on('finish', () => {
            console.log('download complete!');
        });
    });
}

resource.map(url => download(url));
