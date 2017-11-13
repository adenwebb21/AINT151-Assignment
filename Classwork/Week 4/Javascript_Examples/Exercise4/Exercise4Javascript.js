function CreatePlayer()
{
  var playerName = document.getElementById('playername').value;
  var playerColour = document.getElementById('playercolour').value;
  var playerHealth = document.getElementById('playerhealth').value;

  var weaponChoice = document.getElementById('playerweapon').value;

  document.getElementById('name').innerHTML = playerName;
  document.getElementById('colour').style.backgroundColor = playerColour;
  document.getElementById('health').innerHTML = playerHealth;

/*
  if (weaponChoice == 1)
  {
    document.getElementById('weapon').innerHTML = "Crossbow of much Hurting";
  }
  else if (weaponChoice == 2)
  {
    document.getElementById('weapon').innerHTML = "Broadsword of so slicing";
  }
  else
  {
    document.getElementById('weapon').innerHTML = "Wand of amaze magics";
  }
*/

  switch(weaponChoice)
  {
    case '1':
      document.getElementById('weapon').innerHTML = "Crossbow of much Hurting";
      break;

    case '2':
      document.getElementById('weapon').innerHTML = "Broadsword of so slicing";
      break;

    case '3':
      document.getElementById('weapon').innerHTML = "Wand of amaze magics";
      break;

    default:
      document.getElementById('weapon').innerHTML = "Error";
      break;
  }

}
