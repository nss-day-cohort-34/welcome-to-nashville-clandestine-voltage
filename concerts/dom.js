let concertItineraryReference = document.getElementById("concertItinerary")
const concertReference = document.querySelector(".concertResults")

const renderConcert = (htmlString) => {
    concertReference.innerHTML += htmlString
}

const renderConcertItinerary = (htmlString) => {
    concertItineraryReference.innerHTML = htmlString
}