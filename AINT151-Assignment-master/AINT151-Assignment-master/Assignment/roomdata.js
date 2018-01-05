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
	},
	{
		title:'Complimenting with the Stable Boy',
		text:"The boy smiles and seems to appreciate that you noticed his hard work.<br\><br\>\
		'Well...when I was tending to one of the horses that was here last night, something scared her pretty bad. I tried to get a look but I couldn’t see anyone. I thought I heard someone whispering behind me though...I didn’t understand the language but it sounded like a woman's voice. Sent chills right down my back.'",
		choices:[
			{
				text:'Go back to the entrance',
				index:4
			}
		]
	},
	{
		title:'Barracks',
		text:"You leave the stable behind you and head towards a low, squat building with barred windows and a heavy wooden door. Sitting on a bench just outside is a guard with a gaunt looking face. He wears a padded cloth shirt and rests his hand on a short club at his belt. He looks up as you approach.",
		choices:[
			{
				text:'Talk to the guardsman',
				index:9
			},
			{
				text:'Go past and into the town centre',
				index:12
			}
		]
	},
	{
		title:'Talking to Guard',
		text:"'Hail traveller, what can I do for you'<br\><br\>\
		You notice that he looks very tired. You inform the man that you’re here to investigate the strange occurrences and he appears relieved.<br\><br\>\
		'Oh thank the gods, I was starting to get overrun with complaints about the same damn nightmares. I’ve been getting them myself as well. Mind you don’t stay too long - I imagine you’ll start getting them too.'",
		choices:[
			{
				text:'Ask the guard about the nightmare',
				index:10
			},
			{
				text:'Ask the guard who he thinks you should go and see next',
				index:11
			},
			{
				text:'Thank him and continue on - heading towards the town centre',
				index:12
			}
		]
	},
	{
		title:'Talking to the Guard',
		text:"The guardsman shivers slightly as he thinks back to the nightmare - it’s clearly an unpleasant thing to remember.<br\><br\>\
		'I remember the whispering pretty clearly, it was a female voice but no language that i’d heard before. It’s all dark to begin with - just the whispering - but then after a while it starts to get light and then you see that you’re surrounded by trees I think there was also the sound of a quiet stream nearby? The whispering gets louder and louder, as though she’s trying to direct you somewhere. Eventually it gets so loud that you wake up. It’s the same story with everyone.'",
		choices:[
			{
				text:'Ask about something else',
				index:9
			}
		]
	},
	{
		title:'Talking to the Guard',
		text:"You ask the guard if there is anyone in town that he recommends you see, perhaps regarding any recent changes in the town that could have led to this situation. He considers for a moment before nodding and pointing further into town.<br\><br\>\
		'I'd recommend you go see Mera at the Maiden and Shield - she knows all the local stories and could surely give you some information if you asked. Tell her Gunther sent you and she’ll be a little more approachable.<br\><br\>\
		He smiles at this and you suspect he and Mera are more than local acquaintances.",
		choices:[
			{
				text:'Ask the guard about something else',
				index:9
			}
		]
	},
	{
		title:'Town Centre',
		text:"You head towards where the majority of the noise is coming from and find yourself in what you assume to be the town centre. There are lots of people milling around and you imagine that it would usually have an upbeat and social atmosphere. But not now - people walked from place to place with their eyes cast down and their clothes wrapped tightly about their shoulders.<br\><br\>\
		There is very little conversation, but what you can hear is hushed and frantic. Nestled between two large buildings are two market stalls, their wares on display for passersby to see. <br\><br\>\
		Off to your right you can see the Maiden and Shield - obvious because of the drunken babble and warm glow. <br\><br\>\
		To the left is the source of the metallic noises you heard at the entrance. It is a blacksmith's forge, its furnace glowing bright. Hammering away at one of the anvils you can see a heavyset man, forging what looks like a horseshoe.",
		choices:[
			{
				text:'Head over to the market stalls',
				index:13
			},
			{
				text:'Make for the Maiden and Shield',
				index:19
			},
			{
				text:'Head towards the forge',
				index:24
			}
		]
	},
	{
		title:'Market Stalls',
		text:"You wander over to the market stalls and glance at the wares and those selling them.<br\><br\>\
		The first of the stalls was a large, colourful, affair. It’s blue and yellow bunting fluttered in the light breeze. Laid out over the tabletop is a wide variety of gems and fine jewelry. Standing behind the stall is a short plump man in fine fabrics. He had small eyes and a large nose - a cruel smirk on his lips as he regarded you. <br\><br\>\
		Second was a smaller stall, more subtle and easier on the eye than the garish colours of the gem merchant. Its fabrics were muted browns and greens - almost blending into the murky shadow behind the stalls. Scattered across the bare wooden tabletop was a selection of twisted branches and small bundles of herbs and leaves. As you regarded the objects you noticed a druid woman sitting in the shadow - curiously watching you with deep brown eyes.",
		choices:[
			{
				text:'Talk to the man behind the gem stall',
				index:14
			},
			{
				text:'Talk to the druid woman',
				index:17
			},
			{
				text:'Go back to the town centre',
				index:12
			}
		]
	},
	{
		title:'Gem Stall',
		text:"As you approach the stall the plump man smiles widely.<br\><br\>\
		“Welcome fine adventurer! Looking for something a little more expensive? A little shiny? A little...magical?”<br\><br\>\
		You inform the man you are here researching the strange occurrences surrounding the nightmares that everyone in the town seems to have experienced. At the mention of the dreams he winces, clearly he has experienced them as well.<br\><br\>\
		“Oh yes, terrible! Terrible they are, I hope you can do something about it, I sure do need my beauty sleep”<br\><br\>\
		He smiles at you again but it does not reach his eyes.",
		choices:[
			{
				text:'Leave the man alone',
				index:13
			}
		]
	},
	{
		title:'Gem Stall',
		text:"He looks at you suspiciously and spreads his hands wide. <br\><br\>\
		“Why would I have an item like that, and even if I did….why would I just give it up?”<br\><br\>\
		His eyes sparkle maliciously at this, as he waits for your response.",
		choices:[
			{
				text:'Accuse the man of selling glass as expensive jewels',
				index:16
			}
		]
	},
	{
		title:'Gem Stall',
		text:"You bring up what the blacksmith told you about the jewelers lies. You watch with some satisfaction as his face falls and he responds to you in a hushed voice - tripping over his words.<br\><br\>\
		“Keep your voice down! Don’t bring that up here, please don’t bring it to the guards they’ll kick me out….you want your necklace? Fine I have it”<br\><br\>\
		He rummages around in a small lockbox underneath the stall and returns with a fine necklace clutched in his palm. It is fairly inconspicuous for the amount of trouble it has caused - just a simple silver chain with a number of glinting rubies hanging from the chain along its length. You feel a rush of relief as the merchant drops it into your palm.<br\><br\>\
		“Now get out of here, the guards will start sniffing around if you’re not careful”",
		choices:[
			{
				text:'Go back to town',
				index:12
			}
		]
	},
	{
		title:'Druid Stall',
		text:"“You are here investigating the nightmares?”<br\><br\>\
		Her voice is low and you have to strain to hear her over the hubbub of the town centre. You nod at her, you say you were wondering if she had seen anything like this before. She nods slowly.<br\><br\>\
		“I have seen something like this before...it was a spirit, trapped here when it shouldn’t have been. It created nightmares as messages, so that it could be freed.”<br\><br\>\
		You say that the spirit didn’t seemed to speaking any language you had heard before, so how were you to follow its messages?<br\><br\>\
		“Ah of course….spirits speak with a dead tongue, you will need...something like this.” Her hand moves over the talismans and branches arrayed on her stall. You notice that her eyes stay fixed on you. She hands you a small length of twisted root, simple runes scratched into one side.",
		choices:[
			{
				text:'Thank the druid and go back',
				index:13
			}
		]
	}
]
