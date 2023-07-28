let upBtn = document.querySelector(".container__block_btnUp");
let downBtn = document.querySelector(".container__block_btnDown");
let chooseBtn = document.querySelector(".container__block_btnChoose");

let elevator = document.querySelector(".elevator");
let whichFloor = +prompt("Выберите этаж: ");
if (whichFloor == "") {
  upBtn.addEventListener("click", () => {
    if (elevator.style.bottom === "") {
      elevator.style.bottom = "110px";
    } else if (elevator.style.bottom === "110px") {
      elevator.style.bottom = "173px";
    } else if (elevator.style.bottom === "173px") {
      elevator.style.bottom = "236px";
    } else if (elevator.style.bottom === "236px") {
      elevator.style.bottom = "299px";
    } else if (elevator.style.bottom === "299px") {
      elevator.style.bottom = "362px";
    } else if (elevator.style.bottom === "362px") {
      elevator.style.bottom = "425px";
    } else if (elevator.style.bottom === "425px") {
      elevator.style.bottom = "488px";
    } else if (elevator.style.bottom === "488px") {
      elevator.style.bottom = "551px";
    } else if (elevator.style.bottom === "551px") {
      elevator.style.bottom = "614px";
    } else if (elevator.style.bottom === "614px") {
      elevator.style.bottom = "677px";
    }
  });
  downBtn.addEventListener("click", () => {
    if (elevator.style.bottom === "677px") {
      elevator.style.bottom = "614px";
    } else if (elevator.style.bottom === "614px") {
      elevator.style.bottom = "551px";
    } else if (elevator.style.bottom === "551px") {
      elevator.style.bottom = "488px";
    } else if (elevator.style.bottom === "488px") {
      elevator.style.bottom = "425px";
    } else if (elevator.style.bottom === "425px") {
      elevator.style.bottom = "362px";
    } else if (elevator.style.bottom === "362px") {
      elevator.style.bottom = "299px";
    } else if (elevator.style.bottom === "299px") {
      elevator.style.bottom = "236px";
    } else if (elevator.style.bottom === "236px") {
      elevator.style.bottom = "173px";
    } else if (elevator.style.bottom === "173px") {
      elevator.style.bottom = "110px";
    } else if (elevator.style.bottom === "110px") {
      elevator.style.bottom = "";
    }
  });
} else {
  switch (whichFloor) {
    case 0:
      elevator.style.bottom = "";
    case 1:
      elevator.style.bottom = "110px";
      break;
    case 2:
      elevator.style.bottom = "173px";
      break;
    case 3:
      elevator.style.bottom = "236px";
      break;
    case 4:
      elevator.style.bottom = "299px";
      break;
    case 5:
      elevator.style.bottom = "362px";
      break;
    case 6:
      elevator.style.bottom = "425px";
      break;
    case 7:
      elevator.style.bottom = "488px";
      break;
    case 8:
      elevator.style.bottom = "551px";
      break;
    case 9:
      elevator.style.bottom = "614px";
      break;
    case 10:
      elevator.style.bottom = "677px";
      break;
  }
  upBtn.addEventListener("click", () => {
    if (elevator.style.bottom === "") {
      elevator.style.bottom = "110px";
    } else if (elevator.style.bottom === "110px") {
      elevator.style.bottom = "173px";
    } else if (elevator.style.bottom === "173px") {
      elevator.style.bottom = "236px";
    } else if (elevator.style.bottom === "236px") {
      elevator.style.bottom = "299px";
    } else if (elevator.style.bottom === "299px") {
      elevator.style.bottom = "362px";
    } else if (elevator.style.bottom === "362px") {
      elevator.style.bottom = "425px";
    } else if (elevator.style.bottom === "425px") {
      elevator.style.bottom = "488px";
    } else if (elevator.style.bottom === "488px") {
      elevator.style.bottom = "551px";
    } else if (elevator.style.bottom === "551px") {
      elevator.style.bottom = "614px";
    } else if (elevator.style.bottom === "614px") {
      elevator.style.bottom = "677px";
    }
  });
  downBtn.addEventListener("click", () => {
    if (elevator.style.bottom === "677px") {
      elevator.style.bottom = "614px";
    } else if (elevator.style.bottom === "614px") {
      elevator.style.bottom = "551px";
    } else if (elevator.style.bottom === "551px") {
      elevator.style.bottom = "488px";
    } else if (elevator.style.bottom === "488px") {
      elevator.style.bottom = "425px";
    } else if (elevator.style.bottom === "425px") {
      elevator.style.bottom = "362px";
    } else if (elevator.style.bottom === "362px") {
      elevator.style.bottom = "299px";
    } else if (elevator.style.bottom === "299px") {
      elevator.style.bottom = "236px";
    } else if (elevator.style.bottom === "236px") {
      elevator.style.bottom = "173px";
    } else if (elevator.style.bottom === "173px") {
      elevator.style.bottom = "110px";
    } else if (elevator.style.bottom === "110px") {
      elevator.style.bottom = "";
    }
  });
}
chooseBtn.addEventListener("click", () => {
  let whichFloor2 = +prompt("Выберите этаж: ");
  switch (whichFloor2) {
    case 0:
      elevator.style.bottom = "";
    case 1:
      elevator.style.bottom = "110px";
      break;
    case 2:
      elevator.style.bottom = "173px";
      break;
    case 3:
      elevator.style.bottom = "236px";
      break;
    case 4:
      elevator.style.bottom = "299px";
      break;
    case 5:
      elevator.style.bottom = "362px";
      break;
    case 6:
      elevator.style.bottom = "425px";
      break;
    case 7:
      elevator.style.bottom = "488px";
      break;
    case 8:
      elevator.style.bottom = "551px";
      break;
    case 9:
      elevator.style.bottom = "614px";
      break;
    case 10:
      elevator.style.bottom = "677px";
      break;
  }
});
