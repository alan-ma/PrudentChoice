var ids = 2;
var content = [
	{
		company: "Google",
		source: "Quora",
		photo: "google-glassdoor.png",
		text: "Google has been recognized as one of the most desirable workplaces in the world — from employee benefits to lots of time to work on side projects, the workplace environment is represented in a glorious light by the media. However, after reading through many posts written by both current and past “Googlers,” the shine of the corporation has dulled. Before going into some of the major negatives in the Google workplace, a general review of the advantages should be looked into first. The luxurious workplace is one of the first things that the public imagines when someone mentions “Google.” This is true — the open floor concept includes themed sections that show the imagination of Google’s designers. These include colourful decorations, comfy seats, and an overall feeling of play rather than work. Themes range from designs inspired by nature, with picnic tables, all the way to egg-shaped workrooms. Slides sit beside staircases, and bikes are available for employees to use. The food provided by the company is cooked by professional chefs, allowing Google’s employees to feast on scrumptious eats while working on ingenious products. The gym gives facilities for workers to exercise, shower, and live a healthier life. There are even barbers available for haircuts right beside the workplace. In essence, Googlers could all but live at work — some actually have! Another amazing benefit is the insurance that Google provides for its employees as well as their families. If, for some reason, a current Google employee dies, the company will provide half of the employee’s salary to the spouse for the next 10 years. “Baby bonding bucks” is also given to new parents — dads can take 6 weeks of paid leave, while moms can take up to 18 weeks of paid leave to take care of their new child. All in all, these benefits sound like an amazing deal of employees, and the company seems to be a dream job for any aspiring individual. However, there is a method to all this madness. These benefits and capital invested in the workplace environment are all in order to increase employee productivity. There’s no such thing as a free lunch — these benefits that Google provides for its employees are all in order to make employees blur the lines between work and life; if employees can work while eating lunch, exercising, and even showering, then the company gets more value out of the worker. One point that many ex-Googlers bring up is the company politics. As with any large corporation, management and competition within the business start to become worse and worse. Especially in a company like Google, where there are many, many intellectuals competing for the same resources (such as higher-tier positions and promotions), struggling to overcome peers can become highly stressful and demotivating. Overall, even though Google tries to maximize its employee output by spending capital on the workplace environment and other benefits, other factors such as company politics may get in the way."
	},
	{
		company: "Amazon",
		source: "Glassdoor",
		photo: "amazon-glassdoor.png",
		text: "Amazon, by contrast, has one of the worst work environments in the technology industry. They actively push the limits of what is ethical and allowed; and “nearly every person I worked with, I saw cry at their desk”. Bob Olson (former Books marketing director). The work environment is notoriously toxic; they are constantly encouraged to tear apart each other’s ideas, toil late (often receiving emails after midnight), and held to “unreasonable high” standards. Furthermore, toxicity is increased when employees frequently sabotage each other by submitting secret feedback to their bosses. Due to Amazon’s incredibly toxic work environment, it is no wonder that they have one of the highest turnover rates. From the Fortune 500, Amazon has the second highest turnover rate with most employees lasting only 9 months. So, why does Amazon create such horrifying work environments for their people? Due to them being in the technology industry, there is no scarcity in qualified software engineers and developers looking for jobs. Since there are limited positions in the other major companies, such as Google, Facebook and apple, Amazon is free to treat employees however they want. Their high turnover rate does not influence overall company performance because of the large workforce that they can take advantage of."
	},
	{
		company: "Microsoft",
		source: "Glassdoor",
		photo: "microsoft-glassdoor.png",
		text: ""
	},
	{
		company: "Apple",
		source: "Glassdoor",
		photo: "apple-glassdoor.png",
		text: ""
	},
	{
		company: "McDonald's",
		source: "Glassdoor",
		photo: "mcdonalds-glassdoor.png",
		text: ""
	},
	{
		company: "Starbucks",
		source: "Glassdoor",
		photo: "starbucks-glassdoor.png",
		text: ""
	},
	{
		company: "Sears",
		source: "Glassdoor",
		photo: "sears-glassdoor.png",
		text: ""
	}
];

function load() {
	$('.nav').append('<h4 data-link="#0" id="topNav">Prudent Choice</h4>');
	$('.nav').append('<h4 data-link="#1">Abstract</h4>');
	$('.nav').append('<h4 data-link="#2">Companies</h4>');
	for (i=0; i<content.length; i++) {
		ids += 1;
		$('.content').append('<h5 id="'+ids.toString()+'">'+content[i].company+'</h5>');
		$('.content').append('<span><img class="icon" src="img/' + content[i].source + '.jpg" alt="icon"><h6>Source: ' + content[i].source + '</h6></span>');
		$('.content').append('<img class="glassdoor" src="img/'+content[i].photo+'" alt="glassdoor">');
		$('.content').append('<p>'+content[i].text+'</p>');
		$('.nav').append('<h4 data-link="#'+ids.toString()+'">'+content[i].company+'—'+content[i].source+'</h4>');
	}
	ids += 1;
	$('.nav').append('<h4 data-link="#2">Findings</h4>');
	$('.content').append('<h5 id="'+ids.toString()+'">Findings</h5>');
	$('.content').append('<p>Businesses often take many aspects into account when determining business behaviours. There are two significant types of business models that most of the companies here follow:<br>They create an overwhelmingly positive work environment, to support employees and increase their productivity.<br>They create an overwhelmingly negative work environment, and push their employees to the limit and suck out every last drop of productivity.<br>For business models that follow the former model (like Google, Microsoft and Apple), businesses choose to give employees numerous benefits to increase their productivity. For companies like google, the marginal cost of free food is significantly lower than the marginal cost of giving them a lunch break; providing free food costs only $10, while each hour taken on break costs the company $100. A lot of inconsistencies in management and human resources create a lacking work environment for other companies, resulting in a less desirable scenario of resouce utilization.</p>');	
}

function nav() {
	$('.nav h4').click(function() {
		var link = $(this).attr('data-link');
		$('html,body').animate({
		   scrollTop: $(link).offset().top - 80
		});
	})
}

$(document).ready(function() {
	load();
	nav();
	$('.header h1').click(function() {
		$('html,body').animate({
		   scrollTop: 0
		});
	});
	$('#topNav').click(function() {
		$('html,body').animate({
		   scrollTop: 0
		});
	});
})