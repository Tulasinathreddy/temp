/*CMD
  command: /admreply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🔯Sent Your massage For user🔻
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "💠Admin Reply 🔻: " + "\n" + message + "\n\n Support Question Reply received";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("sucessfully replied")
