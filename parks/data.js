const getParkData = (feature) => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json${feature}`)
    .then(data => data.json())
}



