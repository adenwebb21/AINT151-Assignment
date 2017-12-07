var roomArray = [
	{
		title:'Introduction',
		text:"You approach the town of Fandalin on horseback, riding in following rumours of a monster hidden among the townsfolk. Outside of the bounds of the town are a number of farms - no doubt supplying vegetables and meat to the markets situated within. You see a miserable looking man standing by the side of the road. <br\><br\> You had been sent to this town following reports of strange occurrences.",
		choices:[
			{
				text:'Approach the man',
				index:1
			},
      {
				text:'Ride past into the town',
				index:3
			}
		]
	},
	{
		title:'Talking to Farmer',
		text:"You slow your horse to a trot and then to a full stop, calling out to the man. He looks up and narrows his eyes at you with apparent suspicion. You can see that his clothes are fairly thin and ragged and a scraggly beard covered his chin and lower jaw.\
    <br\><br\>'Was it you? Did you scare off my pigs? All you adventurers, can’t trust any of ya!'\
    <br\><br\>You shake your head and try to calm the man, you explain that you are here to investigate exactly this kind of unusual activity. You ask him if there was anything he could tell you about the culprit. \
    He pauses for a moment, scratching his chin.\
    <br\><br\>'I mean they were long gone before I even got out of the door...'",
		choices:[
			{
				text:'Ask the farmer about the pigs',
				index:2
			},
			{
				text:'Leave the farmer and continue past to Fandalin',
				index:3
			}
		]
	},
	{
		title:'Talking to Farmer about Pigs',
		text:"You ask the farmer for more information about the pigs.\
    <br\><br\>'They weren’t easily scared i’ll tell you that! Takes a lot to spook em. Whatever it was must have been real scary...'\
    <br\><br\>'I must say....i've been sleeping pretty badly the last few days I wonder if they're linked'",
		choices:[
			{
				text:'Thank the farmer and continue on to town',
				index:3
			}
		]
	},
	{
		title:'Outskirts of the Fandalin',
		text:"You leave the farmer behind you and ride right up to the edge of the town called Fandalin. Just outside of its boundaries you spot a stable. Beyond that you can see a few townspeople milling around and hear the distant clang of a blacksmith working metal.",
		choices:[
			{
				text:'Go to the stable',
				index:4
			},
			{
				text:'Go back to the farmer',
				index:1
			}
		]
	},
	{
		title:'Stable Entrance',
		text:"You arrive at the stable and swing down off your horse, smiling at the stable boy who regards you warily.",
		choices:[
			{
				text:'Investigate the stable',
				index:5
			},
			{
				text:'Talk to the stable boy',
				index:6
			},
			{
				text:'Leave the stable alone and continue on to the town',
				index:8
			}
		]
	},
	{
		title:'Investigating the Stable',
		text:"You look around the stable and see, to your surprise, that it is more or less pristine. The hay all looks to have been changed recently and the wooden supports and dividers look to have just recently been cleaned.",
		choices:[
			{
				text:'Talk to the stable boy',
				index:6
			},
			{
				text:'Return to the entrance of the stable',
				index:4
			}
		]
	},
	{
		title:'Talking with the Stable Boy',
		text:"You wave to the stable boy and try a hello. He just looks at you, his eyes shifting from side to side as though he is about to make a quick escape. You can tell he is uncomfortable.\
			You try asking if he has seen anything unusual. To this he just shakes his head quickly and looks away.",
		choices:[
			{
				text:'Leave the boy alone',
				index:4
			}
		]
	}
]
