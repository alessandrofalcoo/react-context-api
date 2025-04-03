import { useState } from "react";
import CountContext from "./contexts/CountContext";
import PostsList from "./components/PostsList";
import PostCard from "./components/PostCard";
import PostsPage from "./components/PostsPage";
function App() {

  const people = [
    { id: 1, name: 'Alice', age: 25, city: 'Rome' },
    { id: 2, name: 'Bob', age: 30, city: 'Milan' },
    { id: 3, name: 'Charlie', age: 35, city: 'Naples' },
    { id: 4, name: 'Diana', age: 28, city: 'Florence' }
  ];


  return (
    <CountContext.Provider value={{ people }}>
      <PostsPage />
      <PostsList />
    </CountContext.Provider>
  );
}

export default App
