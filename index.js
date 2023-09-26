// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, name) =>{
    let matchingList =  drivers.filter((driver) => driver == name || driver.charAt(0).toUpperCase() + driver.slice(1) == name);
    return matchingList;
}

findMatching(drivers, 'Bobby')

const fuzzyMatch = (drivers,name) => {
    let matchingList = drivers.filter((driver) => driver.charAt(0) == name || driver.slice(0,2) == name);
    return matchingList
}

const matchName = (drivers,name) =>{
    let matchingList = drivers.filter((driver) => driver.name === name);
    return matchingList;
}