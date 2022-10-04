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
                console.log('================================================');
             promptMenu()
             break;
             case 'No':
                console.log('Goodbye!');
            }
        })   
};
initPrompt();

function promptMenu() {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'promptMenu',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role'],
        }
    ]).then(data => {
        console.log('==============================');
       switch(data.promptMenu) {
           case 'View Departments':
            seeDepartments();
            break;
            case 'View Roles':
                seeRoles();
                break; 
                case 'View Employees':
                    seeEmployees();
                break;
                case 'Add Department':
                    addDept();
                    break;
                    case 'Add Role':
                        createRole();
                        break;
                        case 'Add Employee':
                            createEmployee();
                            break;
                            case 'Update Employee Role':
                                editRole();
                                break;
                            }
   
        
    });    
};





function seeDepartments() { db.query({sql:'SELECT * FROM departments'}, (errors, results, fields) => {
    if(errors) {console.log(errors.message)};
    console.table(results);
    promptMenu();
});

};
function seeRoles(){
db.query({sql: "SELECT * FROM ROLES"}, (errors, results) => {
    if (errors) { throw errors; }
    console.table(results)
    promptMenu();
});
};
function seeEmployees(){
db.query({sql:'SELECT * FROM EMPLOYEES'}, (errors, results) => {
    if (errors) {throw errors;}
    console.table(results)
    promptMenu();
});
};
function addDept() {
    
    return inquirer.prompt(
        {
            type: 'input',
            name: 'departmentName',
            message: 'Input the name of the department to be added'
        }
    ).then(data => {
   const newDept = data.departmentName
   const sql = `INSERT INTO Departments (name) VALUES (?)`;
        db.query(sql, newDept, (errors, results) => {
            if (errors) {console.log(errors.message)} 
                console.table(results)
                console.log('====================');
                console.log('New department has been created')
            });
            promptMenu()
    });
};
function createRole() {

    return inquirer.prompt([
                {
                    type: 'input',
                    title: 'New Role',
                    message: 'Add new role title'
                
                },
                { type: 'number',
                title: 'salary',
                message: 'Input desired salary for new role'
            
                },
                {type:'number',
                name: 'department_id',
                message: 'Input department id for new role'
                }
            
    ]).then(data => {
        
        db.query({sql: `INSERT INTO roles (title, salary, department_id)
        VALUES
        ('${data.title}', ${data.salary}, ${data.department_id});`}, (errors, results) => {
            if(errors){
                console.log(errors.message);
                return;
            };
        
        console.table(results);
        console.log('==============================');
        console.log('Role added successfully');
     });
     
     console.log('==============================');
     promptMenu();
    }).catch((err) => {
        if(err) {
            console.log(err.message);
        }
     });

};
function createEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Input the first name of the Employee to be created'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Input the last name of the Employee to be created'
        },
        {
            type: 'number',
            name: 'roles_id',
            message: 'Input the role ID of the Employee to be created'
        },
        {
            type: 'number',
            name: 'manager_id',
            message: 'Input the manager ID of the Employee to be added'
        },
    ])
    .then(data => {
        db.query({sql: `INSERT INTO employees (first_name, last_name, roles_id, manager_id)
        VALUES
            ('${data.first_name}', '${data.last_name}', ${data.roles_id}, ${data.manager_id});`}, (errors, results) => {
                if(errors) {
                    console.log(errors.message);
                    return;
                }

                console.table(results);
                console.log('==============================');
                console.log('Employee added');
             });
             
             console.log('==============================');
             promptMenu();
            }).catch((err) => {
                if(err) {
                    console.log(err.message);
                }
             });
};
   
function editRole() {
    
    return inquirer.prompt([
        {
            type: 'number',
            name: 'employeeId',
            message: 'What is the ID of the employee whose role you would like to change?'
        },
        {
            type: 'input',
            name: 'newRole',
            message: 'Please input the new Role ID to change the Employee role'
        },
        {
            type: 'number',
            name: 'manager_id',
            message: 'Input the manager ID of the Employee to be updated'
        },
    ]).then(data => {
            db.query({sql:`UPDATE employees
            SET roles_id = ${data.newRole}, manager_id = ${data.manager_id}
            WHERE id = ${data.employeeId}`}, (err, results) => {
                if(err) {
                    console.log(err.message)
                    return;
                }
                console.log('==============================');
                console.table(results);
                console.log('Role added');
                promptMenu();
            })
            
        })
};