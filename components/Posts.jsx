import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase.js";
import Post from "./Post.jsx";

function Posts() {
  const [realTimePosts, loading, error] = useCollection(
    query(collection(firestore, "posts"), orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realTimePosts && realTimePosts.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        ></Post>
      ))}
    </div>
  );
}

export default Posts;
