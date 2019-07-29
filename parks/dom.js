let listEl = document.querySelector(".parkResults")
let parkItineraryReference = document.querySelector("#parkItinerary")

const renderPark = (htmlstring) => {
    listEl.innerHTML += htmlstring
}

const renderParkItinerary = (htmlString) => {
    parkItineraryReference.innerHTML = htmlString
} 