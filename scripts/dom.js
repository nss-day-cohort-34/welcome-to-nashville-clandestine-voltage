 
 // Declare variables that store references to locations in the DOM

const restaurantItineraryReference = document.querySelector("#restaurantItinerary")
const concertItineraryReference = document.getElementById("concertItinerary")
const parkItineraryReference = document.querySelector("#parkItinerary")

const concertResultsInDOM = document.getElementById("concertResults")
const parkResultsDOM = document.querySelector("#parkResults")
const restaurantResults = document.querySelector("#restaurantResults");


const restaurantSearch = document.querySelector("#restaurantSearch")
const parkSelect = document.querySelector('#parks_features')
const concertSelect = document.querySelector("#select")

const restaurantSearchButton = document.querySelector("#restaurantSearchButton");
const concertSearchButton = document.querySelector("#concertSearchButton")
const parkSearchButton = document.querySelector("#parkSearch")


const foodSaveButton = document.querySelector("#foodSaveButton")
const parkSaveButton = document.querySelectorAll("#parkSaveButton")
const concertSaveButton = document.querySelectorAll(".concertSaveButton")



const clearButton = document.querySelector("#clearButton")
const clearItineraryButton= document.querySelector("#clearItineraryButton")


// Functions that take an HTML string and render search results to the DOM at the specified location
const renderRestaurant = (htmlString) => {
    restaurantResults.innerHTML += htmlString
}


const renderPark = (htmlstring) => {
    parkResultsDOM.innerHTML += htmlstring
}

const renderConcert = (htmlString) => {
    concertResultsInDOM.innerHTML += htmlString
}


// Functions that take an HTML string and render Itinerary saves to the DOM
const renderConcertItinerary = (htmlString) => {
    concertItineraryReference.innerHTML = htmlString
}

const renderRestaurantItinerary = (htmlString) => {
    restaurantItineraryReference.innerHTML = htmlString
}

const renderParkItinerary = (htmlString) => {
    parkItineraryReference.innerHTML = htmlString
} 