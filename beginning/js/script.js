
   
// CREATE AN ARRAY OF EMPLOYEES  처음에 어레이 만들고 파퓰레잇 시킬 준비를 한다. 

let arrEmployees =[
    [12345678, "Julie Shin", 1234, "abc@hotmail.com", "administration" ],
    [13579246, "ellie Wedge", 5678, "ellie @hotmail.com", "executive" ],
    [80135792, "isabel O", 9101, "isabel@hotmail.com", "sales" ],
    [46801357, "Ted M",1121, "aTedc@hotmail.com", "quality Assurance" ],
    [92468013, "Kathy Lee ", 3121, "Kathy@hotmail.com", "administration" ]
]



// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(localStorage.getItem('employees') !== null) {
    arrEmployees = JSON.parse(localStorage.getItem('employees'))

}
// GET DOM ELEMENTS

let form      = document.getElementById('addForm');
let empTable  = document.getElementById('employees');
let empCount  = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
 buildGrid(arrEmployees)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
   e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES (스트링과 숫자 구별해서..)
   let empID = parseInt(document.querySelector('#id').value)
   let empName = document.querySelector('#name').value
   let empExt = parseInt(document.querySelector('#extension').value)
   let empEmail = document.querySelector('#email').value
   let empDept = document.querySelector('#department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
   let arrNewEmployee = [empID, empName, empExt, empEmail, empDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    arrEmployees.push(arrNewEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
      form.reset()
    // document.getElementById('addForm').reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
    // document.getElementById('id').focus()
    

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) { 
     // CONFIRM THE DELETE
       if (confirm('Are you sure you want to delete this employee?')) {
             // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
             //className represent one class, and classList contain array. 정말 중요한 차이야...

             // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TsABLE...우리는 지금 이것이 필요하지 않아.. 

              // REMOVE EMPLOYEE FROM ARRAY.. arrEmployees scoped globally...so we don't have to pass in our employees into buildgrid function.
            arrEmployees.splice(rowIndex -1, 1)
             // BUILD THE GRID
             buildGrid(arrEmployees)
       }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
      empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
      let tbody = document.createElement('tbody')
          //이렇게 안하면 테이블 바디가 중복된다..
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for(let employee of arrEmployees) {
        tbody.innerHTML += 
        `
        <tr>
              <td>${employee[0]} </td>
              <td>${employee[1]} </td>
              <td>${employee[2]} </td>
              <td>${employee[3]} </td>
              <td>${employee[4] }</td>
              <td><button class = "btn btn-sm btn-danger delete">x</button></td>
        </tr>

        `
    }  

    // BIND THE TBODY TO THE EMPLOYEE TABLE
     empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
     empCount.value = `${arrEmployees.length}`
    // STORE THE ARRAY IN STORAGE..이 부분이 바로 로컬 스토리지 파트야...
    localStorage.setItem('employees', JSON.stringify(arrEmployees))
    //this is setItem.....(we will carry getItem)
    //finally use local storage.....(developer > application )

};