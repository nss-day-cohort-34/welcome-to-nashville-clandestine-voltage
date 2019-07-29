//Functions to fetch data from APIs and parse to JSON

const getRestaurantData = (name) => {
    return fetch(`https://opentable.herokuapp.com/api/restaurants?city=Nashville&name=${name}`)
        .then(r => r.json())
}

const getParkData = (feature) => {
        return fetch(`https://data.nashville.gov/resource/74d7-b74t.json${feature}&$limit=10`)
        .then(data => data.json())
}
    
    
const getConcertData = (genre) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&dmaId=343&apikey=LOQ6VADXjP0MGMHkf1TfHAdv3THVhnCo`)
        .then(response => response.json())
}
    


