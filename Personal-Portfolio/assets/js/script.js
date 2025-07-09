const words = ["Front-end Developer", "Web Developer", "UI/UX Designer", "Full Stack Developer"];
  const typedText = document.querySelector(".typed-text");
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    function loopTyping() {
      if (word.length > 0) {
        typedText.innerHTML += word.shift();
        timer = setTimeout(loopTyping, 100);
      } else {
        setTimeout(deletingEffect, 1500);
      }
    }
    loopTyping();
  }

  function deletingEffect() {
    let word = typedText.innerHTML.split("");
    function loopDeleting() {
      if (word.length > 0) {
        word.pop();
        typedText.innerHTML = word.join("");
        timer = setTimeout(loopDeleting, 50);
      } else {
        i = (i + 1) % words.length;
        typingEffect();
      }
    }
    loopDeleting();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (words.length) typingEffect();
  });




