

 export function filterFilmsByDirector(list, searchDirector){
    return list.filter(item => item.director == searchDirector);
}


/* Filtered list of directors*/

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ""))];
}