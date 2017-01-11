// window.onload = function() {
(function saveDataToAttribute() {
  var newsHeadlines = new NewsModel();

  newsHeadlines.saveNewsArticles("json data from API");
  assert.isTrue(newsHeadlines.newsData = "json data from API", "saves data to model attribute");
})();

// };
