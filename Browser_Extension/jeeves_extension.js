	/*

	Jeeves, the Cat Butler
	Danielle McPhatter | 2018 | Browser Extension Assignment 1

	This browser extension makes Jeeves, the Cat Butler, accessible on any website!
	When the extension icon is clicked, a notification pops up with super helpful
	advice from your trusty cat butler Jeeves as he serves you your afternoon tea~! :3

	To see full notification on Mac, you must disable native notifications 
	in Chrome, visit this URL to disable the option: 
	chrome://flags/#enable-native-notifications

	Jeeves's life advice and helper images are sourced from:
	https://www.boredpanda.com/shitty-life-pro-tips/

	Tea images derived from Google Images across a variety of websites.
	
	*/

	// This list contains all the possibilities for advice that Jeeves can give you
	var advice = [
	"Use a toilet seat to put your plate on while watching TV! :3",
	"Take a selfie through a tolier roll tube and pretend you're the moon! :3",
	"If your headphones are detangled, spray them with Johnson's No More Tangles! :3" , 
	"Cut your tennis balls in half to store two more balls in each can! :3",
	"Magnify your phone's screen by putting it in a glass of water! :3",
	"Keep cake moist by eating it all in one sitting! :3",
	"Don't buy new socks! Use a permanent marker instead! :3",
	"Use laptop chargers to heat up an afternoon snack up! :3",
	"If you see someone crying, ask if it is because of their haircut! :3",
	"Save time on your morning routine by adding toothpaste to your breakfast! :3",
	"Use your phone when you put too much water in your rice! :3",
	"Use me to clean your floors to save on expensive store-bought cleaners! :3",
	"Plug a surge protector into itself for infinite power! :3",
	"Subtract the tip from the total to eat for free for the rest of your life! :3",
	"Fight global warming by reversing your window A/C unit! :3",
	"Need to stay up late? Try swapping your contact solutions with coffee! :3",
	"Coworkers stealing your lunch? Secure your lunch with a padlock! :3",
	"Use earplugs in your nose to make it hard to breathe! :3",
	"Don't remove your contacts to clean them, spray your eyes with windex! :3",
	"Use a hair dryer to preheat a pizza if you don't have a microwave! :3",
	"Use knives to hang up posters without damaging anything! :3",
	"Combine bathroom breaks and lunch breaks to maximize time efficiency! :3",
	"Phone battery dead? Microwave it for two minutes to charge! :3",
	"Throw one bird at another bird really hard to save yourself a stone! :3",
	"Ensure your kids won't bother you by not having them in the first place! :3",
	"Drinking doesn't cause hangovers, so to avoid hangovers just never wake up! :3",
	"Save money on your Prime membership by changing colleges every year! :3",
	"Tape a vibrator to your toothbrush for a nifty electric toothbrush! :3"
	];

	// This list contains all the helper images that correspond with the advice
	var images = [
	"notification_images/01.jpg", "notification_images/02.jpg",
	"notification_images/03.jpg", "notification_images/04.jpg",
	"notification_images/05.jpg", "notification_images/06.jpg",
	"notification_images/07.jpg", "notification_images/08.jpg",
	"notification_images/09.jpg", "notification_images/10.jpg",
	"notification_images/11.jpg", "notification_images/12.jpg",
	"notification_images/13.jpg", "notification_images/14.jpg",
	"notification_images/15.jpg", "notification_images/16.jpg",
	"notification_images/17.jpg", "notification_images/18.jpg",
	"notification_images/19.jpg", "notification_images/20.jpg",
	"notification_images/21.jpg", "notification_images/22.jpg",
	"notification_images/23.jpg", "notification_images/24.jpg",
	"notification_images/25.jpg", "notification_images/26.jpg",
	"notification_images/27.jpg", "notification_images/28.jpg"
	]

	// Picks the index at random based on the length of the 'advice' list for choosing the advice and its image

	var index = Math.floor((Math.random() * advice.length));

	var chosen_text = advice[index];
	var chosen_img = images[index];

	
	// Information for the Rich Image Notification: 
	// Denotes type of rich notification (basic, list, image or progress), 
	// The title, message and image for the SUPER HELFPUL™ advice, 
	// And the icon for the notification

	var opt = {
		type: "image",
		title: "A Message with Your Tea, Master,",
		message: chosen_text,
		iconUrl: "jeeves.gif",
		imageUrl: chosen_img
		};


	// Sends information for the notification to the background.js script
	chrome.runtime.sendMessage({type: "shownotification", opt: opt}, function(){});



