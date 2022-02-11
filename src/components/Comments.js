import React, { useState, useEffect } from "react";
import "../stylesheets/Comments.css";

function Comments( { project } ){
  const [ comments, setComments] = useState([]);
  const [ formData, setFormData] = useState();

  useEffect(()=> {
    fetch("http://localhost:3000/comments")
    .then((res) => res.json())
    .then((res) => setComments(res))
  }, [])

  const commentsFiltered = comments.filter((comment) => comment.project === project);

  function handleChange(event){
    setFormData(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const newCommentObj = {
      project: project,
      comment: formData
    }
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newCommentObj)
    })
    .then((res) => res.json())
    .then((res) => setComments([...comments, res]))
  }

  return (
    <div id="comments-container">
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label>Add Comment</label>
        <textarea 
          type="text" 
          placeholder="comments"
          value={formData} 
          onChange = {handleChange}
        >
        </textarea>
        <input type="submit"></input>
      </form>
      <div id="comments">
        {commentsFiltered.map((comment, index) => {
          return (
            <div className="comment" key={index} >
              <p>{comment.comment}</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Comments;