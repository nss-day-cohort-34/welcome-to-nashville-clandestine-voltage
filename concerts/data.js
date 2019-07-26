const getConcertData = (genre) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&dmaId=343&apikey=LOQ6VADXjP0MGMHkf1TfHAdv3THVhnCo`)
        .then(response => response.json())
}
    


