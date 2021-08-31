const { inquirerMenu, pause, readInput, deleteTaskMenu, confirm, showChecklist } = require('./helpers/inquirer');
const { saveFile, readFile } = require('./helpers/controllerDB');
const Task = require('./models/Task');
const Tasks = require('./models/Tasks');


require('colors');

const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    const tasksInDB = readFile();
    if (tasksInDB) {
        tasks.loadTaskFromArray(tasksInDB);
    }

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':

                const description = await readInput('Descripción: ');
                tasks.createTask(description);
                break;

            case '2':
                tasks.completedList();
                break;

            case '3':
                tasks.listCompletedPending();
                break;

            case '4':
                tasks.listCompletedPending(false);
                break;

            case '5':
                const ids = await showChecklist(tasks.list);
                tasks.toggleCompleted(ids);
                break;

            case '6':
                const id = await deleteTaskMenu(tasks.list);
                console.log({id});

                if (id !== '0') {

                    const ok = await confirm('¿Seguro que desea eliminar esta tarea?');

                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Tarea borrada correctamente');
                    }
                }                

                break;
        };

        saveFile(tasks.list);

        console.log('\n')
        await pause();

    } while (opt !== '0');

};

main();