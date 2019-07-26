const createResultsHTML = (concertObject) => {
    concerts.forEach((concert) => {
        return `
    <section>
        <h1>${concerts._embedded.events.name}</h1>
        <h2>${jobObject.role}</h2>
        <aside>${jobObject.city}</aside>
    </section>
    `
    })
}