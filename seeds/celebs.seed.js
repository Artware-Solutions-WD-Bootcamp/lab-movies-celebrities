//TODO 1. Define Celebs info array
const celebsArr = [
  {
    name: "Storm Reid",
    occupation: "Actor",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Oprah Winfrey",
    occupation: "Actress",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Reese Witherspoon",
    occupation: "Actress",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Christina Hendricks",
    occupation: "Actress",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Bailee Madison",
    occupation: "Actress",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Martin Henderson",
    occupation: "Actor",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Toby Kebbell",
    occupation: "Actor",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
  {
    name: "Maggie Grace",
    occupation: "Actress",
    catchPhrase: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis!",
  },
];

//TODO 2. Define Celebs model
const Movie = require("../models/Celebrity.model.js");

//TODO 3. Require modeler
const mongoose = require("mongoose");

async function dbManage() {
  try {
    //TODO 4. Connect to DB
    const dbConnection = await mongoose.connect("mongodb://localhost/lab-movies-celebrities");

    // Review connection status
    console.log(`Connected to the database: "${dbConnection.connection.name}"`);

    //TODO 5. Insert celebs
    const insertedCelebs = await Movie.insertMany(celebsArr);

    // Send end transaction feedback to user
    console.log("Finished inserting celebrities!");
    console.log(`Inserted ${insertedCelebs.length} celebrities: ${insertedCelebs}`)

    //TODO 6. Disconnect from DB
    await mongoose.connection.close();

    // Send close connection feedback to user
    console.log(`Connection closed!`);
  } catch (err) {
    console.log(`An error has occurred when connecting to DB: ${err}`);
  }
}

dbManage();
