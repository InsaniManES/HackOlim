const mysql      = require('mysql');

// // The text to translate
// const text = 'כלב';
//
// // The target language
// const target = 'en';

let WordsConnection = mysql.createConnection({
    host     : '192.168.1.35',
    user     : 'eran',
    password : 'EranShiffman1234!',
    database : 'Words'
});

async function main() {
    WordsConnection.connect();

    // Imports the Google Cloud client library
    const {Translate} = require('@google-cloud/translate');

// // Instantiates a client
    const translate = new Translate();

    const [languages] = await translate.getLanguages().catch((err) =>{
        throw err;
    });

    languages.forEach((lang)=>{
        WordsConnection.query(`INSERT INTO languages (code,name) VALUES ('${lang.code}','${lang.name}')`, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
    });

// // Translates some text into Russian
//     translate.translate(text, target).then(async (translation)=>{
//         console.log(`Text: ${text}`);
//         console.log(`Translation: ${translation[0]}`);
//         console.log(languages);
//     });

    WordsConnection.end();
}

main();
