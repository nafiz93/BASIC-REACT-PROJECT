// const getItem = () => {
//     const getItemfromLocalStorage = localStorage.getItem('item');
//     if (getItemfromLocalStorage) {
//         try {
//             const doParse = JSON.parse(getItemfromLocalStorage);
//             if (Array.isArray(doParse)) {
//                 // If it's an array, return the default object
//                 return { ids: [], totalPrice: 0 };
//             }
//             return doParse;
//         } catch (e) {
//             // In case of parsing error, return the default object
//             return { ids: [], totalPrice: 0 };
//         }
//     } else {
//         return { ids: [], totalPrice: 0 };
//     }
// };

// const secondFunc = (data) => {
//     const dostringify = JSON.stringify(data);
//     localStorage.setItem('item', dostringify);
// };

// const addToLs = (id, price) => {
//     const data = getItem();
//     data.ids = data.ids || []; // Initialize data.ids as an empty array if it's undefined
//     data.ids.push(id);
//     data.totalPrice += parseFloat(price);
//     secondFunc(data);
// };

// export { addToLs, getItem };

const getItem = () => {
    const getItemfromLocalStorage = localStorage.getItem('item');
    if (getItemfromLocalStorage) {
        const doParse = JSON.parse(getItemfromLocalStorage);
        //console.log(doParse);
        return doParse;
    } else {
        return { ids: [], totalPrice: 0 };
    }
};

const secondFunc = (data) => {
    const dostringify = JSON.stringify(data);
    // console.log(dostringify);
    localStorage.setItem('item', dostringify);
};

const addToLs = (id, price) => {
    const data = getItem();
    // console.log(data);
    // data.ids = data.ids || []; // Initialize data.ids as an empty array if it's undefined
    // console.log(data.ids);
    data.ids.push(id);
    data.totalPrice += parseFloat(price);
    secondFunc(data);
};

export { addToLs, getItem };

