import { useState } from "react";
import { Link } from 'react-router-dom'

export default function GalleryItem(props) {
    const [viewDetails, setViewDetails] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.song.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'grey'
    }


    const simpleView = () => {
        return (
        <div style={simpleStyle}>
            <h3>{props.song.trackName}</h3>
            <h4>{props.song.collectionName}</h4>
        </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.song.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.song.artistId}`}>
                        {props.song.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.song.collectionId}`}>
                        {props.song.collectionName}
                    </Link>
                </h3>
                <h4>{props.song.primaryGenreName}</h4>
                <h4>{props.song.releaseDate}</h4>
            </div>
        )
    }
    

    return (
        <div onClick={() => setViewDetails (!viewDetails)} style={{display: 'inline-block'}}>
            {viewDetails ? detailView() : simpleView()}
        </div>
    )
}