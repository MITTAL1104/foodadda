const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://rmittal1be21:raghav1603@cluster0.5s67rnl.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          else {
            global.food_items = data;
          }
        });
      }
    }
  );

  // try{
  //     await mongoose.connect(mongoURL,{
  // useNewUrlParser: true,
  // useUnifiedTopology: true
  //     });
  //     console.log("connected to MongoDB");
  // const fetched_data = await mongoose.connection.db.collection("food_items");
  // fetched_data.find({}).toArray(function(err,data){
  //     if(err) console.log(err);
  //     else
  //     {
  //         console.log(data);
  //     }
  // })
};

module.exports = mongoDB;
