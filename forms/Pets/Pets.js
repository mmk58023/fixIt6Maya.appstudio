let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withMarmaduke = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Marmaduke']

let start = prompt('Please select an option: \n 1 - remove "Vinny" from the array \n 2 - remove "Marty" from the array \n 3 - add "Nancy" to the front of the array \n 4 - add their name to the end of the array \n 5 - tell the user the array index where "Riley" is located in the array \n 6 - tell the user the array index where "Cindy" is located \n 7 - show the "withMarmaduke" array data \n 8 - Use the .shift() array method on the original "pets" array \n 9 - add the name "Barney" to the petNames array using .unshift() \n 10 - add the allPets array: Ted, Fred, Jed, Ned, Ed, Zed to "pets" \n 11 - using .join() create the variable "stringPets" holding all pet names \n 12 - add "Agnes" to the petNames array using .unshift()')


switch (start) {
case '1':
  let removeVinny = petNames.splice(5,1)
  alert(`The pet names have been updated to: ${petNames}.`)
  console.log(`The action taken was: Remove Vinny \n The remaining data are: \n ${petNames}.`)
  break;
case '2':
  let removeMarty = petNames.splice(3,1)
  alert(`The pet names have been updated to: ${petNames}.`)
  console.log(`The action taken was: Remove Marty \n The remaining data are: \n ${petNames}.`)
  break;
case '3':
  let addNancy = petNames.unshift('Nancy')
  alert(`The pet names have been updated to: ${petNames}.`)
  console.log(`The action taken was: Add Nancy \n The remaining data are: \n ${petNames}.`)
  break;
case '4':
  let enterUserName = prompt('Please enter your name: ')
  let addUserName = petNames.push(enterUserName)
  alert(`The pet names have been updated to: ${petNames}.`)
  console.log(`The action taken was: Add User \n The remaining data are: \n ${petNames}.`)
  break;
case '5':
  alert(`"Riley" is located in the array index ${petNames.indexOf('Riley')}.`)
  console.log(`The action taken was: Riley Array Index \n The remaining data are: \n ${petNames}.`)
  break;
case '6':
  alert(`"Cindy" is located in the array index ${petNames.indexOf('Cindy')}.`)
  console.log(`The action taken was: Cindy Array Index \n The remaining data are: \n ${petNames}.`)
  break;
case '7':
  alert(`The pet "Marmaduke" has been added to the list of pet names. The list now reads: ${withMarmaduke}`)
  console.log(`The action taken was: Show Marmaduke Array \n The remaining data are: \n ${petNames}.`)
  break;
case '8':
  let shiftPets = petNames.shift()
  alert(`The pet names have been updated to: ${petNames}. \n\n ${shiftPets} has been removed.`)
  console.log(`The action taken was: Shift Array \n The remaining data are: \n ${petNames}.`)
  break;
case '9':
  let unShiftPets1 = petNames.unshift('Barney')
  alert(`The pet names have been updated to: ${petNames}. \n\n Barney has been added.`)
  console.log(`The action taken was: Add Barney Using Unshift \n The remaining data are: \n ${petNames}.`)
  break;
case '10':
  let newArray = ['Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed']
  let allPets = petNames.unshift(newArray)
  alert(`The pet names have been updated to: ${petNames}. \n\n ${newArray} have been added.`)
  console.log(`The action taken was: Add Array \n The remaining data are: \n ${petNames}.`)
  break;
case '11':
  let stringPets = petNames.join()
  alert(`The pet names have been recorded as: ${petNames}.`)
  console.log(`The action taken was: String Array \n The remaining data are: \n ${petNames}.`)
  break;
case '12':
  let unShiftPets2 = petNames.unshift('Agnes')
  alert(`The pet names have been updated to: ${petNames}. \n\n Agnes has been added.`)
  console.log(`The action taken was: Add Agnes Using Unshift  \n The remaining data are: \n ${petNames}.`)
  break;
default:
  alert('Please select an option ex. 1, 2, etc.')
  break;
}

