const itemBox = document.querySelectorAll(".grid-item");
const turn = document.querySelector("#turn");

for (let i = 0; i < 9; i++) {
  itemBox[i].addEventListener("click", () => buttonPushed(itemBox[i]));
}

let array = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let countClick = 1;
function buttonPushed(el) {
  let itemId = el.id;
  if (countClick % 2 === 1 && el.innerText === "") {
    el.innerText = "X";
    putValue(+itemId);
    countClick++;
    turn.innerText = "Player 2's Turn";
  } else if (countClick % 2 === 0 && el.innerText === "") {
    el.innerText = "O";
    putValue(+itemId);
    countClick++;
    turn.innerText = "Player 1's Turn";
  }
  calculateSum();
  if (countClick === 10) {
    window.alert("Draw!");
    resetGame();
  }
}

function resetGame() {
  for (let i = 0; i < 9; i++) {
    itemBox[i].innerText = "";
  }
  countClick = 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      array[i][j] = 0;
    }
  }
  turn.innerText = "Player 1's Turn";
}

function putValue(id) {
  if (id === 1) {
    if (countClick % 2 === 1) {
      array[0][0] = 1;
    } else {
      array[0][0] = -1;
    }
  }
  if (id === 2) {
    if (countClick % 2 === 1) {
      array[0][1] = 1;
    } else {
      array[0][1] = -1;
    }
  }
  if (id === 3) {
    if (countClick % 2 === 1) {
      array[0][2] = 1;
    } else {
      array[0][2] = -1;
    }
  }
  if (id === 4) {
    if (countClick % 2 === 1) {
      array[1][0] = 1;
    } else {
      array[1][0] = -1;
    }
  }
  if (id === 5) {
    if (countClick % 2 === 1) {
      array[1][1] = 1;
    } else {
      array[1][1] = -1;
    }
  }
  if (id === 6) {
    if (countClick % 2 === 1) {
      array[1][2] = 1;
    } else {
      array[1][2] = -1;
    }
  }
  if (id === 7) {
    if (countClick % 2 === 1) {
      array[2][0] = 1;
    } else {
      array[2][0] = -1;
    }
  }
  if (id === 8) {
    if (countClick % 2 === 1) {
      array[2][1] = 1;
    } else {
      array[2][1] = -1;
    }
  }
  if (id === 9) {
    if (countClick % 2 === 1) {
      array[2][2] = 1;
    } else {
      array[2][2] = -1;
    }
  }
}

function calculateSum() {
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum = sum + array[i][j];
    }
    checkWin(sum);
  }

  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum = sum + array[j][i];
    }
    checkWin(sum);
  }

  let sum = 0;
  let j = 0;
  for (let i = 0; i < 3; i++) {
    sum = sum + array[i][j];
    j++;
  }
  checkWin(sum);

  sum = 0;
  j = 2;
  for (let i = 0; i < 3; i++) {
    sum = sum + array[i][j];
    j--;
  }
  checkWin(sum);
}

function checkWin(sum) {
  if (sum === 3) {
    alert("Congratulations! Player1 wins");
    resetGame();
  }
  if (sum === -3) {
    alert("Congratulations! Player2 wins");
    resetGame();
  }
}
