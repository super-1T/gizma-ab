var buttonsBlock = document.querySelector(".buttons");
var buttonsWrapper = document.querySelector(".buttons__wrapper");
var allButtons = document.querySelectorAll('.buttons__wrapper-item');
var startY;
var startTop;
var isDragging = false;

buttonsBlock.addEventListener("touchstart", function(e) {
  isDragging = true;
  startY = e.touches[0].clientY;
  startTop = parseFloat(getComputedStyle(buttonsBlock).top);
  buttonsBlock.style.transition = 'none';
}, { passive: false });

buttonsBlock.addEventListener("touchmove", function(e) {
  if (isDragging) {
    e.preventDefault(); // Prevent default touchmove behavior inside the buttonsBlock
    var deltaY = e.touches[0].clientY - startY;
    var newTop = startTop + deltaY;
    buttonsBlock.style.top = newTop + "px";

    // Check if buttonsBlock reached the top or bottom and update body scroll position
    if (newTop <= 1 && newTop >= -buttonsWrapper.clientHeight + buttonsBlock.clientHeight) {
      document.body.scrollTop -= deltaY;
    }
  }
}, { passive: false });

buttonsBlock.addEventListener("touchend", function(e) {
  if (isDragging) {
    isDragging = false;
    buttonsBlock.style.transition = 'top 0.3s ease';
    if (parseFloat(getComputedStyle(buttonsBlock).top) < 1) {
        var direction = (startY - e.changedTouches[0].clientY) > 0 ? -1 : 1;
        var velocity = (startY - e.changedTouches[0].clientY) / (Date.now() - e.timeStamp);
        var targetTop = 1 + direction * 300 * velocity; // Увеличиваем смещение в зависимости от направления и скорости свайпа
  
        // Проверяем, чтобы верхний элемент не выходил за верхнюю границу блока
        if (parseFloat(getComputedStyle(buttonsWrapper).top) >= 0) {
          gsap.to(buttonsBlock, { top: 1, duration: 0.2, ease: "back.out(3)" });
        } else {
          gsap.to(buttonsBlock, { top: targetTop, duration: 1, ease: "power4.out" });
        }
      }
  }
}, { passive: false });

var body = document.querySelector('body');

body.addEventListener("touchstart", function(e) {
    isDragging = true;
    startY = e.touches[0].clientY;
    startTop = parseFloat(getComputedStyle(buttonsBlock).top);
    buttonsBlock.style.transition = 'none';
  }, { passive: false });

  body.addEventListener("touchmove", function(e) {
    if (isDragging) {
      e.preventDefault(); // Prevent default touchmove behavior inside the buttonsBlock
      var deltaY = e.touches[0].clientY - startY;
      var newTop = startTop + deltaY;
      buttonsBlock.style.top = newTop + "px";
  
      // Check if buttonsBlock reached the top or bottom and update body scroll position
      if (newTop <= 1 && newTop >= -buttonsWrapper.clientHeight + buttonsBlock.clientHeight) {
        document.body.scrollTop -= deltaY;
      }
    }
  }, { passive: false });

  body.addEventListener("touchend", function(e) {
    if (isDragging) {
      isDragging = false;
      buttonsBlock.style.transition = 'top 0.3s ease';
      if (parseFloat(getComputedStyle(buttonsBlock).top) < 1) {
        var direction = (startY - e.changedTouches[0].clientY) > 0 ? -1 : 1;
        var velocity = (startY - e.changedTouches[0].clientY) / (Date.now() - e.timeStamp);
        var targetTop = 1 + direction * 300 * velocity; // Увеличиваем смещение в зависимости от направления и скорости свайпа
  
        // Проверяем, чтобы верхний элемент не выходил за верхнюю границу блока
        if (parseFloat(getComputedStyle(buttonsWrapper).top) >= 0) {
          gsap.to(buttonsBlock, { top: 1, duration: 0.2, ease: "back.out(3)" });
        } else {
          gsap.to(buttonsBlock, { top: targetTop, duration: 1, ease: "power4.out" });
        }
      }
    }
  }, { passive: false });