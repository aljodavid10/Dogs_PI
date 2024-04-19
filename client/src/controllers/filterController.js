export default function filterController(dogs, filters){
    console.log(filters)
    let newDogs;
    if(filters.location !== "All"){
        newDogs = dogs.filter(dog => dog.location.toLowerCase() === filters.location.toLowerCase())
    }
    
    if(filters.temperaments !== "All"){
        newDogs = dogs.filter(
            (dog) => {
                return dog.temperament.some(
                    temperament => temperament.toLowerCase() === filters.temperaments.toLowerCase()
                )}
        )
    }

    console.log(newDogs)
    return newDogs;
}