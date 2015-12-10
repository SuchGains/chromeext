// console.log($);
// console.log(document);
$('#enter').on('click', function() {
  // var searchUrl = 'https://api.stackexchange.com/docs/search'+ '/2.2/search?order=desc&sort=activity&intitle=' + searchTerm + '&site=stackoverflow';
  // $.get()
  var userInput = $('#user').val();
  console.log(userInput);
  $.get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + userInput + '&site=stackoverflow', function(data) {
    var result = data.items;

    for (var i = 0; i < result.length; i++) {
      // console.log('this is a title', result[i]['title']);
      var eachStack = $('<div class="stack"></div>');

      var prettyify = document.createElement('table');
      prettyify.style.border = '1px solid black';
      $(prettyify).appendTo('body');

      $(eachStack).appendTo('table');

      var titles = $('<div>' + result[i]['title'] + '</div>');
      $(titles).appendTo(eachStack);

      var links = $('<a href=' + result[i]['link'] + '.html>' + result[i]['link'] + '</a>');
      $(links).appendTo(titles);

      var tags = $('<p>' + result[i]['tags'] + '</p>');
      $(tags).appendTo(titles);
    }
  });
  // console.log("you clicked");
  // alert('yay');

});

// function injectScript() {
$('.stack').each(function(i, element){
  var newData = $(this);
  console.log(newData);
  // var json = {
  //   url: newData.find('a').attr('href')
//   }
// });

  $(newData.find('a').attr('href')).on('click', function() {
    chrome.tabs.create({url : newData.find('a').attr('href') });
  });
});