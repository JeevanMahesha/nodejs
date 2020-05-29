console.log('this is javascript');

fetch('http://localhost:3000/weather?address=!')
    .then((res) => res.json())
    .then((data) => {
        if (data.Error) {
            console.log(data);
        } else {
            console.log(data);
        }
    })