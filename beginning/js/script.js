// CREATE AN ARRAY OF EMPLOYEES
// let employee = [12345678, "Julie Shin", 1357, "abc@hotmail.com", "administration" ];

let employeesDefault = [];
 employeesDefault.length = 5;

//refer ppppp

// let  empForm = JSON.parse(localStorage.getItem('employees')) || [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
 if (!(localStorage.getItem("infiniteScrollEnabled") == true || localStorage.getItem("infiniteScrollEnabled") == false)) {
    // init variable/set default variable for item
    localStorage.setItem("infiniteScrollEnabled", true);
}

// if (!localStorage.employees) {
//     localStorage.employees = JSON.stringify(employeesDefault);
// }

// var employees = JSON.parse(localStorage.employees);


// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

// // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
   let empForm=  document.getElementById('addForm')
//    let formElement =  document.getElementById('addForm');
   let tbodyElement = document.querySelector('tbody');
   let empTable = document.querySelector('#employees');
   
// ADD EMPLOYEE
       function onAddemployees(e) {
     
         
//     // PREVENT FORM SUBMISSION
       e.preventDefault();
// GET THE VALUES FROM THE TEXT BOXES
       let id =   document.getElementById('id').value;
       let name = document.getElementById('name').value;
       let extension = document.getElementById('extension').value;
       let email =  document.getElementById('email').value;
       let department =  document.getElementById('department').value;

 // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
      function addEmployee(employee) {
        employees.push(employee);
        localStorage.employees = JSON.stringify(employees);
  }
 // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

       let empForm=  document.getElementById('addForm').value;

       tbodyElement.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${extension}</td>
                <td>${email}</td>
                <td>${department}</td>
                <td><button class = "deleteBtn">Delete</td>
            </tr>
      `;
 
 };
// DELETE EMPLOYEE
   function onDeleteRow(e) {
       if(!e.target.classList.contains('deleteBtn')){
           return;
       }
     else if (confirm('Are you sure you want to delete this employee?')) {
       const btn = e.target;
       btn.closest('tr').remove();
       }
   }
   empForm.addEventListener('submit', onAddemployees);
   empTable.addEventListener('click', onDeleteRow);





//     // BUILD THE GRID

//     // RESET THE FORM

// SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()



// empTable.addEventListener('click', (e) => {
//     // CONFIRM THE DELETE

//         // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

//         // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

//         // REMOVE EMPLOYEE FROM ARRAY

//         // BUILD THE GRID

// });

// // BUILD THE EMPLOYEES GRID
// function buildGrid() {
//     // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

//     // Adding the entire table to the body tag
//         document.getElementById('body').appendChild(table);
//     // LOOP THROUGH THE ARRAY OF EMPLOYEES
//     // REBUILDING THE ROW STRUCTURE


//     // BIND THE TBODY TO THE EMPLOYEE TABLE

//     // UPDATE EMPLOYEE COUNT

//     // STORE THE ARRAY IN STORAGE

// };