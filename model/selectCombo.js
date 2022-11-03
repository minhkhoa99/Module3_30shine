import mongoose from "mongoose";
//create type user Schema (lược đồ người dùng)
const userSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
//export user from mongoose
export default mongoose.model("combo", userSchema);
