const getAPIData = (genre) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${genre}&dmaId=343&apikey=LOQ6VADXjP0MGMHkf1TfHAdv3THVhnCo`)
    .then(response => response.json())
    .then((concerts) => {
       document.write(concerts._embedded.events[0].name)
    })
}

getAPIData("rap")