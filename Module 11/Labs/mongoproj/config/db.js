const mongoose = require('mongoose');


//*** Schema definition */
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists',
        match:[/.+\@.+\..+/, 'Please fill a valid Email Address'],
        required:'Email is required'
    },
    hashed_password:{
        type:String
    },
    salt: String,
    updated: Date,
    created:{
        type: Date,
        default: Date.now
    }
})

const User=mongoose.model("User", UserSchema);

//*** Metods */
async function createUsers(name, email, password){
    const user = new User({name: name, email:email, hashed_password:password})
    await user.save();
    console.log("New User :" + name + " Email :" + email);
}

async function listUsers() {
    let users=await User.find({},{name:1, email:1, _id:0});
    console.log(users);
}

async function updateUsers(name, newname) {
    const   user = await User.updateOne({ name: name}, {$set:{name: newname}});
    console.log("Update user :" + name + " to: " + newname);
}

async function deleteUsers() {
    const user = await User.deleteMany({});
    console.log("Delete all users");
}


//**** Connection to MongoDB */
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/moviesDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>{
        console.log('MongoDB connected successfully');
    });
    await createUsers('Vidya', 'vidya@gmail.com','password@1234');   
    await createUsers('Kamakshee', 'Kamakshee@gmail.com','password@1234');
    await listUsers();
    await updateUsers('Bruno','Brian Brown');
    await listUsers();

  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

////mongoose.connect('mongodb+srv://admin:GodIsGreat@clustersrp.f5nec8x.mongodb.net/');