

(function(exports) {
  function NewsHeadlinesModel() {
    // this.headlinesIds = [];
    this.headlinesText = [];
    this.bodies = [];
    this.thumbnails = [];
  }

  NewsHeadlinesModel.prototype = {
    getHeadlinesData: function() {
      var myRequest = new XMLHttpRequest();
      var headlines = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&order-by=newest&q=headline';
      myRequest.open('GET', headlines, true);

      var headlinesText = this.headlinesText;
      var bodies = this.bodies;
      var thumbnails = this.thumbnails;

      myRequest.onreadystatechange = function() {
          if (myRequest.readyState === XMLHttpRequest.DONE && myRequest.status === 200) {
            var json = myRequest.responseText;
            var obj = JSON.parse(json);
            var length = obj.response.results.length;

            for (var index = 0; index < length; index++) {
              headlinesText.push(obj.response.results[index].webTitle);
              bodies.push(obj.response.results[index].fields.body);
              thumbnails.push(obj.response.results[index].fields.main);
            }
          }

      };

      myRequest.send();
    }

    // getTopHeadlinesIds: function() {
    //   var myRequest = new XMLHttpRequest();
    //   var headlines = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&order-by=newest&q=headline';
    //   myRequest.open('GET', headlines, true);
    //   var headlinesIds = this.headlinesIds;
    //
    //   myRequest.addEventListener('load', function() {
    //
    //     var json = myRequest.responseText;
    //     var obj = JSON.parse(json);
    //     console.log(obj);
    //
    //       if (myRequest.readyState === 4 && myRequest.status === 200) {
    //         var length = obj.response.results.length;
    //         for (var index = 0; index < length; index++) {
    //           headlinesIds.push(obj.response.results[index].id);
    //         }
    //       }
    //
    //   }, false);

      // myRequest.onreadystatechange = function() {
      //   var json = myRequest.responseText;
      //   var obj = JSON.parse(json);
      //
      //   if (myRequest.readyState === 4 && myRequest.status === 200) {
      //     var length = obj.response.results.length;
      //     for (var index = 0; index < length; index++) {
      //       headlinesIds.push(obj.response.results[index].id);
      //     }
      //   }
      // };

  //     myRequest.send();
  // },


};

exports.NewsHeadlinesModel = NewsHeadlinesModel;
})(this);
