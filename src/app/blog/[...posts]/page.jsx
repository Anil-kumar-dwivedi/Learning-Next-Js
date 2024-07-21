import React from "react";

function Posts({ params }) {
  //localhost:3000/blog/posts/learn-python
  http: console.log(params); // { posts: [ 'posts', 'learn-python' ] }

  //[...posts] this is know as catch all
  // if we will search anything after http://localhost:3000/blog/ , it will redirect us in posts index/page .jsx -ex : http://localhost:3000/blog/learn-jav or http://localhost:3000/blog/learn python

  //if we want to make posts optional then we need to add [[...posts]], normally http://localhost:3000/blog this will gice 404 not found but if make it optional then it will also work
  return <div>Posts</div>;
}

export default Posts;
