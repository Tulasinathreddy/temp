/*CMD
  command: /getlink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("ltcearniningbot");
Bot.sendMessage("" +parther_link+"");
