import mongoose from "mongoose";
//create type user Schema (lược đồ người dùng)
const userSchema = new mongoose.Schema(
  {
    comboid: {
      type: String,
    },

    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    imageStylist: {
      type: String,
    },

    nameStylist: {
      type: String,
    },
  },
  { timestamps: true }
);
//export user from mongoose
export default mongoose.model("combo", userSchema);
