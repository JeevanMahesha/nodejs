/* 
yargs package is used for give command in command line

*/
const yargs = require('yargs')

// customize the yargs version
yargs.version('9.0.0')

//Create Command
yargs.command({
    command : 'add',
    describe : 'Adding a note',
    handler : function(){
        console.log('Adding the new notes..........!');
        
    }
})

// Remove command
yargs.command({
    command : 'remove',
    describe : 'Removing the notes',
    handler : function(){
        console.log('Removing the note...........!');
        
    }
})

// read command
yargs.command({
    command : 'read',
    describe : 'Reading the notes',
    handler : function(){
        console.log('Reading the notes..........!');
        
    }
})

//list command
yargs.command({
    command : 'list',
    describe :'List the notes',
    handler : function(){
        console.log('Listing the notes..........!');
        
    }
})

console.log(yargs.argv);