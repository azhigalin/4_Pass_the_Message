const messageInput = document.querySelector("#message-input");

document.querySelector(".submit").addEventListener("click", submit);
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submit();
});

function submit() {
  document.querySelector("#message-output").textContent = messageInput.value;
  messageInput.value = "";
}
