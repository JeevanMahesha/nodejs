const weatherform = document.querySelector('form')
const searchvalue = document.querySelector('input')
weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/weather?address=' + searchvalue.value)
        .then((res) => res.json())
        .then((data) => {
            if (data.Error) {
                console.log(data);
            } else {
                console.log(data);
            }
        })

})