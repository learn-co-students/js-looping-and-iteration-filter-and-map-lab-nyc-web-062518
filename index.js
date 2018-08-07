// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  let select_drivers = drivers.filter(function(driver){
    return driver.revenue > revenue
  })
  return select_drivers
}

function driverNamesWithRevenueOver(drivers, revenue){
  let selectDrivers = drivers.filter(function(driver){
    return driver.revenue > revenue
  })
  driversNames = selectDrivers.map(function(driver){
    return driver.name
  })
  return driversNames
}

function exactMatch(drivers, exactMatch){
  // debugger
  let selectDrivers = drivers.filter(function(driver){
    return driver.revenue === exactMatch.revenue ||
     driver.name === exactMatch.name
  })
  return selectDrivers
}

function exactMatchToList(drivers, exactMatch){
  // debugger
  let selectDrivers = drivers.filter(function(driver){
    return driver.revenue === exactMatch.revenue ||
     driver.name === exactMatch.name
  })
  driversNames = selectDrivers.map(function(driver){
    return driver.name
  })
  return driversNames
}
