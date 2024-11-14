import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import du composant Link
import CreatePost from "../../components/CreatePost";
import { createPost, getPosts } from "../../postService";
import MessageForm from "../../components/MessageForm";
import MessageList from "../../components/MessageList";
import PostList from "../../components/PostList";
import CommentForm from "../../components/CommentForm";
import CommentList from "../../components/CommentList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/Post";

const Journal = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const handleCreatePost = async (post) => {
    await createPost(post);
    setPosts([...posts, post]); // Ajouter le post nouvellement créé
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 md:px-8">
      {/* Section des liens de navigation */}
      <nav className="mb-6 space-x-4 text-center">
        <Link href="/">
          <a className="text-blue-500 hover:underline">Accueil</a>
        </Link>
        <Link href="/contact">
          <a className="text-blue-500 hover:underline">Contact</a>
        </Link>
        <Link href="/about">
          <a className="text-blue-500 hover:underline">À propos</a>
        </Link>
      </nav>

      {/* Titre et contenu du journal */}
      <h1 className="mb-6 text-3xl font-bold text-center text-blue-800">
        Journal de Bord
      </h1>
      <MessageForm />
      <MessageList />
      <CreatePost />
      <PostList />
      <CommentForm />
      <CommentList />
      <CreatePost />
      <Post />
      <Header />
      <Footer />
      <login />
      <register />
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <CreatePost onCreate={handleCreatePost} />
        <div className="mt-6 space-y-6">
          {posts.map((post, index) => (
            <Post
              key={index}
              author="Auteur"
              content={post.content}
              imageUrl={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
