const listEl = document.querySelector(".results")
const parkItineraryReference = document.querySelector("#parkItinerary")

const renderPark = (htmlstring) => {
    listEl.innerHTML += htmlstring
}

const renderParkItinerary = (htmlString) => {
    parkItineraryReference.innerHTML += htmlString
}