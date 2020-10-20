/*CMD
  command: /onSuccess
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.data
var amountsent = result.amount.amount.slice(1, 500)
var email = result.to.email
Bot.sendInlineKeyboard(
  [[{ title: "🔙 Back", command: "/start" }]],
  "💸 *Payment Successfully Send. Check Your Coinbase.*\n\n*Amount :*" +
    amountsent +
    " *BTC*\n*Email :*" +
    email
)
Api.sendMessage({
  chat_id: "@paybot800",
  text:
    "✅ New Withdrawal Send\n🗣 User : @" +
    user.username +
    "\n🌐 Coinbase` `Email: " +
    email +
    "\n💵 Amount : " +
    amountsent +
    " LTC\n🤖 Bot Link: @" +
    bot.name +
    "\n✅ Status: Paid\n\n🎉Earn Upto 200$ Litecoin By Complete Survey. Refer Your Friends and gets extra 15% of their Earning🎉"})
