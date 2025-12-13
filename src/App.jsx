import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import NewsCard from "./components/NewsCard";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [navOpen, setNavOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [searchInp, setSearchInp] = useState("");

  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchInp.trim());
      setCategory("");
      setPage(1);
    }, 800);

    return () => clearTimeout(timer);
  }, [searchInp]);

  let url = "";

  if (query) {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&page=${page}&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${apiKey}`;

    if (category) {
      url += `&category=${category}`;
    }
  }

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        setNews(data.articles || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    return () => controller.abort();
  }, [url]);

  if (loading) {
    return (
      <h2
        className="font-monospace d-flex justify-content-center align-items-center"
        style={{ height: "100vh", fontSize: "4em" }}
      >
        Loading...
      </h2>
    );
  }

  if (error) {
    return <h2 className="font-monospace text-center mt-3">Error Occurred</h2>;
  }

  return (
    <div className="mb-3">
      {!cardData && (
        <Navbar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          setCategory={setCategory}
          setPage={setPage}
          searchInp={searchInp}
          setSearchInp={setSearchInp}
        />
      )}

      {!cardData && (
        <Carousel
          newsArr={news}
          page={page}
          setPage={setPage}
          category={category}
          query={query}
          setCardData={setCardData}
        />
      )}

      {cardData && <NewsCard cardData={cardData} setCardData={setCardData} />}
    </div>
  );
}

export default App;
