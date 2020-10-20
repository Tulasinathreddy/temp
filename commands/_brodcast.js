/*CMD
  command: /brodcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ▶️Sent massage
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1340256266") {
  //your telegram id this is at the end of your referral link)
  let msg = "\n\n" + message
  Bot.sendMessageToAllPrivateChats(msg)
  Bot.sendMessage("✅Message sent to all active members")
} else {
  Bot.sendMessage("You are not an admin")
}
