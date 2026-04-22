import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { addItem } from '../services/itemAPI'

// TODO: Update style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddItemModal({ gameId, gameTitle, open, handleClose, handleAddItem }) {
    const [name, setName] = useState('')
    const [showNameErrorMessage, setShowNameErrorMessage] = useState(false)
    const [type, setType] = useState('weapon') // DEFAULT VALUE = FIRST DROPDOWN OPTION
    const [rarity, setRarity] = useState('common') // DEFAULT VALUE = FIRST DROPDOWN OPTION
    const [quantity, setQuantity] = useState(1)
    const [power, setPower] = useState(0)
    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        if (!name) {
            setShowNameErrorMessage(true)
            return
        }
        const newItem = await addItem(gameId, name, type, rarity, quantity, power, description)
        if (newItem) {
            handleAddItem(newItem)
            handleClose()
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <div style={style}>
                <h1>Add New Item</h1>
                <h2>Add an item to {gameTitle}'s inventory</h2>
                
                <label htmlFor='name'>Item Name *</label>
                <input
                    id='name'
                    type='text'
                    placeholder='e.g., Moonveil Katana'
                    value={name}
                    onChange={(e) => { setName(e.target.value); setShowNameErrorMessage(false); }}
                />
                {showNameErrorMessage && <p>Name cannot be empty.</p>}

                <div>
                    <label htmlFor='type'>Type</label>
                    <select
                        id='type'
                        value={type}
                        onChange={(e) => { setType(e.target.value) }}
                    >
                        <option value='weapon'>Weapon</option>
                        <option value='armor'>Armor</option>
                        <option value='consumable'>Consumable</option>
                        <option value='material'>Material</option>
                        <option value='accessory'>Accessory</option>
                    </select>

                    <label htmlFor='rarity'>Rarity</label>
                    <select
                        id='rarity'
                        value={rarity}
                        onChange={(e) => { setRarity(e.target.value) }}
                    >
                        <option value='common'>Common</option>
                        <option value='uncommon'>Uncommon</option>
                        <option value='rare'>Rare</option>
                        <option value='epic'>Epic</option>
                        <option value='legendary'>Legendary</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='quantity'>Quantity</label>
                    <input
                        id='quantity'
                        type='number'
                        value={quantity.length != 0 ? quantity : 1}
                        onChange={(e) => { setQuantity(e.target.value) }}
                    />
                    <label htmlFor='power'>Power</label>
                    <input
                        id='power'
                        type='number'
                        value={power.length != 0 ? power : 0}
                        onChange={(e) => { setPower(e.target.value) }}
                    />
                </div>
                <label htmlFor='description'>Description</label>
                <input
                    id='description'
                    type='text'
                    placeholder='Item description...'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                />
                <div>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSubmit}>Add Game</button>
                </div>
            </div>
        </Modal>
    )
}