const path = require('path');
const https = require('https')
const fs = require('fs');

const resource = [
    'https://unpkg.com/react@16.4.0/umd/react.production.min.js',
    'https://unpkg.com/react@16.4.0/umd/react.development.js',
    'https://unpkg.com/react-dom@16.4.0/umd/react-dom.development.js',
    'https://unpkg.com/react@16.4.0/umd/react.production.min.js',
    'https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js'
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
