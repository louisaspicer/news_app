// window.onload = function() {

  window.addEventListener("load", function() {
    var newsHeadlines = new NewsHeadlinesModel();

    console.log(newsHeadlines);
    newsHeadlines.getTopHeadlinesIds();
    assert.isTrue(newsHeadlines.headlinesIds.length === 10, "Returns the url id's for the top 10 headlines");
  }, false);

// };
