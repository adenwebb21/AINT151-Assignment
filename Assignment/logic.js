var examinedStable = false;

function OnLoad()
{
	console.log("Hi aden, will you find this?");
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById('roomChoices').innerHTML = "";
	document.getElementById('lockedRoomChoices').innerHTML = "";
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;
	document.getElementById('discoveryText').innerHTML = "";

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var roomChoices = "<button id = 'button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button><br\>";
		document.getElementById('roomChoices').innerHTML += roomChoices;
	}

	UpdateInfo(roomIndex);
	CreateLockedButtons(roomIndex)
}

function GetLockedButtons(roomIndex)
{
	document.getElementById('lockedRoomChoices').innerHTML = "";

	for (var i = 0; i < lockedChoicesArray[roomIndex].choices.length; i++)
	{
		var lockedRoomChoices = "<button id = 'lockedButton' onClick=SelectRoom(" + lockedChoicesArray[roomIndex].choices[i].index + ")>" + lockedChoicesArray[roomIndex].choices[i].text + "</button><br\>";
		document.getElementById('lockedRoomChoices').innerHTML += lockedRoomChoices;
	}
}

function CreateLockedButtons(roomIndex)
{
	switch (roomIndex)
	{
		case 6:
			if (examinedStable == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;

		default:
			break;
	}
}

function UpdateInfo(roomIndex)
{
	switch (roomIndex)
	{
		case 5:
			examinedStable = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned that the stable is well looked after - maybe you can use this to make the stable boy feel more comfortable";
			break;

		default:
			break;
	}
}
