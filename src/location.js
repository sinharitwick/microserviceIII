const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/address', async (req, res) => {
    const {lat, lon} = req.query;
    try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1&lat=${lat}&lon=${lon}`;
        const loc = await axios.get(url);
        const info = loc.data;
        res.json({info})
    } catch (error) {
        res.status(404);
        res.send({
            status: "404",
            error: "Not found"
        });
    }
});

module.exports = router;