/*CMD
  command: /refadd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var onetime=User.getProperty("lollol")
if(onetime==undefined){
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
User.setProperty("lollol","end","text")
if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(0.00001);
}
}
 Bot.runCommand("/menu")
