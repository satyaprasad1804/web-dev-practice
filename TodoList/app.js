const taskInput = document.getElementById('ip');
const main = document.getElementById('main');


let tasks=[];
function addTask(){
    tasks.push({
        task:taskInput.value
    });
    displayTask();
    console.log(tasks);
}

function displayTask(){
    main.innerHTML = "";
    tasks.forEach((i)=>{
       const div = document.createElement('div');
       div.classList.add('task');
       
       const taskName = document.createElement('p');
        taskName.textContent = i.task;
        const button = document.createElement('button');
        button.textContent='Remove';

        button.onclick= function(){
            tasks.splice(i.task,1);
            displayTask();
        }
        div.append(taskName, button);
        main.appendChild(div);

       
    })
}