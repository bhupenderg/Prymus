class Chat{
    constructor(){
        this.openedYet = false
        this.chatWrapper = document.querySelector("#chat-wrapper")
        this.openIcon = document.querySelector(".chat-header")
        this.injectHTML()
        this.chatLog = document.querySelector('#chat')
        this.chatField = document.querySelector('#chatField')
        this.chatForm = document.querySelector('#chatForm')
        this.closeIcon = document.getElementById('close')
        this.events()
    }

    // Events

    events() {

        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault()
            this.sendMessageToServer()
        })


        this.openIcon.addEventListener('click', () => {
            this.showChat()
        })
        
            this.closeIcon.addEventListener('click', () => {
                this.hideChat()
            }) 

    }


    // Methods

    sendMessageToServer() {
        this.socket.emit('chatMessageFromBrowser', {message: this.chatField.value})
        this.chatField.value = ''
        this.chatField.focus()
    }

    injectHTML() {
        this.chatWrapper.innerHTML = `
        <div class="chat-title-bar">Chat <span class="chat-title-bar-close" id="close">Close</span></div>
        <div id = "chat" class="chat-log"></div>
        <form id="chatForm" class="chat-form border-top">
        <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">
        </form>
        `
    }

    showChat() {
        if(!this.openedYet) {
            this.openConnection()
        }

        this.openedYet = true
        this.chatWrapper.classList.add("chat--visible")
    }

    openConnection() {
        this.socket = io()
        this.socket.on('chatMessageFromServer', (data) => {
            this.displayMessageFromServer(data)
        })
    }

    displayMessageFromServer(data) {
        this.chatLog.insertAdjacentHTML('beforeend', `
        <div class="chat-other">
        <div class="chat-message"><div class="chat-message-inner">
          <a href="#"><strong>${data.username}:</strong></a>
          ${data.message}
        </div></div>
      </div>
        `)
    }

    hideChat() {
        this.chatWrapper.classList.remove("chat--visible")
    }

}

new Chat()




