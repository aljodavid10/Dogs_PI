export default function(data){
    const options = data.map(date => {
            return {
                value: date.name,
                label: date.name
            }
    })

    return options
}