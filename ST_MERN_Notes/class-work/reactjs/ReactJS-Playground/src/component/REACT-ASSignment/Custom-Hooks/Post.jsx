import React from "react";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const { data, loading, error,reload,setReload } = useFetch("https://jsonplaceholder.typicode.com/users");
  

  return (
    <div>
      {error && <p className="text-red-400">Error ... {error}</p>}
      {loading && <p>Loading....</p>}
      <button onClick={()=>setReload(!reload)} className="cursor-pointer px-5 py-0.75 bg-red-600 text-white rounded-lg hover:bg-red-700">Reload</button>
      {data &&
        data.map((user, id) => (
          <div key={id}>
            <h3>Name: {user.name}</h3>
            <p>Email : {user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default Post;