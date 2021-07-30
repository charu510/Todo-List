let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')

//defining a seperate function for adding the item
function addItem() {
    let listItem = $('<li>', {
      'class': 'list-group-item',
      text: inpNewTask.val()
    })
    listItem.click(() => {
      listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
    
  }
function clearDone(){
    //console.log($('#ulTasks.done'))
   $('#ulTasks .done').remove()
   toggleInputButtons()
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
  }

function toggleInputButtons(){
    
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
    
}




//adding the keypress event as follows : 
inpNewTask.keypress((e) => {
    if (e.which == 13) addItem()
  })

inpNewTask.on('input', () =>{
    toggleInputButtons(inpNewTask.val() == '')
})

btnAdd.click(addItem) //calling the addItem function on clicking the add button

//calling the toggle input buttons as follows : 
inpNewTask.on('input', toggleInputButtons)

//calling the btnCleanup function
btnCleanup.click(clearDone)

//calling the sort function
btnSort.click(sortTasks)

