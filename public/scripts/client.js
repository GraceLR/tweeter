/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweetData = {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//         "handle": "@SirIsaac"
//       },
//     "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//     "created_at": 1461116232227
//  }

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

    for (const tweetData of tweets) {

        const $tweet = createTweetElement(tweetData);
        $('#tweets-container').append($tweet); 

    }

}