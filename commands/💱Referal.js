/*CMD
  command: 💱Referal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.ReferralLib.currentUser.refList.get(9).length;

let inline = [{ title : "🔁Get Invite Link" , command : "/getlink" }]

Bot.sendInlineKeyboard(inline , "👥 You Invited:  " +Libs.ReferralLib.currentUser.refList.get(9).length+" referrals\n\n💰 Per Referral 0.00001 LTC\n\nShare Your referral link to your Friends & earn unlimited LTC\n\n🛡Note\n🚫Fake, empty or spam users are deleted after checking\n\n\n\n😎Click here and get referal link👇👇")
