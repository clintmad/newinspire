(function () {
    function TodoController() {

        var todoService = new TodoService();
        todoService.newItem = todoService.getTodos();
        update();

        $('form').on('submit', function (e) {
            e.preventDefault();
            var temp = this.listItem.value;
            todoService.newItem.push(temp);
            todoService.saveTodos(todoService.newItem);
            update();
        })

        $('#list').on('click', '.delete', function () {
            todoService.removeTodos(this.id);
            update()
        })

        function update() {
            var list = todoService.getTodos()
            var listElem = $('#list');
            var taskTemplate = `<h3 class="arch">To do list: ${list.length}</h3>`
            var template = '';
            for (var i = 0; i < list.length; i++) {
                listElem.empty();
                template += `
               <li class="arch" id="${i}">${list[i]}
                <span id="${i}" class="delete glyphicon glyphicon-remove" aria-hidden="true"></span></li>`
            }
            listElem.empty().append(taskTemplate, template);
        }
    }
    TodoController();
} ())