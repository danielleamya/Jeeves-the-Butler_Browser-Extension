var yourTea = [
	"http://cdn2.stylecraze.com/wp-content/uploads/2013/12/Method-5-Oolong-Tea-Green-Tea.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tea_leaves_steeping_in_a_zhong_%C4%8Daj_05.jpg/900px-Tea_leaves_steeping_in_a_zhong_%C4%8Daj_05.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nice_Cup_of_Tea.jpg/440px-Nice_Cup_of_Tea.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/350px-Masala_Chai.JPG",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Turkish_tea2.jpg/350px-Turkish_tea2.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/350px-Iced_Tea_from_flickr.jpg",
	"http://www.enspiritwellness.com/wp-content/uploads/2012/08/Services_Photos_NS_new-700x466.jpg",
	"http://s3.india.com/wp-content/uploads/2015/01/herbal-tea.jpg",
	"http://www.youne.com/wp-content/uploads/2014/01/nettle-tea.jpg",
	"http://www.turkishbazaar.ca/wp-content/uploads/2013/12/dogadan-turkish-herbal-linden-tea-bitkisel-ihlamur-cayi-toronto-canada-united-states-montreal-ottowa-quebec-laval-edmonton-vancouver-halifax-hamilton-niagara-new-york-opt.jpg",
	"https://lekuva.net/wp-content/uploads/2016/05/nervi-bilki.jpg?x49769",
	"https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/144/193/472407994.jpg",
	"http://www.arabamerica.com/wp-content/uploads/2017/02/1-12.jpg",
	"http://ak0.picdn.net/shutterstock/videos/2429090/thumb/1.jpg",
	"http://static1.squarespace.com/static/5790fae9b8a79bc462954d03/57f53f68176dc4e854dd8679/57f540a3176dc4e854dda63d/1475690659360/traditional-medicinals-tea-600x400.jpg?format=original",
	"http://tong.visitkorea.or.kr/cms/resource/81/1945681_image2_1.JPG",
	"http://i2.wp.com/www.theblurrylime.com/wp-content/uploads/2016/04/IMG_7620.jpg?resize=800%2C833",
	"http://www.jornalahora.com.br/wp-content/uploads/2017/04/suco-de-guaran%C3%A1-2-780x480.jpg",
	"http://tong.visitkorea.or.kr/cms/resource/85/1945685_image2_1.JPG",
	"https://cdn.notonthehighstreet.com/fs/bf/63/8d3b-4f0b-429b-82c4-682b17731513/original_masala-chai-tea-in-cork-bottle-and-indian-chai-cup.jpg",
	"http://servingjoy.com/wp-content/uploads/2014/12/Blooming-flower-tea-in-glass-teapot.jpg",
	"https://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/23/2015/11/13.jpg",
	"https://fthmb.tqn.com/JhAQP_-AHwxi6sjUudTZ_LmVBAE=/960x0/filters:no_upscale()/Stocksy_txpf39ce1c6mXn100_Medium_1515144-5a53ebee4e46ba00364c4c4a.jpg",
	"http://news.psu.edu/sites/default/files/styles/threshold-992/public/2green%20tea%20iStock%20Spiderplay.jpg?itok=yZp4Ohyb",
	"http://d6h7vs5ykbiug.cloudfront.net/wp-content/uploads/2013/04/Matcha-Green-Tea-Latte-Recipe-2.jpg",
	"https://omnivorescookbook.com/wp-content/uploads/2017/06/1705_Bubble-Tea_004.jpg",
	"https://parade.com/wp-content/uploads/2017/01/sherlock-tea-cookies-ftr.jpg",
	"https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.128.1067.1067/24327807_186072735277799_8312437347710926848_n.jpg"
]


// sit in the background, waiting for the extension button to be clicked...
chrome.browserAction.onClicked.addListener( function(tab) {

	// ...when it's clicked, run the extension on the current tab
	chrome.tabs.executeScript( tab.id, {file: "jeeves_extension.js"} );

	var i = Math.floor((Math.random() * yourTea.length));
	chrome.tabs.create({url: yourTea[i]}, callback);

	function callback(data) {
		console.log(data);
	}

});



// Creates the notifications to be displayed in the corner of the Chrome window
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type === "shownotification"){
        chrome.notifications.create(request.opt);
    }

});


wtfff;

