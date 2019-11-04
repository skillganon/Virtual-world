
alert('welcome to the new world')
var gender = prompt('pick between Male of Female')




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
var action = prompt('Would you like to fight this bandits? Yes, No')

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
var answer = prompt('healer Nera says: would you like me to Heal you?')

if(answer == 'Yes') {
    alert('you are fully healed')
}
else {
    alert('Nera: i notice that you are heavily wounded and i will heal you so you dont die.!')
}
    
