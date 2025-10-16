import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

export default function IndividualPosts() {
  const [postInfo, setPostInfo] = useState({});
  const [formData, setFormData] = useState({})
  const params = useParams();
  const postId = params.id;


    console.log(formData)


  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8080/posts/${postId}`);
      const data = await res.json();
      setPostInfo(data);
    }
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.postId.value)
    setFormData({...formData, postId: e.target.postId.value})
  }

  return (
    <div>
      {postInfo ? (
        <div>
          <p>{postInfo.title}</p>
          <p>{postInfo.author}</p>
          <p>{postInfo.content}</p>
        </div>
      ) : (
        <p>No post was found</p>
      )}

      <form onSubmit={handleSubmit}>
        <input name="postId" type="hidden" value={postId} />
        <input name="comment" onChange={(e) => setFormData({comment: e.target.value})}/>
      </form>
    </div>
  );
}
