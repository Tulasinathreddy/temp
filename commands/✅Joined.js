/*CMD
  command: ✅Joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid
Api.getChatMember({
  chat_id: "@investwithme100",
  user_id: id,
  on_result: "/checkmember"
})
