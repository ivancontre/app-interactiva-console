const Task = require("./Task");
require('colors');

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    };

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    };

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    loadTaskFromArray(tasks = []) {

        for (let i = 0; i < tasks.length; i++) {
            this._list[tasks[i].id] = tasks[i];
        }

    };

    completedList() {
        console.log('');
        this.list.forEach((task, index) => {
            console.log(`${((index + 1) + '.').green} ${task.description} :: ${task.completeOn ? 'Completada'.green : 'Pendiente'.red }`);
        });
    };

    listCompletedPending(completed = true) {
        console.log('');
        let index = 1;
        this.list.forEach(task => {

            if (completed) {

                if (task.completeOn) {
                    console.log(`${((index + 1) + '.').green} ${task.description} :: ${task.completeOn.green}`);
                }
                
            } else {

                if (!task.completeOn) {
                    console.log(`${((index + 1) + '.').green} ${task.description} :: ${'Pendiente'.red}`);
                }
            }

            index++;
            
        });
    };

    get list() {
        const output = [];

        Object.keys(this._list).forEach(key => {
            output.push(this._list[key])
        });

        return output;
    };
    
};

module.exports = Tasks;