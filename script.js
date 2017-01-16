var ids = 2;
var content = [
	{
		company: "Company 1",
		source: "Quora",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim sagittis lectus, et eleifend nunc maximus quis. In eget volutpat libero, ac lacinia mauris. Ut et consectetur mi. Nam lorem arcu, rhoncus in vestibulum ut, consectetur at libero. Pellentesque mollis diam lobortis justo gravida, iaculis maximus nisi tempus. Quisque luctus iaculis augue, sit amet rhoncus tortor accumsan ut. Nam pellentesque aliquet nisl rhoncus suscipit. Fusce sed pulvinar lacus, sit amet mollis urna. Curabitur vitae dolor scelerisque, lobortis leo in, porta sapien. Integer malesuada tincidunt vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget mattis est, et fermentum nisi. Donec aliquam, turpis quis mattis bibendum, lectus leo placerat orci, suscipit convallis lectus magna et libero. Aliquam quis orci nisi. Duis malesuada eleifend ultrices. Curabitur gravida euismod congue. Donec vulputate, sem in scelerisque efficitur, eros risus interdum neque, sit amet pretium sem nunc sed magna. Duis felis orci, viverra ut metus nec, tempus fringilla augue. Nullam commodo nisl in leo convallis rutrum."
	},
	{
		company: "Company 2",
		source: "Glassdoor",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim sagittis lectus, et eleifend nunc maximus quis. In eget volutpat libero, ac lacinia mauris. Ut et consectetur mi. Nam lorem arcu, rhoncus in vestibulum ut, consectetur at libero. Pellentesque mollis diam lobortis justo gravida, iaculis maximus nisi tempus. Quisque luctus iaculis augue, sit amet rhoncus tortor accumsan ut. Nam pellentesque aliquet nisl rhoncus suscipit. Fusce sed pulvinar lacus, sit amet mollis urna. Curabitur vitae dolor scelerisque, lobortis leo in, porta sapien. Integer malesuada tincidunt vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget mattis est, et fermentum nisi. Donec aliquam, turpis quis mattis bibendum, lectus leo placerat orci, suscipit convallis lectus magna et libero. Aliquam quis orci nisi. Duis malesuada eleifend ultrices. Curabitur gravida euismod congue. Donec vulputate, sem in scelerisque efficitur, eros risus interdum neque, sit amet pretium sem nunc sed magna. Duis felis orci, viverra ut metus nec, tempus fringilla augue. Nullam commodo nisl in leo convallis rutrum."
	}
];

function load() {
	$('.nav').append('<h4 data-link="#0">Prudent Choice</h4>');
	$('.nav').append('<h4 data-link="#1">Abstract</h4>');
	$('.nav').append('<h4 data-link="#2">Companies</h4>');
	for (i=0; i<content.length; i++) {
		ids += 1;
		$('.content').append('<h5 id="'+ids.toString()+'">'+content[i].company+'</h5>');
		$('.content').append('<span><img class="icon" src="img/' + content[i].source + '.jpg" alt="icon"><h6>Source: ' + content[i].source + '</h6></span>');
		$('.content').append('<p>'+content[i].text+'</p>');
		$('.nav').append('<h4 data-link="#'+ids.toString()+'">'+content[i].company+'—'+content[i].source+'</h4>');
	}
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
	})
})