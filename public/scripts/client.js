/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweetData) {

    const $tweet = $(
        `<article class="tweet">
        <header>
        <div class="div1">
          <div class="avatars">
          <img src="${tweetData["user"]["avatars"]}">
          </div>
          <span>${tweetData["user"]["name"]}</span>
        </div>
        <span>${tweetData["user"]["handle"]}</span>
      </header>
      <div>
        <span>${tweetData["content"]["text"]}</span>
      </div>
      <footer>
        <span>${timeago.format(`${tweetData["created_at"]}`)}</span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`);
    
    return $tweet;
    
}

function renderTweets(tweets) {

    const tweetsContainer = $('#tweets-container');
    tweetsContainer.empty();

    for (const tweetData of tweets) {

        const tweet = createTweetElement(tweetData);
        $('#tweets-container').append(tweet); 

    }

}

function fetchTweets() {

    $.ajax({
        url: '/tweets',
        method: 'GET',
        dataType: 'json'
    }).then(tweets => {

        renderTweets(tweets);

    }).catch(err => {

        console.log(err);

    });

}

  $(() => {


    fetchTweets();

    $( "#form" ).on("submit", function(event) {

        event.preventDefault();
    
        const serialized = $(event.target).serialize();
        const tweet = serialized.substr(5);

        if (tweet === '' || tweet === null) {

            return alert('Tweet content can not be empty.')

        } else if (tweet.length > 140) {

            return alert('Tweet content can not be more than 140 characters.')

        }

        $('#tweet-text').val('');
        $('#counter').val(140);
    
        $.post('/tweets', serialized)
        .then(fetchTweets())
        .catch(err => {
            console.log(err);
        });
    
      });

  });