import React, {useState, useEffect} from 'react'

const Post = () =>{
    const [post, setPosts] = useState([])


const  postData = async() =>{
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resData = await res.json()
      console.log("Res data : ", resData)
      setPosts(resData.slice(0,10))
    } catch (error) {
        console.error('something went wrong! : ', error)
    }
}
useEffect(() =>{
    postData();
}, [])

return (
    <div>
      <h2>Posts Data</h2>
      <table border="3" cellPadding="9" cellSpacing="3">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {post.map((post,index) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Post;