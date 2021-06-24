const inputName = document.querySelector('.input-name');
const searchButton = document.querySelector('button');
const inputNumber = document.querySelector('.input-number');
const divImage= document.querySelector('.gifimages');

function getGiphy() {
    if(!inputName.value || !inputNumber.value) {
        alert('Please provide a name and number');
    } else {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${inputName.value}&api_key=QaExfAtcPCQ17ibhM7z6zioaEl7HYsOI&limit=${inputNumber.value}`)
        .then((res) => res.json())
        .then((gifdata) => {
            console.log(gifdata.data);
            gifdata.data.map((element) => {
                const img = document.createElement('img');
                img.src = `${element.images.fixed_height.url}`;  
                divImage.appendChild(img);
            })
            
        })
    }
}

searchButton.addEventListener('click', getGiphy);