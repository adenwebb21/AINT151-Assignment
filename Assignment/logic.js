var examinedStable = false;
var guntherSentYou = false;
var hasNecklace = false;
var hasTranslator = false;
var woodedgrove = false;
var knowWhoGhostIs = false;
var knowAboutNecklace = false;
var spokeToGuardAboutNightmare = false;

var finMera = false;
var finBlacksmith = false;
var finDruid = false;
var finGuard = false;

function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById('roomChoices').innerHTML = "";
	document.getElementById('lockedRoomChoices').innerHTML = "";
	document.getElementById('roomTitle').innerHTML = roomArray[roomIndex].title;
	document.getElementById('roomText').innerHTML = roomArray[roomIndex].text;

	if (roomIndex == 30 && guntherSentYou)
	{
		document.getElementById('roomText').innerHTML += "<br\><br\>\ You look around you and notice that the surroundings match the guards description of the nightmare almost perfectly."
	}

	document.getElementById('discoveryText').innerHTML = "";

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var roomChoices = "<button id = 'button' onClick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button><br\>";
		document.getElementById('roomChoices').innerHTML += roomChoices;
	}

	UpdateInfo(roomIndex);
	CreateLockedButtons(roomIndex)
	GetBackgroundImage(roomIndex);
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

function GetBackgroundImage(roomIndex)
{
	switch (roomIndex)
	{
		case 0:
		case 1:
		case 2:
			document.getElementById("body").background = "farmbg.png";
			break;
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			document.getElementById("body").background = "stable.png";
			break;
		case 8:
		case 9:
		case 10:
		case 11:
		case 40:
			document.getElementById("body").background = "barraks.png";
			break;
		case 12:
		case 36:
			document.getElementById("body").background = "towncentre.png";
			break;
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 39:
			document.getElementById("body").background = "marketstalls.png";
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 37:
			document.getElementById("body").background = "inn.png";
			break;
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 38:
			document.getElementById("body").background = "forge.png";
			break;
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
			document.getElementById("body").background = "woodedgrove.png";
			break;
		default:
			document.getElementById("body").background = "";
			break;
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
		case 14:
			if (knowAboutNecklace == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 17:
			if (knowWhoGhostIs == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 18:
			if (knowAboutNecklace == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 20:
			if (woodedgrove == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 21:
			if (guntherSentYou == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 22:
			if (hasTranslator == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 23:
			if (hasTranslator == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 25:
			if (knowWhoGhostIs == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 30:
			if (hasTranslator == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 32:
			if (hasNecklace == true)
			{
				GetLockedButtons(roomIndex);
			}
			break;
		case 37:
		case 38:
		case 39:
		case 40:
			if (finMera && finGuard && finDruid && finBlacksmith)
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
		/*case 10:
			spokeToGuardAboutNightmare = true;
			break;*/
		case 11:
			guntherSentYou = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned that Mera could be made more amenable by telling her that Gunther sent you";
			break;
		case 16:
			hasNecklace = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have retrieved the necklace from the hands of the gem trader.";
			break;
		case 17:
			hasTranslator = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have been granted a translator that will allow you to converse with the spirit.";
			break;
		case 24:
			knowWhoGhostIs = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned that the ghost is Joanne Orner - daughter of the blacksmith.";
			break;
		case 28:
			woodedgrove = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned about the wooded grove - out back of the inn.";
			break;
		case 29:
			knowAboutNecklace = true;
			document.getElementById('discoveryText').innerHTML = "<br\><br\>You have learned of the necklace that belonged to Joanne and the nefarious dealings of the gem merchant";
			break;
		case 37:
			finMera = true;
			break;
		case 38:
			finBlacksmith = true;
			break;
		case 39:
			finDruid = true;
			break;
		case 40:
			finGuard = true;
			break;
		default:
			break;
	}
}
