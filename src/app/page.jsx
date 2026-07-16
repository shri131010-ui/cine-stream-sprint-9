"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import { fetchMovies } from "../services/tmdb";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies("");
  }, []);

  const loadMovies = async (searchQuery) => {
    setLoading(true);
    const results = await fetchMovies(searchQuery);
    setMovies(results);
    setLoading(false);
  };

  return (
    <main className="container">
      <header>
        <h1>Netflix</h1>
        <SearchBar onSearch={loadMovies} />
      </header>
      
      <section>
        {loading ? <h2>Loading Movies...</h2> : <MovieGrid movies={movies} />}
      </section>
    </main>
  );
}