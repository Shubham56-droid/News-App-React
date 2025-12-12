import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const [country, setCountry] = useState("us");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("top-headlines");
  const [cardData, setCardData] = useState(null);

  const [searchInp,setSearchInp] = useState("")


  let url = `https://newsapi.org/v2/${type}?country=${country}&apiKey=${apiKey}`;

  if (category) {
    url += `&category=${category}`;
  }
  if (page) {
    url += `&page=${page}`;
  }
  if (query){ 
    url += `&q=${query}`;
  }

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to Fetch Data");
        }
        const data = await res.json();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchNews();
    }
  }, [url]);


 // debouncing
  useEffect(()=>{
      const delay = setTimeout(() => {
        setQuery(searchInp);
        if(searchInp.trim()===""){
          setType("everything");
        }else{
          setType("top-headlines");
        }
      }, 1000);
      return ()=> clearTimeout(delay)
  },[searchInp])



  if (loading)
    return (
      <h2
        className="font-monospace text-center mt-3 d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "100%", fontSize: "4em" }}
      >
        Loading...
      </h2>
    );
  if(error) return <h2 className="font-monospace text-center mt-3">Error Occured</h2>

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
          setCardData={setCardData}
          query={query}
        />
      )}
      {console.log(news)}
      {cardData && <NewsCard cardData={cardData} setCardData={setCardData} />}
    </div>
  );
}

export default App;
