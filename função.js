  const EMAILJS_PUBLIC_KEY  = "SUA_PUBLIC_KEY_AQUI";
  const EMAILJS_SERVICE_ID  = "SEU_SERVICE_ID_AQUI";
  const EMAILJS_TEMPLATE_ID = "SEU_TEMPLATE_ID_AQUI";

  emailjs.init(EMAILJS_PUBLIC_KEY);

  function sendEmail() {
    const btn  = document.getElementById("send-btn");
    const msg  = document.getElementById("form-msg");
    const name = document.getElementById("from_name").value.trim();
    const mail = document.getElementById("reply_to").value.trim();
    const text = document.getElementById("message").value.trim();

    if (!name || !mail || !text) {
      msg.textContent = "Por favor, preencha todos os campos.";
      msg.className = "form-msg error";
      return;
    }
    btn.disabled = true;
    btn.textContent = "Enviando…";
    msg.className = "form-msg";

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: name, reply_to: mail, message: text,
      to_email: "joaquimalfredounima@gmail.com"
    })
    .then(() => {
      msg.textContent = "Mensagem enviada! Responderei em breve.";
      msg.className = "form-msg success";
      document.getElementById("from_name").value = "";
      document.getElementById("reply_to").value  = "";
      document.getElementById("message").value   = "";
      btn.textContent = "Enviar mensagem →";
      btn.disabled = false;
    })
    .catch(() => {
      msg.textContent = "Configure o EmailJS para ativar o envio (veja comentários no código).";
      msg.className = "form-msg error";
      btn.textContent = "Enviar mensagem →";
      btn.disabled = false;
    });
  }