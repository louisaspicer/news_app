

(function(exports) {
  function NewsHeadlinesModel() {
    this.headlinesIds = [];
  }

  NewsHeadlinesModel.prototype = {

    getTopHeadlinesIds: function() {
      var myRequest = new XMLHttpRequest();
      var headlinesIds = this.headlinesIds;

      myRequest.onreadystatechange = function() {
        var json = myRequest.responseText;
        var obj = JSON.parse(json);

        if (myRequest.readyState === 4 && myRequest.status === 200) {
          var length = obj.response.results.length;
          for (var index = 0; index < length; index++) {
            headlinesIds.push(obj.response.results[index].id);
          }
        }
      };

      var headlines = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=headline?show-fields=body';
      myRequest.open('GET', headlines, true);
      myRequest.send(null);
  }


};

exports.NewsHeadlinesModel = NewsHeadlinesModel;
})(this);
