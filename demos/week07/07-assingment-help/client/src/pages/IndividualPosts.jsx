import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

export default function IndividualPosts() {
  const [postInfo, setPostInfo] = useState({});
  // const { id } = useParams()
  const params = useParams();
  const postId = params.id;
    console.log(postInfo)

    
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8080/posts/${postId}`);
      const data = await res.json();
      setPostInfo(data);
    }
    fetchData();
  }, []);

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
    </div>
  );
}
