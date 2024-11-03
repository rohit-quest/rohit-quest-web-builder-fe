import React, { useState } from 'react';

const ColorPicker = ({ color, setColor, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempColor, setTempColor] = useState(color);

    const presetColors = [
        '#4F46E5', // Indigo
        '#2563EB', // Blue
        '#7C3AED', // Purple
        '#DB2777', // Pink
        '#DC2626', // Red
        '#EA580C', // Orange
        '#16A34A', // Green
        '#0D9488', // Teal
        '#334155', // Slate
        '#000000', // Black
    ];

    const handleColorChange = (newColor) => {
        setTempColor(newColor);
    };

    const handleApply = () => {
        setColor(tempColor);
        onChange?.(tempColor);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2  rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <div
                    className="w-4 h-4 rounded-[50%] border border-white"
                    style={{ backgroundColor: color }}
                />
                <span className="text-sm text-gray-200">{color}</span>
            </button>

            {isOpen && (
                <div className="flex flex-col w-[230px] absolute gap-2 z-10 mt-2 p-4 bg-[#1E1E1E] rounded-lg shadow-lg border border-gray-600 bottom-8 left-3">
                    <div className="w-full">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-medium text-white">Custom Color</label>
                                <input
                                    type="text"
                                    value={tempColor}
                                    onChange={(e) => handleColorChange(e.target.value)}
                                    className="w-24 text-sm p-1 border border-gray-300 rounded bg-transparent"
                                />
                            </div>
                            <input
                                type="color"
                                value={tempColor}
                                onChange={(e) => handleColorChange(e.target.value)}
                                className={`w-full rounded cursor-pointer p-0 bg-[${tempColor}]`}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white mb-2">
                                Preset Colors
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {presetColors.map((presetColor) => (
                                    <button
                                        key={presetColor}
                                        type="button"
                                        onClick={() => handleColorChange(presetColor)}
                                        className={`w-8 h-8 rounded-md border-2 ${tempColor === presetColor ? 'border-indigo-500' : 'border-transparent'
                                            } hover:scale-110 transition-transform`}
                                        style={{ backgroundColor: presetColor }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end mt-2">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 text-white"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleApply}
                                className="px-3 py-1.5 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default ColorPicker;