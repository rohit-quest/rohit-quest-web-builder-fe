import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();

    const [view, setView] = useState('split');
    return (
        <div className="flex items-center justify-between p-[16px]">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                <h1 className="text-xl font-bold">AI | Web Craft</h1>
            </div>
            <div className="flex space-x-2">
                {/* <button
                    onClick={() => navigate('/login')}
                    className={`px-4 py-2 rounded flex items-center gap-2 ${view === 'split'
                        ? 'bg-purple-600'
                        : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                >
                    <span>Login</span>
                </button> */}
                <button
                    onClick={() => navigate('/login')}
                    className={`px-4 py-2 rounded flex items-center gap-2 ${view === 'split'
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                >
                    <span>Login</span>
                </button>
                <button
                    onClick={() => { }}
                    className={`px-4 py-2 rounded ${view === ''
                        ? 'bg-purple-600'
                        : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                >
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Navigation