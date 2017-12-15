Project 1 Idea/presentation setup:

I would like to create a clone of a mini game found in The Simpson Tapped Out:

[Reference Picture](https://github.com/trumpetcoder/Project-1/blob/master/IMG_0019.png)

##Reference Image in Assets Folder
[Trello Board](https://trello.com/b/ZJJ9R1HC/project-1-board)

![Whiteboard MockFlow](https://github.com/trumpetcoder/Project-1/blob/master/Screen%20Shot%202017-12-11%20at%202.54.38%20PM.png)



Title: Treasure Hunter 
￼
Game description:
	In this mini game, the user must pick a square to reveal what’s underneath. Hidden under one square is a pile of gems. The user gets a set number of guesses. 

Game functionality:
	By implementing the use of click events (JS) tied to the Trackpad, the user can choose a square and reveal what is underneath. If the user does not guess the right 	square they can try a new square until either the hidden object is found or their available clicks have been used up. The program through scripting will generate a random square to place the object to keep the user guessing each time the game is played. 
	
	To create two player functionality the winner is declared by comparing the two players and their click count. The player with the least amount of clicks will be the winner. A message will alert which player has won. If neither player guesses the square by the end, then a message will be prompted declaring no winner. 
	
	The game will have an available reset to play again. Local storage will keep track of the outcomes: player 1 wins, player 2 wins, and ties. 

	The appearance of the game in simple terms will be a single page that on load will show a game board comprised of squares (number to be determined), a set of instructions on how to play the game, a button for a reset, and how the winner is calculated. 

File setup:
	The game will utilize 3 main files: index.html (combined landing and play page), style.css (used to style the index.html), and an app.js (used to write functionality for the game). These files will be linked together following SoC concept. 

	In addition to these files, there will also be a readme file that contains a detailed description of functionality, logic, code examples explained, game play instructions, and overall thought process behind the games creation. Also included if needed will be an assets folder containing images and other usable resources.

Existing libraries and frameworks to be used:
	The landing/game page will be constructed using the Bootstrap framework. This allows easy setup and responsive 	design.
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	I will be using jQuery in the app.js for functionality:
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></	script>

Higher order to lower order thought process. If any confusion, reference docs or Google. Assume best practice procedures for all:

	Create repository in gitHub 
	Create working directory on local machine
	Initialize the local directory on local machine
	Add first commit to check that all is ready to go
	Create gh-pages branch 
	Push to gh-pages
	Check to see everything is working

	Create important files (index.html, style.css, app.js, etc..)
	Check linking on all pages(console.log, alert, background property, etc)

	Create landing/game in simplest terms(One defined square)
	Setup functionality on the square(using alerts, console.logs to work out functionality). Functionality includes 		event listener, change of square to reveal hidden object, inserting object, etc.
	Work out randomness of the object to be inserted
	Work out player logic
	Work out click counting and click parameters
	Work out declaring winner
	Work out reset 
	Work out local storage and tracking of results
	Work out presentation of declaring result

	Take the above and scale it up to include multiple squares with only 1 having the hidden object
	
	Add clearly defined instructions on game play, results, etc
	Add overall styling to page to increase the appeal for the user(using graphics, pics, etc…)

	Push all content at relevant points to Repo and gh-pages so that others can enjoy and view
	
	Growth Opportunities:
	Have three levels of play that decreases total number of clicks available
	Have three levels that increases the total number of squares on the page
	Use indicators to help the user find the hidden gem
	Add awesome graphics that utilize depth as seen in the TSTO game i'm cloning
	On finding gem have board explode then reset
	Alert with a fancy graphic utilizing js
	

	Sit back and bask in the glory of having finished something I didn’t think I could accomplish a month ago!
	
![Inspiration](https://github.com/trumpetcoder/Project-1/blob/master/Screen%20Shot%202017-12-10%20at%2010.23.39%20PM.png)
	
	

Thanks for all you do as instructors to guide me through this journey.
￼

Project 1 submission for GA instructors wdi6 2017 
