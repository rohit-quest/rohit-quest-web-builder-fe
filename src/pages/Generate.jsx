import React, { useState } from 'react';
import { CodeEditor } from './components/CodeEditor.jsx';
import { Preview } from './components/Preview.jsx';
import { TemplateSelector } from './components/TemplateSelector.jsx';
import { Layout, Code2, SplitSquareVertical } from 'lucide-react';
import { codeTemplates } from './components/CodeTemplates.jsx';
import { Palette, Type, Wand2 } from 'lucide-react';
import Navigation from '../components/Navigation.jsx';
import ColorPicker from './components/ColorPicker.jsx';

import PreviewSVG from '../assets/Preview.svg'
import CodeSVG from '../assets/Code.svg'

const Generate = () => {
    const [code, setCode] = useState(codeTemplates?.apiExample?.code);
    const [view, setView] = useState('code');
    const [prompt, setPrompt] = useState('');

    return (
        <div className="w-full min-h-screen bg-gray-900 text-white">
            <Navigation />


            <div className='flex gap-2 p-5 justify-end'>
                <div className={`h-8 w-8 flex items-center p-1 rounded-[50%] justify-center cursor-pointer ${view === 'code'
                    ? 'bg-purple-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                    }`} onClick={() => { setView('code') }}>
                    <img className='h-4 w-4' src={CodeSVG} alt="" />
                </div>

                <button className={`h-8 w-8 flex items-center rounded-[50%] justify-center cursor-pointer ${view === 'preview'
                    ? 'bg-purple-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                    }`} onClick={() => { setView('preview') }}>
                    <img className='h-4 w-4' src={PreviewSVG} alt="" />
                </button>
            </div>


            <main className="w-full mx-auto px-4 ">
                <div className='w-full  flex justify-center gap-2 h-[calc(100vh-144px)]' >
                    <div className="w-full max-h-screen max-w-96 flex items-end">
                        <div className="h-full flex-1 flex flex-col justify-end">
                            <div className="border-gray-200 p-4  rounded-lg bg-gray-800">
                                <div className="flex flex-col gap-2 max-w-4xl mx-auto items-center">
                                    <div className="w-full flex-1">
                                        <textarea
                                            rows={5}
                                            type="text"
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            placeholder="Describe what you want to create..."
                                            className="resize-none w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-transparent"
                                        />
                                    </div>

                                    <div className='w-full flex gap-2 justify-start items-center'>
                                        <span>Primary Color:</span> <ColorPicker />
                                    </div>

                                    <div className='w-full flex gap-2 justify-start items-center'>
                                        <span>Secondary Color:</span> <ColorPicker />
                                    </div>
                                    <button
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2  bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400"
                                    >
                                        <span>Generate</span>
                                        <Wand2 className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full flex flex-col max-h-screen overflow-auto`}>
                        <div className="w-full flex h-full">
                            {view === 'code' ? <CodeEditor
                                code={code}
                                language="jsx"
                                onChange={setCode}
                            /> : <Preview code={code} />}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Generate;