import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  // chuỗi kết nối kèm user-password - tên db - kèm lệnh ?retryWrites=true&w=majority
  const url =
    "mongodb://localhost:27017/shopecommerce?retryWrites=true&w=majority";
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Đã kết nối tới mongodb thành công - shop TTT");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
