import mongoose from 'mongoose';
const Connection =()=>{
    const DB_URI='mongodb://User:CodeForInterview@ac-jqgkoeq-shard-00-00.9lypstr.mongodb.net:27017,ac-jqgkoeq-shard-00-01.9lypstr.mongodb.net:27017,ac-jqgkoeq-shard-00-02.9lypstr.mongodb.net:27017/?ssl=true&replicaSet=atlas-12ncj6-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
        mongoose.connect(DB_URI,{useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
export default Connection;