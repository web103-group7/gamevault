import React, { useState, useEffect } from 'react'
import '../css/Searchbar.css'

export default function Searchbar({ allGames, setGames }) {
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const normalizedSearchValue = searchValue.trim().toLowerCase()
        const filteredGames = (allGames || []).filter((game) => {
            return (
                game.title.toLowerCase().includes(normalizedSearchValue) ||
                game.genre.toLowerCase().includes(normalizedSearchValue)
            )
        })

        setGames(normalizedSearchValue ? filteredGames : allGames || [])
    }, [searchValue, allGames, setGames])

    return (
        <div className='searchbar'>
            <span className='searchbar-icon' aria-hidden='true'>
                <svg viewBox='0 0 24 24' focusable='false'>
                    <path d='M10.5 3a7.5 7.5 0 015.98 12.03l4.25 4.24a1 1 0 01-1.41 1.42l-4.25-4.25A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z' />
                </svg>
            </span>
            <input
                type='text'
                placeholder='Search games by name or genre...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}