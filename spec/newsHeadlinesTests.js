// window.onload = function() {
var newsHeadlines = new NewsHeadlinesModel();

  (function getsHeadlinesIdFromApi() {
    console.log(newsHeadlines.headlinesIds);
    newsHeadlines.getTopHeadlinesIds();
    assert.isTrue(newsHeadlines.headlinesIds.length === 10, "Returns the url id's for the top 10 headlines");
  })();

// };
