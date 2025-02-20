const addTaskOnList = window.document.querySelector('#addTask');
const taskTxt = window.document.querySelector('#taskTxt');
const listOfTasks = window.document.querySelector('#listOfTasks');
const p = window.document.querySelector('#p');

let arrListOfTasks = [];

addTaskOnList.addEventListener('click', () => {
    function IdCreator() {
      return `task${arrListOfTasks.length + 1}`;
    }

    if (taskTxt.value.length != 0) {
        p.innerHTML = '';

        const itemListElement = window.document.createElement('li');
        const rmvTaskButton = window.document.createElement('button');
        const markTaskButton = window.document.createElement('button');
        const editTaskOnList = window.document.createElement('button');
        
        itemListElement.setAttribute('id', IdCreator());
        itemListElement.innerText = taskTxt.value;

    // botão para remover tarefas da lista
        rmvTaskButton.innerHTML = '❌';
        rmvTaskButton.style.borderStyle = 'none';
        rmvTaskButton.style.color = 'black';
        rmvTaskButton.style.marginLeft = '10px';

        rmvTaskButton.addEventListener('click', () => {
            listOfTasks.removeChild(itemListElement);

            arrListOfTasks.length = arrListOfTasks.length - 1;
            if (arrListOfTasks.length == 0) p.innerText = 'Insira novas tarefas!'
        })

    // botão para marcar tarefas como concluídas
        markTaskButton.innerHTML = '✅';
        markTaskButton.style.borderStyle = 'none';
        markTaskButton.style.marginLeft = '10px';
        markTaskButton.style.padding = '2px';

        markTaskButton.addEventListener('click', () => {
            itemListElement.style.color = 'green';
            itemListElement.style.textDecoration = 'line-through';

            itemListElement.removeChild(markTaskButton);
            itemListElement.removeChild(editTaskOnList);
        })

        // botão para editar conteúdo de tarefa na lista
        editTaskOnList.innerHTML = '🖊️';
        editTaskOnList.style.borderStyle = 'none';
        editTaskOnList.style.marginLeft = '10px';
        editTaskOnList.style.padding = '2px';

        editTaskOnList.addEventListener('click', () => {
            itemListElement.removeChild(markTaskButton);
            itemListElement.removeChild(rmvTaskButton);
            itemListElement.removeChild(editTaskOnList);

            const editTask = prompt('Editar tarefa:', itemListElement.innerText);

            itemListElement.innerText = editTask;
            itemListElement.appendChild(markTaskButton);
            itemListElement.appendChild(rmvTaskButton);
            itemListElement.appendChild(editTaskOnList);

        })

        arrListOfTasks.push(itemListElement); // adicionando elemento dentro do array

        itemListElement.appendChild(markTaskButton);
        itemListElement.appendChild(rmvTaskButton);
        itemListElement.appendChild(editTaskOnList);

        listOfTasks.appendChild(itemListElement);

        taskTxt.value = '';
    } else {
        alert('(ATENÇÃO) Nenhuma tarefa foi inserida no campo abaixo!');
    }
})

// o array está clonando alguns Ids, criar função para acabar com este problema.