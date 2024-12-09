import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect(`mongodb://localhost:27017/get_me_muscle`,
                         {useNewUrlParser: true,   
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }

  export default connectDb;
   
// import mongoose from "mongoose";

// const connectDB = async () => {
//     if (mongoose.connection.readyState >= 1) {
//         return;
//     }
//     try{
//         const conn = await mongoose.connect(`mongodb://localhost:27017/get_me_muscle`,
//         {useNewUrlParser: true,});
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(error.message)
//         process.exit(1);
//     }
// }

// export default connectDB;