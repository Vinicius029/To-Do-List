const tbody = document.querySelector('tbody')

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
}

const createElement = (tag, innerText = '', innerHTML = '') => {

    const element = document.createElement(tag);

    if (innerText){
        element.innerText = innerText;
    }

    if (innerHTML){
        element.innerHTML = innerHTML;
    }
    
    return element;
}

const task = {
    id: 1,
    title: 'Aprendendo Node',
    created_at: '18/04/2023',
    status: 'Andamento'
}

const createRow = (task) => {

    const { id, title, created_at, status } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreated_at = createElement('td', created_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const editBtn = createElement('button', '', '<span class="material-symbols-outlined">edit</span>')
    const deleteBtn = createElement('button', '', '<span class="material-symbols-outlined">delete</span>')
    editBtn.classList.add('btn-action')
    deleteBtn.classList.add('btn-action')

    tdActions.appendChild(editBtn);
    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreated_at)
    tr.appendChild(tdStatus)
    tr.appendChild(tdActions)

  
    tbody.appendChild(tr);
}

createRow(task)


