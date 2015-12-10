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

      // add titles to the main div
      var titles = $('<div>' + result[i]['title'] + '</div>');
      $(titles).appendTo(eachStack);

      // changed the 'divs' to 'a href' since that's basically what tags links have
      var links = $('<a href=' + result[i]['link'] + '>' + result[i]['link'] + '</a>');
      console.log(links['0'].href);
      // links is a massive object after appending. so need to reduce it down to the actual link
      $(links).appendTo(titles).on('click', function(links) {
        console.log(links);
        chrome.tabs.create({ url : links['target'].href })
      });

      // add tags to titles
      var tags = $('<p>' + result[i]['tags'] + '</p>');
      $(tags).appendTo(titles);
    }
  });
  // console.log("you clicked");
  // alert('yay');

});

//*****The idea is to attach onclick functionality to the a tags (the links) so that a tab will be created when link is clicked*****
// var elements = document.getElementsByClassName('a');
// for(var i = 0, len = elements.length; i < len; i++) {
//     elements[i].onclick = function () {
//       chrome.tabs.create({ url : elements[i] })
//     }
// }