/*CMD
  command: 📊 Statistic
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let withdraw = Libs.ResourcesLib.userRes("withdraw");
var Now = User.getProperty("statistics");
Bot.sendMessage( "*📊 Personal Statistics*\n\n*💵 Your Total withdraw :  *"+"\n"+ 
withdraw.value().toFixed  (10)
+" *LTC*\n\n 💵 *Your Withdraw :*"+"\n"+Now+" *Times*");
