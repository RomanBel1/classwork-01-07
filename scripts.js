let toDo = function Todo(){
    let todoArr = []
    this.create = function(){
        let htmlTodo = `<div>
                            <input type="text" id="todo__input">
                        </div>
                        <div class="todos_list">
                            <ul id="lists">
                            </ul>
                         </div>`
    
        let element = document.querySelector('.todo__list')
        element.innerHTML = htmlTodo
        
        let input = document.querySelector('#todo__input')
        input.addEventListener('keyup',(event)=>{
            if(event.keyCode == '13'){
                this.add(event.target.value)
                event.target.value=""
            }    
       })
        //console.log(input)
    }
 
    this.add = function(task){
        let todoTask = {
            todo: task,
            flag: true
        }
        todoArr.push(todoTask)
        console.log(todoArr)
        this.show();
    }

    this.show = function(){
        let elementUl = document.querySelector('#lists')
        todoArr.forEach((item, index)=>{
            let li = document.createElement('li')
            li.classList.add('todo__li')
            li.innerHTML = `${item.todo}<br> <button id="${index}">delete</button>`

            elementUl.appendChild(li)
        })
    }
    
}
window.addEventListener('load', ()=>{
    let todo = new toDo()
    todo.create();
})