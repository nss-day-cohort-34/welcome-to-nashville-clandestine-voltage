const getRestaurantData = (name) => {
    return fetch(`https://opentable.herokuapp.com/api/restaurants?city=Nashville&name=${name}`)
        .then(r => r.json())
     
    }

console.log(getRestaurantData())