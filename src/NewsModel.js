(function(exports) {
  function NewsModel() {
    this.newsData = ""
  }

  NewsModel.prototype = {
    saveNewsArticles: function(json) {
      this.newsData = json
    },
  };


exports.NewsModel = NewsModel;
})(this);
