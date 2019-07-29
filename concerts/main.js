const concertSearchButton = document.querySelector("#searchButton")
const concertSelect = document.querySelector("#select")
const concertSaveButton = document.querySelectorAll(".concertSaveButton")
const concertResultsInDOM = document.querySelector("#results")
const clearButton = document.querySelector("#clearButton")



concertSearchButton.addEventListener("click", () => {
    getConcertData(concertSelect.value)
        .then(concerts => {
            for (let concert of concerts._embedded.events) {
                let concertHTML = createResultsConcert(concert)
                renderConcert(concertHTML)
            }
    
    })
})


concertResultsInDOM.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const concertTime = button.previousElementSibling
        const concertDate = concertTime.previousElementSibling
        const concertName = concertDate.previousElementSibling
        const concertItineraryName = concertName.innerText
        const concertItineraryDate = concertDate.innerText
        const concertItineraryTime = concertTime.innerText
        const concertItineraryHTML = createItineraryConcert(concertItineraryName, concertItineraryDate, concertItineraryTime)
        renderConcertItinerary(concertItineraryHTML)
    }
})
