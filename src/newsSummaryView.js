(function(exports) {
  function NewsSummaryView() {
    // this.newsHeadlines = newsHeadlinesModel;
    this.htmlString = "<ul>";
  }

  NewsSummaryView.prototype = {
    convertAllSummariesToHtmlString: function(newsSummaryModel) {
      var self = this
      // console.log(this.htmlString);
      // console.log(newsSummaryModel.newsHeadlineModel.headlinesIds);
      // console.log(newsSummaryModel.getSummaryFromApi(1));
      var length = newsSummaryModel.newsHeadlineModel.headlinesIds.length;
      for (var index = 0; index < length; index++) {
        newsSummaryModel.getSummaryFromApi(index);
        var summaryText = newsSummaryModel.summaries[index];
        self.htmlString += "<li><div>" + summaryText + "</div></li>";
        console.log(self.htmlString);
      }
      self.htmlString += "</ul>";
    },


    returnSummariesAsHtml: function() {
      return this.htmlString;
    }

  };

  exports.NewsSummaryView = NewsSummaryView;

})(this);
