import React, { useState } from 'react';
import { CodeEditor } from './components/CodeEditor.jsx';
import { Preview } from './components/Preview.jsx';
import { TemplateSelector } from './components/TemplateSelector.jsx';
import { Layout, Code2, SplitSquareVertical } from 'lucide-react';
import { codeTemplates } from './components/CodeTemplates.jsx';

const PreviewPage = () => {
    const [code, setCode] = useState(codeTemplates.counter.code);
    const [view, setView] = useState('split');

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="border-b border-gray-800 bg-gray-950">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Code2 className="w-8 h-8 text-purple-500" />
                            <h1 className="text-xl font-bold">React Playground</h1>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setView('split')}
                                className={`px-3 py-1 rounded flex items-center gap-2 ${view === 'split'
                                    ? 'bg-purple-600'
                                    : 'bg-gray-800 hover:bg-gray-700'
                                    }`}
                            >
                                <SplitSquareVertical size={16} />
                                <span>Split</span>
                            </button>
                            <button
                                onClick={() => setView('preview')}
                                className={`px-3 py-1 rounded ${view === 'preview'
                                    ? 'bg-purple-600'
                                    : 'bg-gray-800 hover:bg-gray-700'
                                    }`}
                            >
                                Preview
                            </button>
                            <button
                                onClick={() => setView('code')}
                                className={`px-3 py-1 rounded ${view === 'code'
                                    ? 'bg-purple-600'
                                    : 'bg-gray-800 hover:bg-gray-700'
                                    }`}
                            >
                                Code
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <TemplateSelector onSelect={setCode} />

                <div className={`grid gap-8 ${view === 'split' ? 'grid-cols-2' : 'grid-cols-1'
                    }`}>
                    {(view === 'split' || view === 'code') && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <Layout size={20} className="text-purple-400" />
                                Code Editor
                            </h2>
                            <CodeEditor
                                code={code}
                                language="jsx"
                                onChange={setCode}
                            />
                        </div>
                    )}
                    {(view === 'split' || view === 'preview') && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Live Preview</h2>
                            <Preview code={code} />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default PreviewPage;