/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
💡You Must Join Our Channel :
➣@investwithme100
➣@paybot800
To Use The Bot ✅
  ANSWER
  keyboard: ✅Joined
  aliases: 
CMD*/

function doTouchOwnLink(){
  Bot.sendMessage("⚠️Welcome Again");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){   
 Bot.sendMessageToChatWithId(refUser.chatId, 
    "♻️You just Just invited new user Your Friend join channel you get reward: @" + user.username);
}

function doAlreadyAttracted(){
  Bot.sendMessage("⚜️Welcome Again");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
