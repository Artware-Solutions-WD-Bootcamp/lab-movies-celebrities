//TODO 1. Define Movie info array
const moviesArr = [
  {
    title: `A Wrinkle in Time`,
    genre: `Fantasy`,
    plot: `After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him.`,
  },
  {
    title: `The Strangers: Prey at Night`,
    genre: `Terror`,
    plot: `A family of four staying at a secluded mobile home park for the night are stalked and then hunted by three masked psychopaths.`,
  },
  {
    title: `The Hurricane Heist`,
    genre: `Action, Adventure, Crime`,
    plot: `Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.`,
  },
  {
    title: `Gringo`,
    genre: `Action, Comedy, Crime`,
    plot: `GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.`,
  },
  {
    title: `Thoroughbreds`,
    genre: `Comedy, Crime, Drama`,
    plot: `Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.`,
  },
  {
    title: `The Leisure Seeker`,
    genre: `Adventure, Comedy, Drama`,
    plot: `A runaway couple go on an unforgettable journey in the faithful old RV they call "The Leisure Seeker".`,
  },
  {
    title: `Black Panther`,
    genre: `Action, Adventure, Sci-Fi`,
    plot: `T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.`,
  },
  {
    title: `Red Sparrow`,
    genre: `Action, Drama, Thriller`,
    plot: `Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.`,
  },
];

// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

//TODO 1a. Optional
//TODO    If we need to use local variables and since this file is not connected to the server,
//TODO     we need to connect it to .env file to obtain the needed local variables
require(`dotenv/config`);


//TODO 2. Define Movie model
const Movie = require(`../models/Movies.model.js`);

//TODO 3. Require modeler
const mongoose = require(`mongoose`);

async function dbManage() {
  try {
    //TODO 4. Connect to DB
    const dbConnection = await mongoose.connect(`mongodb://localhost/lab-movies-celebrities`);

    // Review connection status
    console.log(`Connected to the database: ${dbConnection.connection.name}`);

    //TODO 5. Insert movies
    const insertedMovies = await Movie.insertMany(moviesArr);

    // Send end transaction feedback to user
    console.log(`Finished inserting movies!`);
    console.log(`Inserted ${insertedMovies.length} movies: ${insertedMovies}`)

    //TODO 6. Disconnect from DB
    await mongoose.connection.close();

    // Send close connection feedback to user
    console.log(`Connection closed`);
  } catch (err) {
    console.log(`An error has occurred when connecting to DB: ${err}`);
  }
}

dbManage();
