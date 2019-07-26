const createResultsConcert = (concert) => {
    return `
        <section class="results__section">
            <h2 class="results--name">${concert.name}</h2>
            <h3 class="results--date">${concert.dates.start.localDate}</h3>
            <p class="results--time">${concert.dates.start.localTime}</p>
            <button class="concertSaveButton">Save to Itinerary</button>
        </section>
`
}

const createItineraryConcert = (name, date, time) => {
    return `
        <section>
            <h2>${name}</h2>
            <h3>${date}</h3>
            <p>${time}</p>
        </section>
    `
}