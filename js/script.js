// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const domID = (id) => document.getElementById(id)

let form =      domID('addForm')
let eid =       domID('id')
let fullName =  domID('name')
let ext =       domID('extension')
let email =     domID('email')
let dept =      domID('department')

// THE TABLE ITSELF
let employees = domID('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = domID('empCount')
empCount.value = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let newValues = [eid.value, fullName.value, ext.value, email.value, dept.value]

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    // ADDED 1 SINCE IT WAS LOWERING THE TABLE HEADER. ADDED PARSEINT SINCE IT WAS CONCATENATING
    let tr = employees.insertRow(parseInt(empCount.value) + 1)

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // I HAD THIS AS A FOR LOOP ORIGINALLY, BUT THIS WORKS
    let cell1 = tr.insertCell(0)
    let cell2 = tr.insertCell(1)
    let cell3 = tr.insertCell(2)
    let cell4 = tr.insertCell(3)
    let cell5 = tr.insertCell(4)
    let cellDel = tr.insertCell(5)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell1.appendChild(document.createTextNode(newValues[0]))
    cell2.appendChild(document.createTextNode(newValues[1]))
    cell3.appendChild(document.createTextNode(newValues[2]))
    cell4.appendChild(document.createTextNode(newValues[3]))
    cell5.appendChild(document.createTextNode(newValues[4]))

    // CREATE THE DELETE BUTTON
    let deleteEmp = document.createElement('button')
    deleteEmp.className = 'btn btn-danger btn-sm float-end'
    deleteEmp.appendChild(document.createTextNode('X'))
    cellDel.appendChild(deleteEmp)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    eid.focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount.value++

})

// DELETE EMPLOYEE

employees.addEventListener('cck', (e) => {

    // CONFIRM DELETE ACTION
    if (confirm('Do you want to permanently delete this employee from records?')) {

        // DELETE A ROW FROM THE EMPLOYEE TABLE TARGETING THE TRIGGERING ELEMENT BUTTON, CHOOSING IT'S PARENTS CELL AND TR, AND REFERENCING IT'S INDEX
        employees.deleteRow(e.target.parentNode.parentNode.rowIndex)
        empCount.value--
        } else {
        alert('Delete action was NOT performed.')
    }
})