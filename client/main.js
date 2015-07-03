/**
* Client side JS
*/

/**
* Data - hard-coded for now
*/
var gameData = [
	{
		"_id": 1,
		"title": "No Man Sky",
		"images": {
			"slide": "/slides/1.jpg",
			"logo": "/logos/1.png"
		},
		"summary": "Whether a distant mountain or a planet hanging low on the horizon, you can go there. You can fly seamlessly from the surface of a planet to another, and every star in the sky is a sun that you can visit. Where you'll go and how fast you'll make your way through this universe is up to you. It's yours for the taking.",
		"most_positive_reviews": [
			"No words to describe it. Poetry. And from a four-person indie studio too. This has rocketed straight to the very top of my Most Wanted list.- Rock Paper Shotgun",
			"No Man’s Sky’s universe isn’t infinite, but its vast and ambitious and filled with things to do. It also happens to be very pretty indeed- trustedreviews"
		],
		"most_critical_reviews": "N/A",
		"info": "No Man's Sky is an upcoming science fiction adventure video game developed and published by British studio Hello Games.",
		"release_date": "N/A",
		"designer": "Gareth Bourn",
		"awards": "N/A",
		"platforms": ["PlayStation 4", "PC"],
		"clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nmwG6Sj1Yfg\" frameborder=\"0\" allowfullscreen></iframe>"
	},
	{
		"_id": 2,
		"title": "Minecraft",
		"images": {
			"slide": "/slides/2.png",
			"logo": "/logos/2.png"
		},
		"summary": "Minecraft is a game about breaking and placing blocks. At first, people built structures to protect against nocturnal monsters, but as the game grew players worked together to create wonderful, imaginative things. It can also be about adventuring with friends or watching the sun rise over a blocky ocean. It’s pretty. Brave players battle terrible things in The Nether, which is more scary than pretty. You can also visit a land of mushrooms if it sounds more like your cup of tea.",
		"most_positive_reviews": [
			"Meanwhile, Minecraft, with all its flaws and quirks, has already joined Super Mario Brothers, Wolfenstein 3D, and Tetris in the pantheon of games that prototyped an entire genre.- 1UP",
			"Minecraft is a masterpiece, a seminal title which will be played and studied for years."
		],
		"most_critical_reviews": [
			"Minecraft is just a little novelty game, if you can get past the sickeningly horrid graphics, which I couldn’t. I have NEVER hated a game for it’s graphics before, but this... this is just wrong. I mean for starters you can’t give this game a perfect score when it has 70’s graphics yet it came out last year.",
			"A mediocre sandbox game with alot of potential that it never tried to live up to. The game lacks content instead giving you a bland sandbox to play in with nothing to do in the long term except play with lego blocks and find diamonds."
		],
		"info": "Minecraft is a sandbox independent video game originally created by Swedish programmer Markus “Notch” Persson and later developed and published by the Swedish company Mojang.",
		"release_date": "May 17, 2009",
		"designer": ["Markus Persson", "Jens Bergensten"],
		"awards": ["Kids’ Choice Award", "Best Downloadable Game", "Rock, Paper, Shotgun Game of the year", "Best Debut Game and Most Innovative game."],
		"platforms": ["Android", "iOS", "PlayStation 3", "PlayStation 4", "PlayStation Vita", "Xbox 360", "Xbox One", "PC", "Mac", "Linux"],
		 "clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MmB9b5njVbA\" frameborder=\"0\" allowfullscreen></iframe>"
	},
	{
		"_id": 3,
		"title": "Bioshock Infinite",
		"images": {
			"slide": "/slides/3.jpg",
			"logo": "/logos/3.png"
		},
		"summary": "Set in 1912, players assume the role of former Pinkerton agent Booker DeWitt, sent to the flying city of Columbia on a rescue mission. His target? Elizabeth, imprisoned since childhood. During their daring escape, Booker and Elizabeth form a powerful bond -- one that lets Booker augment his own abilities with her world-altering control over the environment. Together, they fight from high-speed Sky-Lines, in the streets and houses of Columbia, on giant zeppelins, and in the clouds, all while learning to harness an expanding arsenal of weapons and abilities and immersing players in a story that is not only steeped in profound thrills and surprises",
		"most_positive_reviews": [
			"Dealing with themes like religion, racism, and xenophobia, Columbia is a richer and more nuanced setting than even Rapture, and the unveiling of the city’s culture is masterfully executed.",
			"The PC version, as run on mid-range hardware, makes no such visual compromises, with gorgeous high-resolution textures, detailed faces, and smooth performance...A brilliant shooter that nudges the entire genre forward with innovations in both storytelling and gameplay.",
		],
		"most_critical_reviews": [
			"Mid level combat ,mid level scenario,completely uninteresting rail combat,vigors.A modern classic of modern big game industry's click and watch the movie, style game.",
			"They've invested a whooping $100 million in 'marketing', look it up. This is written off against tax. Nevermind the product, we have to keep the ball rolling. Because from an artistical and a technical point of view, this is nothing but child-oriented junk."
		],
		"Info": "BioShock Infinite is a first-person shooter video game developed by Irrational Games and published by 2K Games. ",
		"release_date": "March 26, 2013",
		"designer": ["2K Games"],
		"awards": ["Best Song", "Character of the year", "Best shooter", "Best original score."],
		"platforms": [ "Playstation 3", "PC", "Xbox 360", "Mac", "Linux"],
		"clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/J_gEzOZKyE4\" frameborder=\"0\" allowfullscreen></iframe>"
	},
	{
		"_id": 4,
		"title": "Just Cause 3",
		"images": {
			"slide": "/slides/4.png",
			"logo": "/logos/4.png"
		},
		"summary": "Set in the sun-drenched Mediterranean island republic of Medici, a land crumbling under the ruthless rule of General Di Ravello, you take control of series’ hero Rico Rodriguez, a man on a mission to liberate his homeland and the people of Medici...by any means necessary. With over 400 square miles of complete freedom from sky to seabed and a huge arsenal of weaponry, gadgets and vehicles, prepare to unleash chaos in the most creative and explosive ways you can imagine.",
		"most_positive_reviews": [
			"Just Cause 3 sets a new standard in the sandbox genre, and will be difficult to top due to its incredible graphics, expansive world, and extremely fun gameplay.- My Gamer",
			"I haven't had this much fun with an open-world game in years. Just Cause 3 is over-the-top and insanely fun. There are some issues in the game's presentation and the checkpoint system is far from perfect, but Just Cause 3 is otherwise a must-play for adrenaline junkies.- IGN"
		],
		"most_critical_reviews": [
			"Played for 10 minutes then deleted. A game obviously designed for children, I don't understand why all forms of entertainment are being aimed more and more at children.",
			"It felt like a unpolished product, story/script was cheesy, including awful voice acting and hideous Lip syncing. Gameplay was too easy and over the top, mostly because of stupid AI. All weapons felt flat, no recoil, nothing. Physics overall was terrible, especially car handling. Even music was forgettable. The only thing I liked was the graphics and environment. Really nice colorful world. Too bad the gameplay couldn't match it."
		],
		"info": "Just Cause 3 is an upcoming open world action-adventure video game developed by Avalanche Studios and published by Square Enix.",
		"release_date": "N/A",
		"designer": "Francesco Antolini",
		"awards": "N/A",
		"platforms": ["PlayStation 4", "Xbox One", "PC"],
		 "clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-x1q7wY0koE\" frameborder=\"0\" allowfullscreen></iframe>"
	},
	{
		"_id": 5,
		"title": "Witcher 3",
		"images": {
			"slide": "/slides/5.jpg",
			"logo": "/logos/5.png"
		},
		"summary": "With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions.",
		"most_positive_reviews": [
			"Despite some evident flaws, The Witcher 3: Wild Hunt is a game you should be playing. It’s one of the few open-world RPG’s that manages to excel at not only giving you an expansive world to explore, but at also giving you plenty to do within that world.",
			"Perhaps The Witcher 3 could have done with another month or so of extra development to work out the kinks, but even without the extra time it’s an enormously impressive game that proves, in case there was any doubt, that gargantuan games don’t need to be stuffed with forgettable filler guff."
		],
		"most_critical_reviews": [
			"I couldn't get into the game. It is extremely boring and dull. The voice acting was nails on the chalkboard annoying. The combat is very simple and shallow. I had to get a refund and get myself something else.",
			"In over 20 years of gaming I've never suffered through worse movement controls. Turning is abysmal, and no amount of control tweaking has improved it at all. Its a real shame that everything aside from the story is utterly ruined by the fact you can't move correctly."
		],
		"info": "N/A",
		"release_date": "May 19, 2015",
		"designer": "CD Projekt RED",
		"awards": ["The Game Award for Most Anticipated Game", "Best role-playing game", "People's choice award and Most Wanted Award."],
		"platforms": ["PlayStation 4", "Xbox One", "Microsoft Windows"],
		"clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nYwe_WHARdc\" frameborder=\"0\" allowfullscreen></iframe>",
	},
	{
		"_id": 6,
		"title": "Grand theft auto V",
		"images": {
			"slide": "/slides/6.jpg",
			"logo": "/logos/6.png"
		},
		"summary": "The biggest, most dynamic and most diverse open world ever created, Grand Theft Auto V blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.",
		"most_positive_reviews": [
			"The already featured-packed game now comes with further improved visuals, a powerful editor and new meaning to the first person mode thanks to the mouse/keyboard combo. Excellence at its finest.",
			"GTA V's PC version is the true mother of all versions of the epic crime adventure. Great optimization and controls adjusted for PC gameplay show that quality conversions still have not died."
		],
		"most_critical_reviews": [
			"Despite all these \"polishing\" and bunch of delays, all we got was a console ported version with no difference in graphics or gameplay. Yet it confuses me that GTA V has again failed to make its users understand what the hell was their delays for. Lots of bugs and issues, somewhat good but not expected from a should-have-taken-weeks-with-delays game. Overall I am damn disappointed.",
			"I'm an old gamer that loved the GTA series since the beginning, but we’ve all got to admit its decline: since San Andreas, Rockstar has been unable to make an entertaining game. This game becomes boring after a while, just like the previous one."
		],
		"info": "",
		"release_date": "September 17, 2013",
		"designer": "Rockstar Games, Rockstar North",
		"awards": ["Game of the year", "Best soundtrack", "Best british game", "Best multiplayer game", "best game design", "most anticipated game"],
		"platforms": ["PlayStation 4", "Playstation 3", "Xbox 360", "Xbox One", "PC"],
		 "clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qoytS3930aY\" frameborder=\"0\" allowfullscreen></iframe>",
	},
	{
		"_id": 7,
		"title": "Fez",
		"images": {
			"slide": "/slides/7.jpg",
			"logo": "/logos/7.png"
		},
		"summary": "In FEZ, you play as Gomez, who is a 2D creature living in a 2D world. Or is he? When the existence of a mysterious 3rd dimension is revealed to him, Gomez is sent out on a journey that will take him to the very end of time and space. Use your ability to navigate 3D structures from 4 distinct classic 2D perspectives. Explore a serene and beautiful open-ended world full of secrets, puzzles and hidden treasures. Unearth the mysteries of the past and discover the truth about reality and perception.",
		"most_positive_reviews": [
			"There’s a touch of brilliance to this game. You feel the incentive to play on, because solving a puzzle unlocks a new door and you enter into another uncharted and mysterious world. We love the music and the retro-style, pixelated art. Fez harks back to 2D classics, so if you’re anything like me, nostalgia should kick in almost instantly.",
			"It’s a charming, charismatic adventure that will leave you with a smile across your face for the duration of your play."
		],
		"most_critical_reviews": [
			"Fez is just another one of the many \"retro-style\" indie games that uses its graphics as an excuse to make the game seem more back-to-basics and stylized. It's already late to the hype, not to mention the style itself doesn't match with true retro platformers. The puzzles are boring and not challenging, and the music is flat.",
			"Continuous, slow paced hunt for events that make your world spin around. At least its got good visuals, okay audio, and a fair amount of content. Should there be something that just makes you push for that one next cube, I'd give it a lot more, but there simply isn't. To put it simply it's just a pile of hipster garbage"
		],
		"info": "N/A",
		"release_date": "April 13, 2012",
		"designer": "Phil Fish",
		"platforms": ["Xbox 360", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "Microsoft Windows","Linux", "Mac"],
		"awards": ["Nominee for VGX Award for Best Independent Game", "nominee for most innovative game"],
		 "clip": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/tfpKTclOnfI\" frameborder=\"0\" allowfullscreen></iframe>"
	},
	{
		"_id": 8,
		"title": "Assassins Creed Black Flag ",
		"images": {
			"slide": "/slides/8.jpg"
		}
	},
	{
		"_id": 9,
		"title": "Firewatch",
		"images": {
			"slide": "/slides/9.jpg"
		}
	},
	{
		"_id": 10,
		"title": "New Super Mario Bros.",
		"images": {
			"slide": "/slides/11.jpg"
		}
	},
	{
		"_id": 11,
		"title": "Fifa 15",
		"images": {
			"slide": "/slides/10.jpg"
		}
	},
	{
		"_id": 12,
		"title": "Terraria",
		"images": {
			"slide": "/slides/12.jpeg"
		}
	},
	{
		"_id": 13,
		"title": "Fallout 4",
		"images": {
			"slide": "/slides/13.png"
		}
	},
	{
		"_id": 14,
		"title": "Portal 2",
		"images": {
			"slide": "/slides/14.jpg"
		}
	},
	{
		"_id": 15,
		"title": "Half Life 2",
		"images": {
			"slide": "/slides/15.JPG"
		}
	}
];

/**
* Body healper
*/
Template.body.helpers({
	games: function () {
		return gameData;
	}
});

/**
* Game dialog helpers
*/
Template.gameDialog.helpers({
	joinArray: function (ary) {
		if( Object.prototype.toString.call( ary ) === '[object Array]' ) {
			return ary.join(', ');
		};

		return ary;
	}
});

/**
* Body events
*/
Template.body.events({
	'click .game': function () {
		bootbox.dialog({
			message: '<div id="dialog_body"></div>',
			onEscape: true,
			size: 'large',
			className: 'game-pop-up'
		});

		Blaze.renderWithData(Template.gameDialog, this, $("#dialog_body")[0]);
	}
});


/**
* On DOM ready
*/
jQuery(function($) {
	var tbs = {
		/*
			xs = < 768
			sm = >= 768 & < 992
			md = >= 992 & < 1200
			lg = >= 1200
		*/
		sm: 768,
		md: 992,
		lg: 1200
	};

	/**
	* Swiper
	*/
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		slidesPerColumn: 3
	});

	var swiperResize = function () {
		var w_width = $(window).width();

		if ( w_width >= tbs.lg ) {
			swiper.params.slidesPerView = 3;
			swiper.params.slidesPerColumn = 3;
		} else if ( w_width >= tbs.md && w_width < tbs.lg ) {
			swiper.params.slidesPerView = 2;
			swiper.params.slidesPerColumn = 3;
		} else if ( w_width >= tbs.sm && w_width < tbs.md ) {
			swiper.params.slidesPerView = 1;
			swiper.params.slidesPerColumn = 3;
		} else {
			swiper.params.slidesPerView = 1;
			swiper.params.slidesPerColumn = 2;
		};

		swiper.update();
	};

	swiperResize();

	$(window).on('resize', function() {
		swiperResize();
	});

	/**
	* Menu
	*/
	$('.menu-toggle').on('click', function() {
		$('.nav-col').toggleClass('nav-open');
	});
});
