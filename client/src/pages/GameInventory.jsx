import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AddItemModal from '../components/AddItemModal'

// TODO: Partial implementation to test out add item modal.
export default function GameInventory () {
    // TODO: Grab game details from backend; use api call
    const gameTitle = 'Title'
    const { id } = useParams()

    const [allItems, setAllItems] = useState([]) // TODO: Grab items from database.
    const [items, setItems] = useState([]) // use for displaying (filtered) items

    const [open, setOpen] = useState(false)
    const handleOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }

    const handleAddItem = (newItem) => {
        // When a new item is added, update the list of items displayed on frontend.
        setAllItems((currentItems) => [newItem, ...currentItems])
        setItems((currentItems) => [newItem, ...currentItems])
    }

    return (
        <div>
            <button onClick={handleOpen}>+ Add Item</button>
            {open &&
                <AddItemModal
                    gameId={id}
                    gameTitle={gameTitle}
                    open={open}
                    handleClose={handleClose}
                    handleAddItem={handleAddItem}
                />
            }
        </div>
    )
}