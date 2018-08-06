// Code your solution here:
function driversWithRevenueOver(array, revenue){
  matches = array.filter(function (d) { return d.revenue > parseInt(revenue)})
  return matches
}

function driverNamesWithRevenueOver(array, revenue){
  matchNames = driversWithRevenueOver(array, revenue).map(function (d) {return d.name})
  return matchNames
}

function exactMatch(array, object){
  k = Object.keys(object)[0]
  v = object[k]
  matches = array.filter(function (d) { return d[k] === v})
  return matches
}

function exactMatchToList(array, object){
  matches = exactMatch(array, object)
  matchNames = matches.map(function (d) {return d.name})
  return matchNames
}
