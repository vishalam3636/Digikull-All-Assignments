import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState({});
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => setPost(res.data))
      .then((err) => err);

    axios
      .get("http://localhost:3001/comments")
      .then((res) => setComment(res.data))
      .then((err) => err);

    axios
      .get("http://localhost:3001/profile")
      .then((res) => setProfile(res.data))
      .then((err) => err);
  }, []);

  console.log(post, "post");
  console.log(comment, "comment");
  console.log(profile, "profile");

  return (
    <div className="App">
      <h1>This is App component</h1>
    </div>
  );
}

export default App;
