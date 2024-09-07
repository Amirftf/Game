// declaring the essential variables
var messageBox, inputBox, button, messages, messageIndex;

messageBox = document.querySelector(".message-box");
inputBox = document.querySelector(".input-box");
button = document.querySelector(".btn");
messageIndex = 0;

messages = [
  "میای یه بازی بکنیم؟",
  "یه عدد بین 1 تا 10 انتخاب کن",
  "حالا اون عدد رو به علاوه ی 2 کن",
  "حالا عدد به دست آمده رو ضرب در 3 کن",
  "حالا عدد به دست آمده رو توی کادر زرد رنگ وارد کن",
  "آماده ای یه چیز خفن ببینی؟"
];

button.onclick = function () {
  if (messageIndex <= messages.length - 1) {
    messageBox.innerHTML = messages[messageIndex];
    ++messageIndex;
  } else {
    messageBox.innerHTML = inputBox.value + " " + "بار عن تو صورتت"
  }
};
