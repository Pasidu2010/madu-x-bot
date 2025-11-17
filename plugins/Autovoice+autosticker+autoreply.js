const fs = require('fs');
const path = require('path');
const {readenv} = require('../lib/database')
const {cmd , command} = require('../command')

        //audio voice
cmd({
  on : "body"
},
async (conn , mek , m, {from , body , isowner}) => {
  const filepath = path.join(_dirname, '../my_data/autovoice.json');
const data = JSON.parse(fs.readfilesync(filepath , "utf8"));
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()){
      const config = await readEnv();
      if (config.AUTO_VOICE === 'true'){
    //if (sOwner) return;
    await conn.sendpersenceUpdate('recroding' ,from );
    await conn.sendMessage(from ,{audio:{ url:data[text]}, mimetype:'audio/mpeg',ptt : true },{quoted: mek });. 
       }
     }
   } 
});

//auto sticker
cmd({
  on : "body"
},
async (conn , mek , m, {from , body , isowner}) => {
  const filepath = path.join(_dirname, '../my_data/autosticker.json');
const data = JSON.parse(fs.readfilesync(filepath , "utf8"));
  for (const text in data) {
    if (body.toLowerCase() === text.toLowercase()){
      const config = await readEnv();
      if (config.AUTO_STICKER === 'true'){
    //if (sOwner) return
    await conn.sendMessage(from ,{sticker:{ url:data[text]}, package:'madushanka mod'},{quoted: mek });. 
       }
     }
   } 
});

//auto reply
cmd({
  on : "body"
},
async (conn , mek , m, {from , body , isowner}) => {
  const filepath = path.join(_dirname, '../my_data/autoreply.json');
const data = JSON.parse(fs.readfilesync(filepath , "utf8"));
  for (const text in data) {
    if (body.toLowerCase() === text.toLowerCase()){
      const config = await readEnv();
      if (config.AUTO_REPLY === 'true'){
    //if (sOwner) return;
    await m.reply(data[text])
       }
     }
   } 
});





