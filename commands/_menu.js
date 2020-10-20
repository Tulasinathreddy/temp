/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// let but =
// "💰 Balance 💰,\ndeposit 📥,Referral 🤠,Withdraw 📤,\n📊 Bot Statistics 📊,🛠 support 🛠"
//Bot.sendKeyboard(but, "🤠 *Welcome "+user.first_name+"*")

let text =
  "🤠 <strong>Welocome💝, </strong>" +
  '<a href="' +
  "tg://user?id=" +
  user.telegramid +
  '"><strong>' +
  user.first_name +
  "</strong></a> "

var keyboard = [
  [
    {
      text: "💰 Balance"
    }
  ],
  [
    {
      text: "💱Referal"
    },
     {
      text: "Withdraw 💳"
    },
    {
      text: " 🛡Update Email "
    }
  ],
  [
    {
      text: "📞Support"
    },
    {
      text: "⚜️Bonus"
    },
    {
    text: "📊 Statistic"
    }
  ],
]

Api.sendMessage({
  text: text,
  parse_mode: "html",
  reply_markup: {
    keyboard: keyboard,
    resize_keyboard: true // for big buttons
  }
})
