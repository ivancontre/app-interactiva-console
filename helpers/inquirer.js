const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () => {

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción'.white)
    console.log('===========================\n'.green);

    const questions = [
        {
            type: 'list',
            name: 'option',
            message: '¿Qué desea hacer?',
            choices: [ 
                {
                    value: '1',
                    name: `${'1.'.green} Crear tarea`
                },
                {
                    value: '2',
                    name: `${'2.'.green} Listar tareas`
                },
                {
                    value: '3',
                    name: `${'3.'.green} Listar tareas completadas`
                },
                {
                    value: '4',
                    name: `${'4.'.green} Listar tareas pendientes`
                },
                {
                    value: '5',
                    name: `${'5.'.green} Completar tareas`
                },
                {
                    value: '6',
                    name: `${'6.'.green} Borrar tarea`
                },
                {
                    value: '0',
                    name: `${'0.'.green} Salir`
                }
            ]
        }
    ];
    
    const { option } = await inquirer.prompt(questions);
    return option;
};

const pause = async () => {
    const questions = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ];

    const { option } = await inquirer.prompt(questions);
    return option;
};

const readInput = async (message) => {
    const questions = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {

                if (value.trim().length === 0) {
                    return 'Por favor ingrese una descripción'
                }

                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(questions);
    return description;
};

const deleteTaskMenu = async (tasks = []) => {

    const choices = tasks.map((task, index) => {
        return {
            value: task.id,
            name: `${((index + 1) + '.').green} ${task.description}`
        }
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);

    return id;

};

const confirm = async (message) => {

    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(questions);

    return ok;

};

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    deleteTaskMenu,
    confirm
};