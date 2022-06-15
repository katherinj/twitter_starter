import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (e) => {
    props.setTweetText(e.target.value)
  }

  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name, 
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0, retweets: 0, likes: 0, id: props.tweets.length}
      
      props.setTweets(currentTweets => [...currentTweets, newTweet])
      props.setTweetText("");
    }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disabled={props.tweetText.length==0 || props.tweetText.length>140}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  var tweetLength = props.tweetText.length
  let charLeft = 140 -tweetLength

  return <span className={charLeft < 0 ? "red" : ""}>{charLeft != 140 ? charLeft : ""} </span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={disabled}>Tweet</button>
    </div>
  )
}
