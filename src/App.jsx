import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./photos-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getPhotos() {
      try {
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [page, query]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <b>Opps! There was an error! Please reload!</b>}

      {isLoading && <b>Please wait, loading photos...</b>}

      {photos.length > 0 && <ImageGallery items={photos} />}

      {photos.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}
