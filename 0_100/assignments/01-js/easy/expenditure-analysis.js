/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // let result = [];
  // for(let i = 0; i < transactions.length; i++){
  //   let len = result.length;

  //   for (let j = 0; j < len; j++){
  //     if(transactions[i]["category"] == )
  //   }
  // }
  // return [];
  const categoryMap = new Map();
    
  // Iterate through each transaction
  transactions.forEach(transaction => {
      // If the category already exists in the map, add the price to its total
      if (categoryMap.has(transaction.category)) {
          categoryMap.set(transaction.category, categoryMap.get(transaction.category) + transaction.price);
      } else {
          // Otherwise, add a new entry for the category
          categoryMap.set(transaction.category, transaction.price);
      }
  });
  
  // Convert the map to an array of objects with category and totalSpent properties
  const result = [];
  categoryMap.forEach((totalSpent, category) => {
      result.push({ category, totalSpent });
  });
    
  return result;
}

module.exports = calculateTotalSpentByCategory;
