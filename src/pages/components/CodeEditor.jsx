import React, { useState, useMemo } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Copy, Check } from 'lucide-react';

export function CodeEditor({ code, language = "jsx", onChange }) {
    const [copied, setCopied] = useState(false);

    const highlightedCode = useMemo(() => highlight(code, languages[language], language), [code, language]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full">
            <button
                onClick={handleCopy}
                className="absolute z-10 top-40 right-10 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                aria-live="polite"
            >
                {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <Editor
                value={code}
                onValueChange={onChange}
                highlight={()=> highlightedCode}
                padding={16}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: '#1e1e1e',
                    borderRadius: '0.5rem',
                    minHeight: '400px',
                }}
                className="w-full h-full overflow-auto text-gray-300"
            />
        </div>
    );
}