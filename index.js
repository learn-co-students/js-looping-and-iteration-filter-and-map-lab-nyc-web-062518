function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  })
}

function exactMatch(drivers, matched_property) {
  return drivers.filter(function(driver) {
    let matches;

    for (const key in matched_property) {
      if(driver[key] === matched_property[key]){
        matches = driver[key]
      }
    }
    return matches;
  })
}

function exactMatchToList(drivers, matched_property) {
  return exactMatch(drivers, matched_property).map(function(driver){
    return driver.name;
  })
}
