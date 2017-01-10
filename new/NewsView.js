(function(exports) {
  function NewsView() {

  }

  NewsView.prototype = {
    showLinksOnPage: function(newsData) {
      var self = this;
      var length = newsData.length;

      for (var index = 0; index < length; index++) {
        var headlineText = newsData[index].fields.headline;
        var image = newsData[index].fields.thumbnail;
        var articlesHtml = "<li><a class='link' id='"+index+"' href='#"+index+"'>"+headlineText+ "</li></a><img src='" + image + "'><br><br>";
        document.getElementById("headlines").innerHTML += articlesHtml;
      }
    },
  };


exports.NewsView = NewsView;
})(this);
