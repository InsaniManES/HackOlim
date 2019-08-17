const mongoose = require('mongoose');
const Language = require('../models/Language');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://itay123:itay123@hackathonolim-rwaof.mongodb.net/test?retryWrites=true&w=majority"',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    );
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

async function main() {
  connectDB();
  // Imports the Google Cloud client library
  const { Translate } = require('@google-cloud/translate');

  // Instantiates a client
  const translate = new Translate();

  let [languages] = await translate.getLanguages().catch(err => {
    throw err;
  });

  let id = 1;
  languages = languages.map(lang => {
    lang.id = id;
    id++;
    return lang;
  });

  console.log(JSON.stringify(languages));

  Language.collection.insert(languages, onInsert);

  function onInsert(err, docs) {
    if (err) {
      console.error(err);
    } else {
      console.info(`${docs.length} languages were successfully stored.`);
    }
  }
}

main();
