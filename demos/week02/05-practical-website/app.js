

async function fetchData() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todos = await data.json()
    console.log(todos)
    return todos
}

async function createTodoElements() {
    const todos = await fetchData()

    todos.forEach(function(todo) {
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const userId = document.createElement('p')

        div.setAttribute('class', 'todo-container')

        div.append(h2, userId)

        h2.innerText = todo.title
        userId.innerText = todo.userId

        document.body.appendChild(div)
    })
}

createTodoElements()


const button = document.getElementById('button')

button.addEventListener('click', handleClick)


function handleClick() {
    // some interesting code
}