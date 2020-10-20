/*CMD
  command: Withdraw 💳
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💱💠Sent me Amount How Much want Withdraw⬇️
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance");
var withdraw = Libs.ResourcesLib.userRes("withdraw");
var Now = Libs.ResourcesLib.userRes("Now");
var amount = parseFloat(message)
var email = User.getProperty("email");
var statistics = Libs.ResourcesLib.userRes("statistics");


if (amount>balance.value()){
Bot.sendKeyboard("🔙 Back","💰 Your Balance : "+(balance.value()).toFixed(10)+" *LTC*\n\n❌ You Can Not Withdraw Out Of Your Balance");
return
}

if (amount<0.00001000){
Bot.sendKeyboard("🔙 Back","💰 Your Balance : "+(balance.value()).toFixed(10)+" *LTC*\n\n❌ To withdraw, you have to input at least 0.00001000 *LTC*");
return
}

if (balance.value()<0.00001000){
Bot.sendKeyboard("🔙 Back","💰 *Your* *Balance* : "+(balance.value()).toFixed(8)+" *LTC*\n\n❌ To withdraw, you need at least 0.00001000 *LTC*");
return 
}

if (!email){
Bot.sendKeyboard("🔙 Back","You did not set any email address click on Set Email Address for setup your Email address");
return
}

User.setProperty("withdraw" , "amount" ,"integer");
balance.remove(amount); 
withdraw.add(amount); 
User.setProperty("Now" , "amount" ,"integer");
Now.add(amount);
User.setProperty("statistics", "1", "integer")
statistics.add(1);

Libs.Coinbase.apiCall({
  method: "POST",   
  path: "accounts/ef245443-873d-5df0-8e35-5b6dc04a5a0f/transactions/", // you find it in coinbase.com/accounts/ef245443-873d-5df0-8e35-5b6dc04a5a0f
  body: { 
 "type": "send",
 "to": email,
 "amount": message,
 "currency": "LTC"
},
  onSuccess: "/onSuccess",
  onError: "/onApiError"  // onError command
  // background: true // perform api call in background for big timeout limit
  // apiKey - HmoV0kZrPuIHymAh
  // secretApiKey - 7BsVpLMQLcwU5ZuGKZNSNGn3DJf8cUNT
})
