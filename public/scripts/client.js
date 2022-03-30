/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweetData) {

    const $tweet = $(
        `<article class="tweet">
        <header>
        <div>
          <span>${tweetData["user"]["avatars"]}</span>
          <span>${tweetData["user"]["name"]}</span>
        </div>
        <span>${tweetData["user"]["handle"]}</span>
      </header>
      <div>
        <span>${tweetData["content"]["text"]}</span>
      </div>
      <footer>
        <span>${tweetData["created_at"]}</span>
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

    $( "#form" ).on("submit", function(event) {

        event.preventDefault();
    
        const serialized = $(event.target).serialize();
    
        $.post('/tweets', serialized)
        .then(fetchTweets())
        .catch(err => {
            console.log(err);
        });
    
      });

  });