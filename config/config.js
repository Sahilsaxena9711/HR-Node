var env = process.env.NODE_ENV;
console.log(`Enviornment :: ${env}`);

if (env == "development") {
    process.env.PORT = process.env.PORT || 8090;
    process.env.MONGODB_URI = 'mongodb://Sahil9711:Sahil1058@ds149404.mlab.com:49404/hr';
} else if (env == "production") {
    process.env.PORT = process.env.PORT || 8090;
    process.env.MONGODB_URI = 'mongodb://Sahil9711:Sahil1058@ds149404.mlab.com:49404/hr';
} else {
    process.env.PORT = process.env.PORT || 8090;
    process.env.MONGODB_URI = 'mongodb://Sahil9711:Sahil1058@ds149404.mlab.com:49404/hr';
}

module.exports = { env };