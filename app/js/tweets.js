var twitterConfig = {
  'profile': {'screenName': 'mallummx'},
  'domId': 'tweet-list',
  'maxTweets': 5,
  'enableLinks': true,
  'showUser': true,
  'showTime': true,
  'showImages': false,
  'showRetweet': false,
  'lang': 'en',
  'customCallback': tweetHandler
};

function tweetHandler(tweets) {
  var tweetsOutput = '<ul class="tweets">';
  for(var i = 0; i < tweets.length; i++) {
    tweetsOutput += '<li>' + tweets[i] + '</li>';
  }
  tweetsOutput += '</ul>';

  $('#tweet-list').html(tweetsOutput);
}

twitterFetcher.fetch(twitterConfig);