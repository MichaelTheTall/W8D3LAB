use bucketlist;
db.dropDatabase();

db.bucketlist.insertMany([
  {
    goal: "Punch the Pope",
    description: "Get arrested",
    complete: "No"
  },
  {
    goal: "Eat a dolphin",
    description: "Tastes like tuna",
    complete: "No"
  },
  {
    goal: "Become a YouTube Celebrity",
    description: "Become a racist Fortnite sensation",
    complete: "No"
  },
  {
    goal: "Visit Mars",
    description: "Tasty perchlorates",
    complete: "No"
  },

]);
