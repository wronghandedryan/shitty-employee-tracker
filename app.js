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
                    shitty_employeeView();
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

function shitty_employeeView() {
    let sqlStr = 'SELECT first_name, last_name, title, salary FROM shitty_employee';
    sqlStr += 'LEFT JOIN role ';
    sqlStr += 'ON shitty_employee = made_up_role.id';
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

const updateShittyEmployee = () => {

    function runUpdateShittyEmployee() {
        // eslint-disable-next-line no-unused-expressions
        inquirer
            .prompt({
                name: 'action',
                type: 'list',
                message: 'Which shitty employee do you want to update?',
                choices: shittyemployeeOptions
            }),
            // eslint-disable-next-line no-undef
            then.updateOptions(answer => action({
                name: 'action',
                type: 'input',
                default: 'new info',
            }, console.info(result)
            )};
        }
runUpdateShittyEmployee()