import mongoose from "mongoose";
//create type user Schema (lược đồ người dùng)
const userSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//export user from mongoose
export default mongoose.model("shop", userSchema);
