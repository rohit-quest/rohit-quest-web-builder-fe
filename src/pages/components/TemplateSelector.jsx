import React from 'react';
import { codeTemplates } from './CodeTemplates.jsx';

export function TemplateSelector({ onSelect }) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(codeTemplates).map(([key, template]) => {
                const Icon = template.icon;
                return (
                    <button
                        key={key}
                        onClick={() => onSelect(template.code)}
                        className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-left"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Icon size={20} className="text-purple-400" />
                            <span className="font-medium">{template.name}</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Click to load {template.name.toLowerCase()} example
                        </p>
                    </button>
                );
            })}
        </div>
    );
}