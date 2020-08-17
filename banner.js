const figlet = require('figlet');
const Image = require('ascii-art-image');
const chalkPipe = require('chalk-pipe');
const image = new Image({
    filepath: './images/dumpster-fire.svg',
    alphabet:'variant4'
});


const red = chalkPipe('red.bold');
const text = chalkPipe('outline.red.bold');
// console.log(figlet.textSync('Employee-Dumpster-Fire
    // font: 'Standard',
    // horizontalLayout: 'full',
    // verticalLayout: 'full'
// })),

console.log(chalkPipe(red.bold(figlet.text('Employee-Dumpster-Fire', {
    font: 'Fire Font-k',
    horizontalLayout: 'universal smushing',
    verticalLayout: 'universal smushing',
    width: 120,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);




image.write(function(err, rendered){
    console.log(rendered);
});
}))));


