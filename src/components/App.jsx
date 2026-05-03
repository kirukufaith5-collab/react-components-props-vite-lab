import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./Article list";


console.log(blogData);

function App() {
  
  const blogData= {
    name:"My awesome blog",
    about:"Tech and code."
  };
  return (
    
    <div className="App">
      <Header blogName={blogData.name} />
      <About image={blogData.about} />
      <ArticleList posts={blogData.posts} />
    
    </div>
  );
}

export default App;
