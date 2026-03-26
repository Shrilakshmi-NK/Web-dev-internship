// Shopping List Array Project
// Simple program using push() and pop() - For absolute beginners
// Created by Shrilakshmi N K

console.log("=== MY SHOPPING LIST ===");

// Step 1: Create an empty array
let shoppingList = [];

// Step 2: Add items using .push()
console.log("\nAdding items to the shopping list...");

shoppingList.push("Milk");
console.log("Added: Milk");

shoppingList.push("Bread");
console.log("Added: Bread");

shoppingList.push("Eggs");
console.log("Added: Eggs");

shoppingList.push("Rice");
console.log("Added: Rice");

shoppingList.push("Tomatoes");
console.log("Added: Tomatoes");

console.log("\nCurrent Shopping List:", shoppingList);
console.log("Total items in cart:", shoppingList.length);

// Step 3: Remove the last item using .pop()
console.log("\nRemoving last item using .pop()...");

let removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);

console.log("Updated Shopping List:", shoppingList);
console.log("Total items now:", shoppingList.length);

// Add one more item
console.log("\nAdding one more item...");
shoppingList.push("Butter");
console.log("Added: Butter");

console.log("\nFinal Shopping List:", shoppingList);
console.log("Total items:", shoppingList.length);

// Bonus: Show the list nicely with numbers
console.log("\n=== FINAL SHOPPING LIST ===");
for (let i = 0; i < shoppingList.length; i++) {
    console.log((i + 1) + ". " + shoppingList[i]);
}

// Summary
console.log("\n=== SUMMARY ===");
console.log("We used .push() to add items");
console.log("We used .pop() to remove the last item");
console.log("Arrays are very useful for managing lists in JavaScript!");