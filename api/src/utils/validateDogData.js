const validateDogData = (data) => {
    const { name, image, height, weight, life_span, temperaments, origin } = data;

    if( ![ name, image, height, weight, life_span, temperaments, origin ].every(Boolean)) 
        throw new Error("Faltan datos");

    if( name.length > 40 || height.length > 20 || weight.length > 20 || life_span.length > 20 ){
        throw new Error("String length exceeds maximum allowed limit.");
    }

    return { name, image, height, weight, life_span, temperaments, origin };
}

module.exports = validateDogData;