    
const listEl = document.querySelector("#restaurantResults")
const  restaurantItineraryReference = document.querySelector("#restaurantItinerary")

const renderRestaurant = (htmlString) => {
    listEl.innerHTML += htmlString
}
const renderRestaurantItinerary = (htmlString) => {
    restaurantItineraryReference.innerHTML = htmlString
 }