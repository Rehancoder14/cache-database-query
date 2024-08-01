const NodeCache = require('node-cache');
const Country = require('../schema/country-code-schema');

// Create a new cache instance
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const getCountryCode = async (req, res) => {
    try {
        let countryData = cache.get('countryData');

        if (!countryData) {
            console.log('Data returning from database');
            countryData = await Country.find().lean(); // Use lean() for faster query results

            cache.set('countryData', countryData);
        }

        return res.status(200).json({
            error: false,
            message: "Data fetched successfully",
            data: countryData
        });
    } catch (e) {
        return res.status(500).json({
            error: true,
            message: "Something went wrong",
            data: e
        });
    }
}
const getDataFromDatabase = async(req, res)=>{
   try{
    let countryData = await Country.find();
    return res.status(200).json({
        error: false,
        message: "Data fetched successfully",
        data: countryData
    });
   }catch(e){
    return res.status(500).json({
        error: true,
        message: "Something went wrong",
        data: e
    });
   }
}


module.exports = {
    getCountryCode,
    getDataFromDatabase,
}
