var todos = [{
    text: "Çöpleri At",
    done: false,
    id  : 0
}];

var currentTodo = {
    text: "",
    done: false,
    id  : 0
}

$("#todo-input").on("input", function (e) {
    currentTodo.text = e.target.value
});

function prapareTodo(todo) {
    var newTodoHtml = 
    `
    <div class="col col-12 p-2 todo-item" data-todoid="${todo.id}">
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" onchange="todoCheck(${todo.id})" ${todo.done && "checked"} />
                </div>
            </div>
            <input type="text" readonly class="form-control" value="${todo.text}" />
            <div class="input-group-append">
                <button data-todoid="${todo.id}" class="btn btn-outlint-secondary bg-danger text-white" type="button" onclick="deleteTodo(this);">X</button>
            </div>
        </div>
    </div>
    `;
    var newTodo = $.parseHTML(newTodoHtml);
    $("#todo-container").append(newTodo);
}

function renderAllTodos() {
    $("#todo-container").empty();

    for (var i = 0; i < todos.length; i++) {
        prapareTodo(todos[i]);        
    }
}

renderAllTodos();

function deleteTodo(button) {
    var deleteID = parseInt($(button).attr("data-todoid"));

    for (var i = 0; i < todos.length; i++) {
        if(todos[i].id == deleteID){
            todos.splice(i, 1);

            renderAllTodos();
            break;
        }
        
    }
}

function todoCheck(id) {
    todos[id].done = !todos[id].done;
    renderAllTodos();
}

function newTodo() {
    var newTodo = {
        text: currentTodo.text,
        done: false,
        id  : todos.length
    };
    todos.push(newTodo);
    renderAllTodos();
}