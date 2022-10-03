const inquirer = require('inquirer');
const db = require('./db/connection');
const conTable = require('console.table');

console.log ('================================');
console.log ('Welcome to the Employee Tracker!');
console.log ('================================');


function initPrompt() {
    return inquirer.prompt([
    {   type: 'list',
        name: 'initPrompt',
        message: 'Would you like to initialize your application',
        choices: ['Yes', 'No']
    }
    ]).then(data => {
        switch(data.initPrompt) {
            case 'Yes':
             console.log('This way!');
             seeDepartments();
             break;
             
             case 'No':
                console.log('Goodbye!');
            }
        })    
};
initPrompt();


   
function seeDepartments() { db.query({sql:'SELECT * FROM DEPARTMENTS'}, (errors, results, fields) => {
    if(errors) {
        console.log(errors.message);
    }
    console.table(results);
    // console.log(fields)

});

};




