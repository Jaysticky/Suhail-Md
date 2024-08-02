const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_22_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc2LFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWS1VDckI5cXRocFpTMURBMzRmZjQxelFiZmVkY0syTG5SL1g4UEpsTEdVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODQwNjU2NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5ODQ0RDM0RkZBREZBRDMzRkQ2M0IwNTkzNzFCNDA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY0MDk1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3R0FfMzYyMlJwYVZxY1pOUnJEZHVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyYjcwYzkzLTM2YmQtNDJmNi04NDA4LWZjZjAzYzI3NWUzOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxNzAsXG4gICAgICAyNixcbiAgICAgIDIxOCxcbiAgICAgIDE5OCxcbiAgICAgIDEyOCxcbiAgICAgIDEyOSxcbiAgICAgIDQ0LFxuICAgICAgMSxcbiAgICAgIDIzMixcbiAgICAgIDk1LFxuICAgICAgMjQxLFxuICAgICAgMTkxLFxuICAgICAgMTU5LFxuICAgICAgMzcsXG4gICAgICAxODQsXG4gICAgICAxMzYsXG4gICAgICAxOTksXG4gICAgICAxOTQsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICA2MCxcbiAgICAgIDg1LFxuICAgICAgNSxcbiAgICAgIDE4NSxcbiAgICAgIDE4MSxcbiAgICAgIDM4LFxuICAgICAgMjI4LFxuICAgICAgNzIsXG4gICAgICAxMTgsXG4gICAgICAxODcsXG4gICAgICA5NyxcbiAgICAgIDIxNixcbiAgICAgIDE3MSxcbiAgICAgIDIxOSxcbiAgICAgIDIyMSxcbiAgICAgIDgsXG4gICAgICAxNjgsXG4gICAgICAxMTAsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlFITU45WlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQwNjU2NTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIzMzg2MjgyNDc2ODg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+WWhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJekE2WTRHRUxEVXRiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNYVTJVL3dQSEJQd3lCOVNJRC9sUjFGWnJqL2hQb1lNM1FWNzliTDlFQjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjNnN1hERS95NEh4ZDZobmdxWUZyRTFTNUM4V0p3cFdpWVJtS05NSmV3WDB4dis5TThQelFKZHc2NlNRRGVuRWFJKzF5VTZSVFdyczlGNm1FQW9OREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWG9odjFTNWFhMTQ4aEUvenNNZnAvWWVhUUFkWVpib2RSWXhQWkZlS1d1RERYQlFncDlFU1RlQUlPam5qZFg2TTZZMVh2KzEyd1MwUll6clVrQldraEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NDA2NTY1NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjQwOTQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2NiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDY2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSd29jeE9TVlRuTWRmM05aOGRDYjh5amc5aWFSeXNJcmZkZENidHR4cllzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDE3MDEzODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2NDAwMzc3MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
