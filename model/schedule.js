import mongoose from "mongoose";
//create type user Schema (lược đồ người dùng)
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },

    salon: {
      type: String,
    },
    combo: {
      type: String,
    },
    styList: {
      type: String,
    },
  },
  { timestamps: true }
);
//export user from mongoose
export default mongoose.model("schedule", userSchema);
