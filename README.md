
# Important Info

The project is in the "main" branch.

There are two versions. One retuns the value indicated by the exercise following the expected procedure. The second one, commented, returns the amount of a, b and c in each set, the price of the set and the total for that call to the function. Given the way I mix them I could not find a clean way to separate the number of Bs from artificial Bs, meaning those resulting from mixing As and Cs.

# Empanadas price optimizer

This was a logic project for an FSD course at GeeksHubs Academy. The project consisted in taking 3 parameters representing the amount of empanadas and calculate the minimum price to pay for them considering that there is a 3x1 promotion and that the empanadas themselves can be mixed together in halves to average the value of the empanadas used in the mix.

## Index

- [Stack](#stack)
- [Author](#author)
- [Development Time](#development-time)
- [Steps]{#steps}

## Stack 

![Static Badge](https://img.shields.io/badge/JavaScript-yellow)

## Author 

- **Pedro Fernández** - Project Developer
  - [GitHub](https://github.com/Eryhnar) - [LinkedIn](https://www.linkedin.com/in/pedro-fernandez-bel-68a2b9155/)

## Development Time 

- The project was done in about an hour initially and reworked later to follow the project instructions more closely later. Total time of about 3-4 hours.

## Steps

- The function first checks the input and if it is not valid returns an error. The order decision was made to avoid an else statement and improve on execution speed even if marginally.
- The function then takes all a,b and c and pushes them into an array. This is so that we can work with them iteratively and remove them as they get used.
- After that we take the most expensive pie and the cheapest in the array, average their prices and push it twice into a new array. This ensures that the most expensive ones always get the biggest discount possible.
- Then we sort the new array with the mixed pies and iteratively take the last 3 which will be the most expensive ones in the array thanks to the sorting. We do it like this to make sure that the 2 free pies from the 3x1 are as expensive as possible to save more money.
- For each one of this sets of 3 we take the max value and add it to price. This way we only pay the most expensive and price will be the sum of the most expensive pie in each set.
- Finally the function returns the final price.
- The alternate version works mostly the same but it also pushes an amount of a, b, and c into a new array of objects. The amounts of a, b and c is calculated from the prices of each pie in the set with the mixed ones being 0.5 of each pie used in the mix. Each set is an array of objects within another array. The array contains the amount of each pie per set and the price to pay for the set. The bigger array contains all sets and the total price to pay.
