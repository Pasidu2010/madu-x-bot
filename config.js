const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "pykx3Q7a#bjcfYhKcVsiUNr32U6_GHLDyNi1uuP37gwQeAwZGhDo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/su67w9.jpg", 
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 마두샨카bot alive",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
