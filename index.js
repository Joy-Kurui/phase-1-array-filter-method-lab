// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arr, query){
        return arr.filter((def) => def.toLowerCase().includes(query.toLowerCase()));
      }
      
console.log(findMatching(drivers,'Bobby'));

function fuzzyMatch(arr1, query1){
    return arr1.filter((ghi) => ghi.toLowerCase().startsWith(query1.toLowerCase()));
}
console.log(fuzzyMatch(drivers,'Sa'));

const driversHometown = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(collection, query2){     
    return collection.filter((jkl) => jkl.name.toLowerCase().includes(query2.toLowerCase()));
}
matchName(driversHometown, 'Bobby');
