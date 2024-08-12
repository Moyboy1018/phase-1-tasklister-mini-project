// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const task = document.querySelector('#new-task-description').value
//     const listItem = document.createElement('li')
//     listItem.textContent = task
//     document.querySelector('#tasks').appendChild(listItem)
//     console.log(listItem)
//     e.target.reset()
//   })

// });

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(document.querySelector('#new-task-description').value)
    form.reset()    
  })

});

function buildToDo(todo){
    const task = document.querySelector('#new-task-description').value
    const listItem = document.createElement('li')
    const btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'X'
    listItem.textContent = `${todo}`
    listItem.appendChild(btn)
    document.querySelector('#tasks').appendChild(listItem)
    console.log(listItem)
}

function handleDelete(listItem){
    listItem.target.parentNode.remove()
}