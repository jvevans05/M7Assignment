// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const domID = (id) => document.getElementById(id)

let form =      domID('addForm')
let eid =       domID('id')
let fullName =  domID('name')
let ext =       domID('extension')
let email =     domID('email')
let dept =      domID('department')

//WE NEED THE GET THE TBODY IN ORDER TO KEEP THE FORMATTING WHEN WE APPEND THE NEW ROWS LATER.
//console.log(form.nodeType)
// let employees = domID('employees')
// let tbody = employees.children[0]
let tbody = domID('employees').children[0]
console.log(tbody)

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empNum = domID('empCount')
empNum.value = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    //MADE THE VALUES AN ARRAY SO I COULD LOOP THROUGH THEM LATER
    let newValues = [eid.value, fullName.value, ext.value, email.value, dept.value]
    // let newEid =        eid.value
    // let newFullName =   fullName.value
    // let newExt =        ext.value
    // let newEmail =      email.value
    // let newDept =       dept.value
    // console.log(newEid)
    //console.log(newValues)

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let tr = document.createElement('tr')    

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    for (let i = 0; i < newValues.length; i++) {

        //CREATE A TH. CREATE A TEXT NODE. MAKE TEXT NODE CHILD OF TH. MAKE TH CHILD OF TR.
        let th = document.createElement('th')
        let textNode = document.createTextNode(newValues[i])
        th.appendChild(textNode)
        tr.appendChild(th)
    }
    //AFTER THE ROW IS CONSTRUCTED MAKE TR CHILD OF TBODY.
    tbody.appendChild(tr)


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON
    let deleteEmp = document.createElement('button')
    deleteEmp.className = 'btn btn-danger btn-sm float-end delete'
    deleteEmp.style.color = 'red'
    deleteEmp.appendChild(document.createTextNode('X'))
    tr.appendChild(deleteEmp)

    // RESET THE FORM
    //form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    eid.focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empNum.value++

})

// DELETE EMPLOYEE

tbody.addEventListener('click', (e) => {
    //WILL APPLY IF CLICKED ELEMENT CONTAINS DELETE CLASS
    if (e.target.classList.contains('delete')) {
        //CONFIRMATION BEFORE DELETION
        if (confirm('Permanently remove this employee from records?')) {
  
        tbody.removeChild(e.target.parentElement)

        empNum.value--
        } else {

        }
    }
  

})