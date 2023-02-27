import React, { useState } from "react";
import video from "../data/video.js"; 
import Comments from './Comments';

function App() {
  let [upvotes, setUpvotes] = useState(video.upvotes)
  let [downvotes, setDownvotes] = useState(video.downvotes)
  const [isHidden, setIsHidden] = useState(false)

 function handleUpvote(e) {
  e.preventDefault()
  setUpvotes(++upvotes)
 }
 function handleDownvote(e) {
  e.preventDefault()
  setDownvotes(++downvotes)
 }

 function hideComments() {
  setIsHidden(!isHidden)
 }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <form>
        <button onClick={handleUpvote}>{upvotes}<span>👍</span></button>
        <button onClick={handleDownvote}>{downvotes}<span>👎</span></button>
      </form>
      <br></br>
      <button onClick={hideComments}>Hide Comments</button>
      {!isHidden && <Comments comments={video.comments} />}
    </div>
  );
}

export default App;
