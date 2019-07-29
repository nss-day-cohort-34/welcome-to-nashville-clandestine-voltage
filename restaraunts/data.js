const getRestaurantData = (cuisine) => {
    return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&cuisine_name=Chinese", {
            headers: {
                "Accept": "application/json",
                "user-key": "eb5e2b9635690e7eeb074186999b6d4a"
            }
        })
        .then(r => r.json())
      
    }