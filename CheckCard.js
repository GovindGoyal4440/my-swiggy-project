// Filename: CheckCard.js

import React from 'react';
import { useDispatch } from 'react-redux';
// Apne cartslicer se actions import karein
import { IncrementItems, DecrementItems } from './Stored/CartSlicer';

// 'itemData' ko props se le rahe hain
export default function CheckCard({ itemData }) {
    
    const dispatch = useDispatch();

    // Agar kisi vajah se itemData nahi milta, to kuch na render karein
    if (!itemData) {
        return null;
    }

    const { name, price, quantity } = itemData;
    const itemPrice = price || 0; // fallback in case price is undefined

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gray-50">
            
            {/* Item Details (Name & Price) */}
            <div className="flex-grow mb-4 sm:mb-0 text-center sm:text-left">
                <p className="font-semibold text-lg text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">
                    Price: ₹{(itemPrice / 100).toFixed(2)}
                </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mx-4 mb-4 sm:mb-0">
                <button 
                    onClick={() => dispatch(DecrementItems(itemData))}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold text-xl flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                    -
                </button>
                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                <button 
                    onClick={() => dispatch(IncrementItems(itemData))}
                    className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold text-xl flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                    +
                </button>
            </div>

            {/* Item Subtotal */}
            <div className="font-semibold text-gray-800 min-w-[120px] text-center sm:text-right">
                <span>Subtotal: ₹{((quantity * itemPrice) / 100).toFixed(2)}</span>
            </div>
        </div>
    );
}