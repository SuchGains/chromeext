function getStackSearch(searchTerm, callback, errorCallback) {
  var searchUrl = 'https://api.stackexchange.com/docs/search'+ '/2.2/search?order=desc&sort=activity&intitle=' + searchTerm + '&site=stackoverflow';
  $.get
}