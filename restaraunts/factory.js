
const createResultHTML = (restaurants) => {
    return `
        <section>
            <h2>${restaurants.name}</h2>
            <p>${restaurants.cuisines}</p>
           
        </section>
    `
}