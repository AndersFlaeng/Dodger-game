"use strict"

  const dodger = document.getElementById("dodger");
  dodger.style.bottom = "200px";

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 20}px`;
      playSoundOnMovement()
    }

    else {
        playgameoverSound();
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 20}px`;
      playSoundOnMovement()
    }

    else {
        playgameoverSound();
    }
  }

  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 360) {
      dodger.style.bottom = `${bottom + 20}px`;
      playSoundOnMovement()
    }

    else {
        playgameoverSound();
    }
  }

  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 20}px`;
      playSoundOnMovement()
    }

    else {
        playgameoverSound();
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }

    if (e.key === "ArrowUp") {
        moveDodgerUp();
      }
    
      if (e.key === "ArrowDown") {
        moveDodgerDown();
      }
    
  });


  const movementSound = document.getElementById("movementSound");

  function playSoundOnMovement()  {
    movementSound.play();
    movementSound.currentTime = 0;
};


const gameoverSound = document.getElementById("gameoverSound");

function playgameoverSound()  {
    gameoverSound.play();
    movementSound.currentTime = 0;
};


