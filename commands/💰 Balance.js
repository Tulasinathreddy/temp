/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let profit = Libs.ResourcesLib.userRes("profit");
let res = Libs.ResourcesLib.userRes("balance");

let withdraw = Libs.ResourcesLib.userRes("withdraw");
Bot.sendMessage( "*👤Account Summary*"+"\n"+
"\n *💲 Current Earning:* "+ "\n"+ 
(res.value() +profit.value ()).toFixed(10) + " *LTC*" +
"\n\n*💸 Total Withdrawn:  *"+"\n"+ 
withdraw.value().toFixed  (10)
+" *LTC*" );
