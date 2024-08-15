let boxes = document.querySelectorAll(".box");
let resetgame_btn = document.querySelector(".reset-btn");
let newgame_btn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let gamecontainer = document.querySelector(".container");

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = true;

const GameWin = () => {
  for (let pattern of winningPattern) {
    let value1 = boxes[pattern[0]].innerText;
    let value2 = boxes[pattern[1]].innerText;
    let value3 = boxes[pattern[2]].innerText;

    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 == value2 && value2 == value3) {
        showWinner(value1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;

    GameWin();
  });
});

const boxDisabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const boxEnabled = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}. Please start a new game.`;
  msgcontainer.classList.remove("hide");
  gamecontainer.classList.add("hide");
  boxDisabled();
};

const resetGame = () => {
  turn = true;
  boxEnabled();
  msgcontainer.classList.add("hide");
};

const newGame = () => {
  turn = true;
  boxEnabled();
  msgcontainer.classList.add("hide");
  gamecontainer.classList.remove("hide");
};

newgame_btn.addEventListener("click", newGame);
resetgame_btn.addEventListener("click", resetGame);
