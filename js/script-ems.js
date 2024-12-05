// CREATE AN ARRAY OF EMPLOYEES
let employees = [
  [10010010, "Mateo", 1001, "mateo@empl", "Marketing"],
  [20020020, "Ava", 2002, "ava@empl", "Administrative"],
  [30030030, "Lucas", 3003, "lucas@empl", "Engineering"],
  [40040040, "Zoey", 4004, "zoey@empl", "QA"],
  [50050050, "Leo", 5005, "leo@empl", "Sales"],
  [60060060, "Ivy", 6006, "ivy@empl", "Executive"],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let existingList = JSON.parse(localStorage.getItem("existingEmpl"));
if (existingList == null) {
  localStorage.setItem("existingEmpl", JSON.stringify(employees));
  existingList = [...employees];
}

// GET DOM ELEMENTS
let fmEmpl = document.getElementById("addForm");
let tblEmpl = document.getElementById("empTable");
let tbodyEl = document.getElementsByTagName("tbody")[0];
let counter = document.getElementById("empCount");

console.log(existingList);

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = () => {
  buildGrid();
};
// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  const obj = (id) => document.getElementById(id);
  let valEmplId = obj("id").value;
  let valEmplName = obj("name").value;
  let valEmplExt = obj("extension").value;
  let valEmplEmail = obj("email").value;
  let valEmplDep = obj("department").value;
  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  let newEmpl = [valEmplId, valEmplName, valEmplExt, valEmplEmail, valEmplDep];
  existingList.push(newEmpl);
  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  existingList.push(newEmpl);
  // BUILD THE GRID
  buildGrid();
  // RESET THE FORM
  fmEmpl.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  obj("id").focus();
});

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  // CONFIRM THE DELETE
  if (e.target.className === "btn btn-sm bg-danger delete") {
    if (confirm("Are you sure you want to delete this employee?")) {
      const btn = e.target;
      const rowToRemove = btn.parentElement.parentElement;
      const emplId = rowToRemove.cells[0].textContent;
      const indexToRemove = existingList.findIndex(
        (empl) => empl[0] === emplId
      );
      if (indexToRemove !== -1) {
        existingList.splice(indexToRemove, 1);
      }
    }
  }
  // BUILD THE GRID
  buildGrid();
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  tbodyEl.innerHTML = "";
  // REBUILD THE TBODY FROM SCRATCH
  let dataHTML = "";
  for (let empl of existingList) {
    dataHTML += `
        <tr>
            <td>${empl[0]}</td>
            <td>${empl[1]}</td>
            <td>${empl[2]}</td>
            <td>${empl[3]}</td>
            <td>${empl[4]}</td>
            <td><button class='btn btn-sm bg-danger delete'>X</button></td>
        </tr>
    `;
  }

  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE

  // BIND THE TBODY TO THE EMPLOYEE TABLE
  tbodyEl.innerHTML += dataHTML;
  // UPDATE EMPLOYEE COUNT
  let count = 0;
  for (i of existingList) {
    count += 1;
  }
  counter.value = count;
  // STORE THE ARRAY IN STORAGE
  localStorage.setItem("existingEmpl", JSON.stringify(existingList));
}
