let heldNumber;
let lastClicked;
let modified;
let data = [{"date": "2021/03/02", "duration": "2:51"},
           {"date": "2021/03/02", "duration": "3:51"},
           {"date": "2051/03/02", "duration": "42:51"},
           {"date": "2011/03/02", "duration": "52:51"},
           {"date": "2022/03/02", "duration": "62:51"},
           {"date": "2041/03/02", "duration": "72:51"}];
function populateScores(table) {
  for (item of data) {
    let row = table.insertRow();
    for (key in item) {
      let cell = row.insertCell();
      let value = document.createTextNode(item[key]);
      cell.appendChild(value);
    }
  }
}
    $(document).ready(function() {

let table = document.getElementById("scores");
console.log(table);
populateScores(table);
    });

