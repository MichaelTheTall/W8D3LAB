use bucketlist;
db.dropDatabase();

db.bucketlist.insertMany([
  {
    goal: "Punch the Pope",
    description: "Get arrested"
  },
  {
    goal: "Eat a dolphin",
    description: "Tastes like tuna"
  },
  {
    goal: "Become a YouTube Celebrity",
    description: "Become a racist Fortnite sensation"
  },
  {
    goal: "Visit Mars",
    description: "Tasty perchlorates"
  },

]);
