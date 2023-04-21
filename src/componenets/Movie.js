import ProTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie(props) {
    return <div >
        <h2>
            <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </h2>
        <img src={props.coverImg} alt={props.title}></img>
        <p>{props.summary}</p>
        <ul>
            {props.genres.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
    </div>
}

Movie.propTypes = {
    id: ProTypes.number.isRequired,
    coverImg: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired
}


export default Movie