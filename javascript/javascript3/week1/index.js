//Find a cool api and explain about the API:
fetch(`https://holidayapi.com/v1/holidays?key=36ee1956-d71b-43ad-880a-0713e70e18a1&country=DK&year=2020`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
})