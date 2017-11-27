var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{

	for (var i = 0; i < weaponsArray.length; i++)
	{
		var weaponTag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += weaponTag;
	}
}


function SelectWeapon()
{
	var chosenIndex = document.forms[0]["weapons"].value;
	var chosenWeapon = weaponsArray[chosenIndex];

	document.getElementById('currentWeapon').innerHTML = chosenWeapon;
}
