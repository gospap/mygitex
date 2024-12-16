let table = document.createElement("table");
table.classList.add("mytable");
for (let i = 0; i < 5; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < 5; j++) {
    let cell = document.createElement("td");
    cell.textContent = "0";
    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.body.appendChild(table);

function showresults() {
  document.getElementById("result").innerHTML =
    right / (wrong + right) - wrong / (wrong + right);
}

var intervId;
var count = 31;
function countdown() {
  count--;
  document.getElementById("counter").innerHTML = count;

  if (count === 1) {
    clearInterval(intervId);
    showresults();
  }
}

function start() {
  intervId = setInterval(countdown, 1000);
  var random1 = Math.floor(Math.random() * 10);
  document.getElementById("num").innerHTML = random1;
  var myfirsttable = document.getElementById("mytable");
  var rows = document.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    for (var j = 0; j < cells.length; j++) {
      cells[j].innerHTML = Math.floor(Math.random() * 100 + 1);
    }
  }
}
var right = 0;
var wrong = 0;
table.addEventListener("click", clickHandler);
function clickHandler(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "TD") {
    const myvalue = parseInt(clickedElement.textContent);
    if (myvalue % 2 === 1) {
      clickedElement.style.color = "red";
      wrong = wrong + 1;
    } else if (myvalue % 2 === 0) {
      clickedElement.style.color = "green";
      right = right + 1;
    }
  }
}
