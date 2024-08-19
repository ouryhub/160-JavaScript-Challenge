

function calculateTip(price, rating){
    const ratings = {
        'terrible' : 0,
        'poor': 5,
        'good': 10,
        'great': 15,
        'excellent': 20
    }
    let reduction = 0 ;
    for (const iterator in ratings) {
        if( rating.toUpperCase() == iterator.toLocaleUpperCase()){
            reduction = Math.round(((ratings[`${rating.toLowerCase()}`] * 0.01) * price))
            break;
        }else{
            reduction = 'Rating not recognised'
        }
        
    }

    return reduction
}

calculateTip(26.95, "now") 
calculateTip(20, "ExcellEnt")
calculateTip(26.7655, "goOd") 

