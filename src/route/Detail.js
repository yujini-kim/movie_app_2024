import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzg2Mjc0N2UxMjljNjk2NWJhYmFiOTI5MTFkZjQ2NyIsIm5iZiI6MTc0MTA3MzA4MS45OTQsInN1YiI6IjY3YzZhYWI5MDExMWE4OGM2YjA0ZDdmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRPgcXUulb_KvslJ5nBJ6xSCB8fvjC8Wf2NT0NTaBys`,
    },
  };

  const getMoviesDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await res.json();
    setDetail(data);
  };

  
  useEffect(() => {
    getMoviesDetails();
    setLoading(false);
  }, [id]);

  console.log(detail);

  return <div>{loading ? `${detail.title}` : "loading..."}</div>;
}

export default Detail;
