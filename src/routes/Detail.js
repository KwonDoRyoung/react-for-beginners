import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Movie from "../components/Movie";
function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const getDetail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setDetail(json.data.movie);
            setLoading(false);
            console.log(json.data.movie)
        };
        getDetail();
    }, [id]);

    return <div >
        {loading ? <h1>Loading...</h1> :
            <div>
                <Movie
                    key={detail.id}
                    id={detail.id}
                    title={detail.title}
                    coverImg={detail.medium_cover_image}
                    summary={detail.description_full}
                    genres={detail.genres} />
            </div>}
    </div>
}


export default Detail