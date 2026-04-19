import React from 'react'
import { Link } from 'react-router-dom'
import '../css/GameCard.css'

export default function GameCard ({ gameId, title, genre, date, image }) {
    const formattedDate = date ? new Date(date).toLocaleDateString() : 'N/A'

    return (
        <Link className='game-card-link' to={`/inventory/${gameId}`}>
            <article className='game-card'>
                <img className='game-card-image' src={image || ''} alt={title || 'Game cover'} />
                <div className='game-card-content'>
                    <div className='game-card-header'>
                        <h3>{title}</h3>
                        <span className='game-card-genre'>{genre}</span>
                    </div>
                    <div className='game-card-footer'>
                        {/** TODO: Count # of items in each game. */}
                        <p># items</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </article>
        </Link>
    )
}