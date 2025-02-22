require('dotenv').config();
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/yelpCamp');
// `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    await User.deleteMany({});

    const user = new User({
        email: process.env.ADMIN_MAIL,
        username: process.env.ADMIN_USER
    });
    const registeredUser = await User.register(user, process.env.ADMIN_PASS);

    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: registeredUser._id, // registeredUser._id
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: {
                type: 'Point',
                coordinates: [74.5, 40]
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            images: {url: `https://res.cloudinary.com/dumt8bg2i/image/upload/v1740146505/YelpCamp/qevi5mbekoacawrzkqzr.png`,
                    filename: 'examplefile.png'
                    },
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})