function abc() {
    let user = document.getElementById("user-message");
    let chatbot = document.getElementById("chat-message")
    chatbot.innerHTML += `<div class="chat-message user">
    <p> You : ${user.value}</p>
</div>`

let usermessage = user.value.toLowerCase()
if (usermessage == "i want to know about courses"){
chatbot.innerHTML+=`<div class = "chat-message">
 <p> Bot:Yes there is new batch starting from wednesday. you can enroll now.
`
}
}
