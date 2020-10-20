/*CMD
  command: ⚜️Bonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 Sorry , you have received your bonus today.\n\nYou can receive your next bonus :\n ⏱ "+wait_hours+" h "+wait_minutes+" mn " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let res = Libs.ResourcesLib.userRes("balance")
res.add(0.000001)
Bot.sendMessage(
  "*🎁 Today you received\n\n0.000001 LTC\n\n⚜️ Come back tomorrow and try again.This Is free Bonus.*"
)
