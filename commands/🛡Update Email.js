/*CMD
  command: 🛡Update Email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💠Sent Your Coinbase Email🔻🔻
  keyboard: 
  aliases: 
CMD*/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

if(validateEmail(message)){
User.setProperty("email",message,"string")
Bot.sendKeyboard("Withdraw 💳,\n🔙 Back","*Successfully Your New Email Added*\n\n\nNew Email : " +message+ "\n\n🔻 If You Want To Update Your Email Click On *🔙Back*");

}else{
Bot.sendKeyboard("🛡Update Email,\n🔙 Back","❌ Wrong Email.\n\n*Your Email Not validate*");
}
