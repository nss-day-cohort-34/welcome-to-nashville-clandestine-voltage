let concertReference = document.querySelector(".results")
let concertItineraryReference = document.getElementById("concertItinerary")

const renderConcert = (htmlString) => {
    concertReference.innerHTML += htmlString
}

const renderConcertItinerary = (htmlString) => {
    concertItineraryReference.innerHTML += htmlString
}