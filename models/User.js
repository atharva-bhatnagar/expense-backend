const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  transactions: [
    {
      id: String,
      date: Date,
      topic: String,
      amount: Number,
      category: {
        type: String,
        default: "Expense",
      },
      secondPerson: String,
    },
  ],
  investments: [
    {
      id: String,
      name: String,
      date: Date,
      amount: Number,
      rate: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
