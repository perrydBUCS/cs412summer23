const express = require('express');
const router = express.Router();
const wxConfig = require('../config/wxConfig');
const Redis = require('ioredis');
const redis = new Redis();

//matches http://localhost:3000/wx
//
router.get('/', async (req, res, next) => {
    //get current weather from openweather.com
    //check cache
    //
    try {
        let cachedData = await redis.get("wxInfo");
        if (cachedData) {
            let parsedData = await JSON.parse(cachedData);
            console.log(`Cached: ${parsedData.current.temp}`);
            parsedData.cached = true;
            res.json(parsedData)
        }
        let rawWxInfo = await fetch(wxConfig.url + wxConfig.queryString)
        let parsedData = await rawWxInfo.json();



        console.table(`Live temp: ${parsedData.current.temp}`);
        let response = await redis.set("wxInfo", parsedData, "EX", 15);
        parsedData.cached = false;
        res.json(parsedData);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
})
module.exports = router; //the export makes router visible to any file that require()s it
