// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){return driver.name})
}

function exactMatch(drivers, traits){
  return drivers.filter(function(driver){
    for(const key in traits){
      return driver[key] === traits[key];
    }
  })
}

function exactMatchToList(drivers, traits){
  return exactMatch(drivers, traits).map(function(driver){return driver.name})
}
