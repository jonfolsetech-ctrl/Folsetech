
// Basic JS for menu and chatbot demo
window.FolseChat = {
  send: function(form) {
    const input = form.querySelector('input[name="msg"]');
    const msg = input.value.trim();
    if(!msg) return;
    const log = document.querySelector('.chat-messages');
    const pUser = document.createElement('p');
    pUser.innerHTML = '<strong>You:</strong> ' + msg;
    log.appendChild(pUser);
    // Mock bot reply
    setTimeout(()=>{
      const pBot = document.createElement('p');
      pBot.innerHTML = '<strong>Bot:</strong> Thanks! We will follow up soon.';
      log.appendChild(pBot);
      log.scrollTop = log.scrollHeight;
    }, 400);
    input.value='';
  }
};
