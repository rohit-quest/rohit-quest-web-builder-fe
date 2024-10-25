import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Copy, Check } from 'lucide-react';

export function CodeEditor({ code, language, onChange }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                title="Copy code"
            >
                {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <Editor
                value={code}
                onValueChange={onChange}
                highlight={code => highlight(code, languages.jsx, 'jsx')}
                padding={16}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: '#1e1e1e',
                    borderRadius: '0.5rem',
                    minHeight: '400px',
                }}
                className="w-full overflow-auto text-gray-300"
            />
        </div>
    );
}