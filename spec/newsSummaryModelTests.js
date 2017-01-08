newsHeadlinesDouble = {
  headlinesIds: ["football/live/2017/jan/08/cardiff-city-v-fulham-fa-cup-third-round-live"]
};

var newsSummaryModel = new NewsSummaryModel(newsHeadlinesDouble);

  (function getSummaryFromApi() {

    var indexForHeadlines = 0;
    var summary = "13 second-tier teams have already made it into the hat for Monday’s fourth-round draw; one of these two (or, if it’s a draw, both) are about to join them.";
    assert.isTrue(newsSummaryModel.getSummaryFromApi(indexForHeadlines) === summary, "Returns summary");

  })();
