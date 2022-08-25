module.exports = {
  mutipleMongooseToArray: function (mongoose) {
    return mongoose.map((item) => item.toObject());
  },
  singleMongooseToArray: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
