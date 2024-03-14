export const uniqueArrayMaker = (arr) => {
    const newArr = [];
    arr.forEach(item => {
        if(!newArr.includes(item)){
            newArr.push(item);
        }
    })

    return newArr;

// return new Set([...arr])
}