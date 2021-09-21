// 5. Create a button with the text called "Log location". When this button is clicked the
// location (latitude, longitude) of the user should be logged out using this browser api

const locationButton = document.getElementById('location');
const locationCoordinates = document.getElementById('coordinates');
const currenPosition = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
        locationCoordinates.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function getCoordinates(position) {
    locationCoordinates.innerHTML = `Latitude: ${
        position.coords.latitude
    } <br> Longitude: ${
        position.coords.longitude
    }`;
    getMapCoordinates(position);
}

locationButton.addEventListener('click', currenPosition);

// 6. Optional Now show that location on a map using fx the Google maps api
 function getMapCoordinates(position) {
    const latlongvalue = `${
        position.coords.latitude
    },${
        position.coords.longitude
    }`;
    const map_url = `https://maps.google.com/maps?q=${latlongvalue}&hl=es&z=14&amp;output=embed`;
    document.getElementById("mapholder").innerHTML = `<iframe src="${map_url}"></iframe>`;
}
