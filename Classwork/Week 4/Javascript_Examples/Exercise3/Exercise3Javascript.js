var isLightOn = false;
function ToggleLight()
{
	if (isLightOn == true)
	{
		document.getElementById('lightBulb').src = "img/bulb-off.png";
		isLightOn = false;
	}
	else
	{
		document.getElementById('lightBulb').src = "img/bulb-on.png";
		isLightOn = true;
	}
}

function AddNumbers(numA, numB)
{
	var total = numA + numB;
	document.getElementById('numbers').innerHTML = total;
}
