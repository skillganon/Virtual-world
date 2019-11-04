
alert('welcome to the new world')
var gender = prompt('pick between Male or Female')




if (gender == 'Male')
{
alert('you recieved a sword and a shield')
}
else if (gender == 'Female')
{
    alert('you recieved a bow and arrows')
}
else{
    alert('error 404 no gender picked, exiting program')
  clear;
}

alert('after reciving your weapon you decide to explore the world.')
alert('while you are exploring the forest of this new world you run into bandits!')
var action = prompt('Would you like to fight this bandits? Yes or No')

if(action == 'Yes'){
    alert('you enter combat where you end up killing the bandits')
    alert('after the fight is over you suffer from deep wonds of the fight and need to find a town where u can heal up')
}
else if (action == 'No') {
    alert('you try to run away and succed but you get hurt while escaping')
    alert('if you dont find a healer to heal your wounds you will die')
}
else{
    alert('you stand there undecisive about what to do and the bandits kill you')
    alert('GAME OVER!')
    startGame();
}
alert('after searching for 2 days you find a town and decide to enter and speak to the healer of that city')
var answer = prompt('healer Nera says: would you like me to Heal you? Yes or No')

if(answer == 'Yes') {
    alert('you are fully healed')
}
else if(answer == 'No')  {
    alert('you start to feel weak , dizzy from the wound that you didnt heal and you pass out')
    alert ('Nera discovers your body unconscious on the floor, she heals your wounds and then carries you to a bed where you rest untill you wake up')
}
    else {
        alert('Nera looks at you as you collapse on the floor not being able to decide if to get healed or not. Nera heals you up and carries you to a bed where you rest untill you wake up')

    }
alert('you wake up fully restored in a room with a chest in it.')
var choice = prompt('would you like to loot the chest Yes or No')

if(choice == 'Yes') {
    alert('you found a map of the forest and city')
}
  else if ('No') {
      alert('you leave the room and go to the shop to buy a map of the area you are in.')

  }  
  else{
      alert('undecesive about what to do you decide to go out of the town. The healer nera suddenly appears and gives you a map of the city and the forest so you can find your way back if you ever need to heal up again.')
  }