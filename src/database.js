import mongoose from 'mongoose';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.connect("mongodb+srv://JhonSalchijhon:Admin1716@cluster-carlos.w6z9xno.mongodb.net/Groceries_Carlos?appName=Cluster-Carlos", {
    serverSelectionTimeoutMS: 5000,
    family: 4
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB", error.message));

export default mongoose;