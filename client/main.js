/**
* Client side JS
*/

/**
* Data - hard-coded for now
*/
var gameData = [
	{
		"_id": 1,
		"title": "Slide 1 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam, enim voluptatem facilis sint, quae esse laborum quisquam, eaque molestiae sapiente. Eius magnam iure vero suscipit vitae quis necessitatibus odio?"
	},
	{
		"_id": 2,
		"title": "Slide 2 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam pariatur possimus perferendis. Commodi blanditiis delectus odit consequuntur ipsam, sed quod inventore magnam optio eligendi qui voluptatibus voluptatem pariatur tempore odio."
	},
	{
		"_id": 3,
		"title": "Slide 3 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea ex at mollitia, neque aspernatur alias quia tenetur cum iste voluptates necessitatibus perferendis aliquid accusamus quas in tempora consequuntur eveniet!"
	},
	{
		"_id": 4,
		"title": "Slide 4 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam, enim voluptatem facilis sint, quae esse laborum quisquam, eaque molestiae sapiente. Eius magnam iure vero suscipit vitae quis necessitatibus odio?"
	},
	{
		"_id": 5,
		"title": "Slide 5 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam pariatur possimus perferendis. Commodi blanditiis delectus odit consequuntur ipsam, sed quod inventore magnam optio eligendi qui voluptatibus voluptatem pariatur tempore odio."
	},
	{
		"_id": 6,
		"title": "Slide 6 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea ex at mollitia, neque aspernatur alias quia tenetur cum iste voluptates necessitatibus perferendis aliquid accusamus quas in tempora consequuntur eveniet!"
	},
	{
		"_id": 7,
		"title": "Slide 7 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam, enim voluptatem facilis sint, quae esse laborum quisquam, eaque molestiae sapiente. Eius magnam iure vero suscipit vitae quis necessitatibus odio?"
	},
	{
		"_id": 8,
		"title": "Slide 8 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam pariatur possimus perferendis. Commodi blanditiis delectus odit consequuntur ipsam, sed quod inventore magnam optio eligendi qui voluptatibus voluptatem pariatur tempore odio."
	},
	{
		"_id": 9,
		"title": "Slide 9 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea ex at mollitia, neque aspernatur alias quia tenetur cum iste voluptates necessitatibus perferendis aliquid accusamus quas in tempora consequuntur eveniet!"
	},
	{
		"_id": 10,
		"title": "Slide 10 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam, enim voluptatem facilis sint, quae esse laborum quisquam, eaque molestiae sapiente. Eius magnam iure vero suscipit vitae quis necessitatibus odio?"
	},
	{
		"_id": 11,
		"title": "Slide 11 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam pariatur possimus perferendis. Commodi blanditiis delectus odit consequuntur ipsam, sed quod inventore magnam optio eligendi qui voluptatibus voluptatem pariatur tempore odio."
	},
	{
		"_id": 12,
		"title": "Slide 12 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea ex at mollitia, neque aspernatur alias quia tenetur cum iste voluptates necessitatibus perferendis aliquid accusamus quas in tempora consequuntur eveniet!"
	},
	{
		"_id": 13,
		"title": "Slide 13 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veniam, enim voluptatem facilis sint, quae esse laborum quisquam, eaque molestiae sapiente. Eius magnam iure vero suscipit vitae quis necessitatibus odio?"
	},
	{
		"_id": 14,
		"title": "Slide 14 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam pariatur possimus perferendis. Commodi blanditiis delectus odit consequuntur ipsam, sed quod inventore magnam optio eligendi qui voluptatibus voluptatem pariatur tempore odio."
	},
	{
		"_id": 15,
		"title": "Slide 15 one Title",
		"summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea ex at mollitia, neque aspernatur alias quia tenetur cum iste voluptates necessitatibus perferendis aliquid accusamus quas in tempora consequuntur eveniet!"
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
* Body events
*/
Template.body.events({
	'click .game': function () {
		bootbox.dialog({
			message: '<div id="dialog_body"></div>'
		});

		Blaze.renderWithData(Template.gameDialog, this, $("#dialog_body")[0]);
	}
});


/**
* On DOM ready
*/
jQuery(function($) {
	/**
	* Swiper
	*/
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerColumn: 3,
	});

	/**
	* Menu
	*/
	$('.menu-toggle').on('click', function() {
		$('.nav-col').toggleClass('nav-open');
	});
});
