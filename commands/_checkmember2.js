/*CMD
  command: /checkmember2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status

if (user == "member" || user == "creator" || user == "administrator" ) {
  Bot.runCommand("/refadd")
} else {
  Bot.sendMessage("❌ You are not joined!")
  Bot.runCommand("/start")
}

Bot.setProperty("status", user, "text")

//user checking again
