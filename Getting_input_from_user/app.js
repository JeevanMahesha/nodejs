const command = process.argv[2]
 if (command === 'add'){
    console.log('Adding Notes.......');
 } else if( command === 'remove'){
     console.log('Removing Notes.......');
 }else{
     console.log('Wrong Input');
 }
