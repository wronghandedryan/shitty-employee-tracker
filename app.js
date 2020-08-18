const inquirer = require('inquirer');
const connection = require('./connection');

const banner = require('./banner.js');


console.log(banner);
// async function getShittyData() {
//   return Promise.resolve('shittyData');
// }
// 
// async function getMoreShittyData(shittyData) {
//   return Promise.resolve(shittyData + 'moreShittyData');
// }
// 
// function getAll() {
//   const shittyData = await getShittyData();
//   const moreShittyData = await getMoreShittyData(shittyData);
//   return `All the shittyData: shittyData, moreShittyData`;
// }
// 
// getAll().then((all) => {
//   console.log('all the shitty data')
// })
//


 const viewOptions = [
    'View Dead End Departments',
    'View Bs, Made Up Roles',
    'View Shitty Employees',
    'Update Shitty Employee',
    'Rage Quit'
];

const shittyemployeeOptions = [
    'Blake Henderson',
    'Adam Demamp',
    'Anders Holmvic',
    'Karl Hevacheck',
    'Jillian Belk',
    'Alison Murphy',
    'Montez Walker',
    'exit'
];
const madeUpRolesOptions = [
    'Aweful Salesperson',
    'Lead Douchy Salesperson',
    'High-School Drop out Accountant',
    'Attorny/Drug-Dealer',
    'Manager/Asshole'
]

const updateOptions = [
    'First Name',
    'Last Name',
    'exit'
];

runSearch();

function runSearch() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: viewOptions
        })
        .then(function (answer) {
            switch (answer.action) {
                case viewOptions[0]:
                    dead_end_departmentView();
                    break;

                case viewOptions[1]:
                    made_up_roleView();
                    break;

                case viewOptions[2]:
                    shittyemployeeView();
                    break;  
                case viewOptions[3]:
                    updateShittyEmployee();
                    break;

                case viewOptions[4]:
                    updateOptions();
                    break;

                case updateOptions[5]:
                    connection.end();
                    break;
            }
        });
}



function dead_end_departmentView() {
    let sqlStr = 'SELECT * FROM dead_end_department';
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        console.table(result);
        runSearch();
    });
}

function shittyemployeeView() {
    let sqlStr = 'SELECT first_name, last_name, title, salary FROM shitty_employee';
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        console.table(result);
        runSearch();
    });
}

function made_up_roleView() {
    let sqlStr = 'SELECT * FROM made_up_role';
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        console.table(result);
        runSearch();
    });
}

const updateShittyEmployee = (a, b) => {

    function runUpdateShittyEmployee() {
        // eslint-disable-next-line no-unused-expressions
      inquirer
            .prompt(a)({
                name: 'updateOptions1',
                type: 'rawlist',
                message: 'Which shitty employee do you want to update?',
                choices: ['Blake Henderson', 'Adam Demamp','Anders Holmvic', 'Karl Hevacheck','Jillian Belk','Alison Murphy','Montez Walker',]
            })
            .prompt(b)({
                name: 'updateOptions2',
                type: 'input',
                message: 'Which made up role do you want to assign',
                choices: ['Dead End Departments', 'Lead Douchy Salesperson', 'High-School Drop out Accountant', 'Attorney/Drug-Dealer', 'Manager/Asshole']
            })
        
            .then(answers => {
                console.info('Answer:', answers('a' + 'b'));
            });
        }
           // console.table(answers(a, b), updateShittyEmployee);

        runUpdateShittyEmployee();
    };