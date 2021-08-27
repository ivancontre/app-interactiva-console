const { showMenu, pause } = require('./helpers/messages');

require('colors');

const main = async () => {
    console.clear();

    let opt = '';

    do {

        opt = await showMenu();
        if (opt !== '0') await pause();
    
    } while (opt !== '0');

    //pause();
};

main();