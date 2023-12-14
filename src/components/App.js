import video from "../data/video.js";
import React, {useState} from "react";

function App() {
  console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  function handleUpVoteClick() {
    setUpVotes((upVotes) => upVotes + 1)
  }

  function handleDownVoteClick() {
    setDownVotes((downVotes) => downVotes + 1)
  }


  function handleToggleComments() {
    setShowComments((showComments) => !showComments)
  }

  const totalComments = video.comments.length

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views  |  {video.createdAt}</p>
      <button onClick={handleUpVoteClick}>{upVotes}👍</button>
      <button onClick={handleDownVoteClick}>{downVotes}👎</button> <br>
      </br><br></br>
      <button onClick={handleToggleComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <hr></hr>
      <br></br>
      {showComments ? (
        <>
          <h3>{totalComments}  Comments</h3>
          {video.comments.map((comment) => (
            <p key={comment.id}><strong>{comment.user}</strong><br></br> {comment.comment}</p>
          ))}
        </>
      ) : null}
      
    </div>
  );
}

export default App;
