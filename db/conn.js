const mongoose = require('mongoose')

async function main(){
try {
    await mongoose.connect('mongodb+srv://gdamaceno2018:teiso2002@cluster0.zdshwfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('banco ok');
    
} catch (error) {
    console.log('Eroo:' + error);

}

}

module.exports = main