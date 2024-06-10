import React, { useState } from 'react';
import './selectedCategory.css';
import { useNavigate } from 'react-router-dom';
export default function Category() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleSearch = () => {
        if(selectedCategory === 'Others')
        {
            navigate('/Others');
        }
        if(selectedCategory === 'Pakistan')
        {
            navigate('/Pakistan');
        }
        if(selectedCategory === 'India')
        {
            navigate('/India');
        }
        if(selectedCategory === 'Trending')
        {
            navigate('/Trending');
        }
        if(selectedCategory === 'Tom')
        {
            navigate('/Tom');
        }
        if(selectedCategory === 'Cheemz')
        {
            navigate('/Cheemz');
        }
        if(selectedCategory === 'Random')
        {
            navigate('/Random');
        }
    };
    return (
        <>
            <div>
                <label  className="category-label" htmlFor="category">Select Templates Category:</label>
                <select
                    className="meme-options"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    
                    <option value="">Select...</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Cheemz">Cheemz</option>
                    <option value="Trending">Trending</option>
                    <option value="Random">Random</option>
                    <option value="Tom">Tom & Jerry</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <button onClick={handleSearch}>Search</button>
        </>
    );
}
