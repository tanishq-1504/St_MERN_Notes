import { useEffect } from "react";
import { useState } from "react";

function ConditionalRendering5() {
  // store results
  const [posts, setPosts] = useState([]);
  // track loading visual
  const [loading, setLoad] = useState(true);
  // track error messages
  const [error, setError] = useState("");
  const [reload , setreload] = useState(false);
  useEffect(() => {
    // named async function instead of an IIFE
    async function loadPosts() {
      try {
        setLoad(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();
        setPosts(data.slice(0, 5)); // keep it small for demo
      } catch (e) {
        setError(e.message);
      } finally {
        setLoad(false);
      }
    }

    // call the named function
    loadPosts();
  }, [reload]); // run once on mount

  // early return branches
  if (error)   return <p style={{color:'red'}}>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;
  if (posts.length === 0) return <p>No posts.</p>;

  // success branch
  return(
    <>
    <button onClick={()=>{setreload(!reload)}}>Reload</button>
    {posts.map(p => (<article key={p.id}>{p.name}{p.email}</article>))}
    </>
  )

}
export default ConditionalRendering5;
