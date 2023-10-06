// fetch('https://icanhazdadjoke.com/slack')
//     .then(data =>data.json())
//     .then(jokeData => {
//         const jokeText = jokeData.attachments[0].text;
//         const jokeElement = document.getElementById('jokeElement');
//         jokeElement.innerHTML = jokeText;
//     })

function myFun() {

    fetch('https://icanhazdadjoke.com/slack')
    .then(data =>data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        myFun();
    });
});

// Date 
        let dateObj = new Date();
 
        let month = String(dateObj.getMonth() + 1)
            .padStart(2, '0');
            
        let day = String(dateObj.getDate())
            .padStart(2, '0');
        
        let year = dateObj.getFullYear();
        let output = day + '/' + month + '/' + year;
        
        console.log(output);

        
        document.getElementById('todayDate').innerHTML=output;