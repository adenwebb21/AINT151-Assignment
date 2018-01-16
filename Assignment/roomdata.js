var roomArray = [
	{
		<!--0-->
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
		<!--1-->
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
		<!--2-->
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
		<!--3-->
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
		<!--4-->
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
		<!--5-->
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
		<!--6-->
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
		<!--7-->
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
		<!--8-->
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
		<!--9-->
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
		<!--10-->
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
		<!--11-->
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
		<!--12-->
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
				index:20
			},
			{
				text:'Head towards the forge',
				index:25
			},
			{
				text:'Go back to the barracks',
				index:9
			}
		]
	},
	{
		<!--13-->
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
		<!--14-->
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
		<!--15-->
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
		<!--16-->
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
		<!--17-->
		title:'Druid Stall',
		text:"“You are here investigating the nightmares?”<br\><br\>\
		Her voice is low and you have to strain to hear her over the hubbub of the town centre. You nod at her, you say you were wondering if she had seen anything like this before.<br\><br\>\
		“I have seen something like this before...it was a spirit, trapped here when it shouldn’t have been. It created nightmares as messages, so that it could be freed.”<br\><br\>\
		You say that the spirit didn’t seemed to speaking any language you had heard before, so how were you to follow its messages?<br\><br\>\
		“Ah of course….spirits speak with a dead tongue, you will need...something like this.” Her hand moves over the talismans and branches arrayed on her stall. You notice that her eyes stay fixed on you. She hands you a small length of twisted root, simple runes scratched into one side.",
		choices:[
			{
				text:'Thank the druid and go back',
				index:13
			}
		]
	},
	{
		<!--18-->
		title:'Druid Stall',
		text:"“Ah….so you know who the spirit is? That’s good...in order to free them and help them move on you will need to determine the cause of their entrapment….an item perhaps?””",
		choices:[
			{
				text:'Tell the druid you will keep your eyes open and head back to the town centre',
				index:12
			}
		]
	},
	{
		<!--19-->
		title:'Druid Stall',
		text:"“If you can find the item, you’ll need to bring it to the location of her burial. Once there the spirit should take the item from you and be free to move on...the burial location however is something I cannot tell you….maybe a member of her family will be able to help you?”",
		choices:[
			{
				text:'Thank the druid for her help and go back to the town centre',
				index:12
			}
		]
	},
	{
		<!--20-->
		title:'The Maiden and Shield',
		text:"As you enter the inn through a large wooden door, you are greeted with a warm and friendly interior. It is lit by a large fireplace in one wall and multiple wall sconces scattered around the others. A large pot is bubbling over the fire - from the smell of it it’s a peppery stew, ready to be served on demand. The inn is busy but not unpleasantly so and the patrons appear more friendly and conversational than those outside. You assume that this is due in part to the seemingly endless supply of cheap ale.<br\><br\>\
		Standing behind the bar is a hard looking woman who surveys the residents of the inn with a calculating look. You think that if any were to start getting too rowdy - they would be on the road outside the inn in an instant. You head for the bar.",
		choices:[
			{
				text:'Ask the bartender if she knows anything about the nightmares',
				index:21
			},
			{
				text:'Leave the inn and go back to the town centre',
				index:12
			}
		]
	},
	{
		<!--21-->
		title:'Bartender',
		text:"The bartender cuts you off as you begin to ask about the nightmares.<br\><br\>\
		“- look here, everyone has had the same damn nightmare and no I don’t know anything about it either. I’ve had drunken fools coming up to me all day complaining about it and thinking they’re the only one. Unless you’re ordering food or drink go someplace else. I don’t want to hear it.”",
		choices:[
			{
				text:'Leave the woman alone and go back to the town centre',
				index:12
			}
		]
	},
	{
		<!--22-->
		title:'Mera',
		text:"Meras face softens and she smiles.<br\><br\>\
		“Ah of course, apologies if I seemed a little on edge...you have to be to run a place like this. How can I help?”",
		choices:[
			{
				text:'Ask if she has had the nightmare too',
				index:23
			},
			{
				text:'Go back to the town centre',
				index:12
			}
		]
	},
	{
		<!--23-->
		title:'Mera',
		text:"“Oh of course, who hasn’t eh”<br\><br\>\
		She smiles wearily at this.<br\><br\>\
		“I hope someone can sort this out soon - i’m starting to hear that whispering when i’m awake too….”",
		choices:[
			{
				text:'Go back to the town centre',
				index:12
			}
		]
	},
	{
		<!--24-->
		title:'The Maiden and Shield',
		text:"You explain that you believe the nightmares are being caused by a spirit who is stuck in the village and wants to leave. You describe how the nightmares are effectively messages - explaining what we need to do.<br\><br\>\
		Mera nods and waits until you are finished explaining.<br\><br\>\
		“Okay I understand, so what do you want from me?”<br\><br\>\
		You explain that you were hoping she could tell you if anyone had died in the town recently - especially if there had been any mysterious circumstances surrounding their deaths.<br\><br\>\
		She furrows he brow, thinking, and suddenly her eyes widen.<br\><br\>\
		“Of course! The Orner girl...Joanne I think? She passed away recently. That must be it, I thought I recognised the voice from the dreams….she used to come by here all the time. Her father is the local blacksmith - he might be able to tell you more. Also if you need help actually helping the spirit move on, the druid woman with the stall might be able to help you out.”",
		choices:[
			{
				text:'Thank Mera and head back to the town centre',
				index:12
			}
		]
	},
	{
		<!--25-->
		title:'Blacksmith',
		text:"You make your way over to the forge - following the sound of hammering metal and roaring flame as air is pumped into the furnace from  huge set of bellows. The heavyset man does not seem to notice you approach until you stand almost in front of him. At this point he stops hammering, lays down his tool and looks you over.<br\><br\>\
		“What’s this about”<br\><br\>\
		His voice is gruff and hoarse, it does not seem as though he is in the mood for much conversation.",
		choices:[
			{
				text:'Ask the man if he knows anything about the nightmares',
				index:26
			},
			{
				text:'Leave him alone and return to the town centre',
				index:12
			}
		]
	},
	{
		<!--26-->
		title:'Blacksmith',
		text:"He looks at you incredulously for a moment, before shaking his head and reaching for his hammer once again. He clearly does not have anything more important to say regarding the matter.",
		choices:[
			{
				text:'Apologise for asking and retreat to the town centre',
				index:12
			}
		]
	},
	{
		<!--27-->
		title:'Blacksmith',
		text:"He looks at you for a moment as though trying to determine if you are telling the truth. After some time he nods and asks you what exactly it is that you need to know.",
		choices:[
			{
				text:'Ask where she was buried',
				index:28
			},
			{
				text:'Ask if there was any suspicious occurrences surrounding her death',
				index:29
			},
			{
				text:'Head back to the town centre',
				index:12
			}
		]
	},
	{
		<!--28-->
		title:'Blacksmith',
		text:"“She was buried in the small grove out behind the inn, in that little clearing? She always liked it out there”",
		choices:[
			{
				text:'Ask something else',
				index:27
			}
		]
	},
	{
		<!--29-->
		title:'Blacksmith',
		text:"The blacksmith furrows his brow and looks angry.<br\><br\>\
		“That pig of a man at the gem stall kept sniffing around - he’s tried to get me to sell her necklace for years. After she passed I couldn’t find the necklace anywhere. I’d put money on him having taken it”<br\><br\>\
		You say you need the necklace to help rid the town of the nightmares. <br\><br\>\
		“In that case you tell him that you know he’s been selling glass as expensive jewels for years - and you’ll bring it to the guards if he doesn’t return what you need, that should do it”",
		choices:[
			{
				text:'Thank him and go back to the town centre',
				index:12
			},
			{
				text:'Ask something else',
				index:27
			}
		]
	},
	{
		<!--30-->
		title:'Wooded grove',
		text:"You slip out of the back door of the inn and follow a small winding path up to the crest of a low mound. The trees are packed in around the inn but as you get further away the trees fall back and give way to low shrubs and tall grasses. The clearing opens out before you and you can see a small stream weaving its way around the border before disappearing into the trees.  On the far right hand side you can see a fairly fresh pile of turned earth. You recognise the location as the burial site of Joanne Orner. As you walk over to investigate the air appears to drop in temperature.",
		choices:[
			{
				text:'Listen to see if you can hear any of the whispering that the guard described',
				index:31
			},
			{
				text:'Go back to the Maiden and Shield',
				index:20
			}
		]
	},
	{
		<!--31-->
		title:'Wooded grove',
		text:"As you strain your ears to listen for any sound, you notice a quiet whispering that seems to come from all around you. It doesn't sound like any language you can understand. The whispering seems to get louder and louder, it seems to be getting more urgent and frantic but you still don't understand what it is saying. Eventually the volume reaches such a point that you cannot stay - you retreat to the town center to regain your bearings and calm your shaken nerves.",
		choices:[
			{
				text:'Go back to the town centre',
				index:12
			}
		]
	},
	{
		<!--32-->
		title:'Wooded grove',
		text:"You strain your ears to listen for any sound and you do hear the whispering begin to rise around you. You determine you can understand the words that are being said. It sounds as though lots of voices are layered on top of one another so you can only make out snippets but it’s enough to understand the intention.<br\><br\>\
		“Get the necklace….”<br\><br\>\
		“...return to me….”<br\><br\>\
		“.....do you have the necklace?....”<br\><br\>\
		“Have you come to return what’s mine?.....”",
		choices:[
			{
				text:'Say that you do not have the necklace but you will search for it',
				index:33
			}
		]
	},
	{
		<!--33-->
		title:'Wooded grove',
		text:"When you admit that you do not have the item that the spirit is looking for, you hear the voices take on a more disappointed tone.<br\><br\>\
		“...please try to find it”<br\><br\>\
		“....bring it to me as soon as you can wanderer….”",
		choices:[
			{
				text:'Head back to the Maiden and Shield',
				index:20
			}
		]
	},
	{
		<!--34-->
		title:'Wooded grove',
		text:"As you say that you have the item the voices begin to sound more excited.<br\><br\>\
		“You have it?...”<br\><br\>\
		‘.....you are the first…..”<br\><br\>\
		“..please, place it on the branch over the grave”<br\><br\>\
		“....we cannot take it while it is in living hands…”",
		choices:[
			{
				text:'Place the necklace on a branch above the grave',
				index:35
			}
		]
	},
	{
		<!--35-->
		title:'Wooded grove',
		text:"You reach up and place the necklace on an overhanging branch. As soon as your fingers are no longer touching the fine silver - eerie strands of mist appear to form around the necklace, wrapping around. The strands of mist take the form of human hands, more strands appear and slowly elongate - stretching down towards the ground and twisting amongst the grass.<br\><br\>\
		These begin to produce a human shape, until eventually you are standing before a young woman. Joanne presumably. She lifts the necklace from the branch and places it around her neck. You notice that the whispers are quieter now and more refined. They do not fight over one another as much.<br\><br\>\
		“Thank you for returning what is mine”<br\><br\>\
		Her voice is clear now, and she lowers her head before dissipating into the same mist from which she was formed. As soon as she is gone you feel the temperature in the clearing begin to raise and the birds you had not noticed were missing begin to sing again.",
		choices:[
			{
				text:'Return to the town and conclude your business here',
				index:36
			}
		]
	},
	{
		<!--36-->
		title:'The End',
		text:"You return to the town and notice immediately that the atmosphere is happier and more cheerful. Conversation continues as normal and people greet those that they recognise in the streets. The hunched soft spoken figures of before have gone and are replaced with smiling townspeople. <br\><br\>\
		You decide to stay in the town a few more days to ensure that the nightmares have passed.<br\><br\>\
		Once you are ready to leave the town you visit each of the residents you spoke to during your investigations to make sure they are experiencing no ill effects.",
		choices:[
			{
				text:'Talk to Mera',
				index:37
			},
			{
				text:'Talk to the Blacksmith',
				index:38
			},
			{
				text:'Talk to the druid woman',
				index:39
			},
			{
				text:'Talk to the gem merchant',
				index:40
			},
			{
				text:'Talk to Gunther, the guard',
				index:40
			}
		]
	},
	{
		<!--37-->
		title:'The End - Mera',
		text:"You find Mera behind the bar of the Maiden and Shield. She looks up and seems pleased to see you.<br\><br\>\
		“Ah it’s you! Thank you so much for all you’ve done for our little town. It’s such a relief to know that Joanne is happier now and got what she needed. You’re more than welcome to stay here any time.”",
		choices:[
			{
				text:'Talk to the Blacksmith',
				index:38
			},
			{
				text:'Talk to the druid woman',
				index:39
			},
			{
				text:'Talk to the gem merchant',
				index:40
			},
			{
				text:'Talk to Gunther, the guard',
				index:40
			}
		]
	},
	{
		<!--38-->
		title:'The End - Blacksmith',
		text:"The blacksmith is sitting behind a grinding wheel - honing the edge on a woodcutting axe that is resting across his lap. He spots you coming and raises a hand in greeting.<br\><br\>\
		“How are you doing my friend - I wanted to thank you for helping out my daughter, it’s hard enough losing a loved one but knowing she was stuck here just made it that much worse. Give me a shout if you’re ever in town again and we’ll get a drink. By the way, that gem merchant? I wouldn’t bother looking for him, he’s been taken in by the town guards. Apparently he doesn’t want to take visitors”",
		choices:[
			{
				text:'Talk to Mera',
				index:37
			},
			{
				text:'Talk to the druid woman',
				index:39
			},
			{
				text:'Talk to the gem merchant',
				index:40
			},
			{
				text:'Talk to Gunther, the guard',
				index:40
			}
		]
	},
	{
		<!--39-->
		title:'The End - Druid',
		text:"The druid woman is seated behind her stall as you found her before. You do notice however, with some amount of satisfaction, that the gem traders stall is empty. She watches you approach with a slight smile.<br\><br\>\
		“I hear you were...successful, that is good”<br\><br\>\
		“The fewer unhappy spirits there are…..the better”<br\><br\>\
		You begin to remove the translator from your pocket to give back to her but she shakes her head and pushes your hand away.<br\><br\>\
		“No no….this is yours now…..i’m sure you will find use for it”<br\><br\>\
		“Good luck on your travels….adventurer”",
		choices:[
			{
				text:'Talk to Mera',
				index:37
			},
			{
				text:'Talk to the Blacksmith',
				index:38
			},
			{
				text:'Talk to the gem merchant',
				index:40
			},
			{
				text:'Talk to Gunther, the guard',
				index:40
			}
		]
	},
	{
		<!--40-->
		title:'The End - Guard',
		text:"You head towards the jail block building near the entrance of town just in time to see the gem merchant being helped in through the door by a pair of guards. He sees you and scowls miserably before he is lost from view. Gunther, the guard you met at the start, was watching as the guards entered the building but now turns to you with a smile.<br\><br\>\
		“Ah, it’s you again. Great to see you, I was hoping you’d come by before you left.”<br\><br\>\
		He gestures towards the door of the jail block.<br\><br\>\
		“It’s certainly a nice change to be dealing with actual criminals now instead of complaints about those damned nightmares. Good thing you did, it won’t be forgotten in a hurry i’ll tell you that”",
		choices:[
			{
				text:'Talk to Mera',
				index:37
			},
			{
				text:'Talk to the Blacksmith',
				index:38
			},
			{
				text:'Talk to the druid woman',
				index:39
			}
		]
	},
]
