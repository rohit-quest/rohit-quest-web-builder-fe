import React, { useState, useEffect, useRef } from 'react';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import * as Babel from '@babel/standalone';
import { SquareDashedMousePointer } from 'lucide-react';

export function Preview({ code, UpdateCode }) {
  const iframeRef = useRef(null);
  const [isInspecting, setIsInspecting] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const resetHighlight = () => {
    document.querySelectorAll('.inspector-highlight').forEach(el => {
      el.classList.remove('inspector-highlight');
    });
  };



  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = '';
      let transpiledCode = '';
      try {
        transpiledCode = Babel.transform(code, { presets: ['react'] }).code;
      } catch (error) {
        transpiledCode = `throw new Error("Babel transpilation failed: ${error.message}")`;
      }

      const template = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              body { margin: 0; font-family: system-ui, sans-serif; }
              #root { padding: 0; }
              .inspector-highlight { outline: 2px dotted #00f; }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script>
              window.onload = function() {
                try {
                  ${transpiledCode}
                  if (typeof App === 'undefined') {
                    throw new Error('App component is not defined');
                  }
                  const rootElement = document.getElementById('root');
                  const root = ReactDOM.createRoot(rootElement);
                  root.render(React.createElement(App));

                  function handleHover(e) {
                    e.stopPropagation();
                    resetHighlight();
                    e.target.classList.add('inspector-highlight');
                  }

                  function handleSelect(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    resetHighlight();
                    e.target.classList.add('inspector-highlight');
                    window.parent.postMessage({
                      type: 'elementSelected',
                      html: e.target.outerHTML
                    }, '*');
                    stopInspector();
                  }

                  function resetHighlight() {
                    document.querySelectorAll('.inspector-highlight').forEach(el => {
                      el.classList.remove('inspector-highlight');
                    });
                  }

                  function startInspector() {
                    document.addEventListener('mouseover', handleHover, true);
                    document.addEventListener('click', handleSelect, true);
                  }

                  function stopInspector() {
                    document.removeEventListener('mouseover', handleHover, true);
                    document.removeEventListener('click', handleSelect, true);
                  }

                  window.addEventListener('message', (event) => {
                    if (event.data.type === 'startInspector') {
                      startInspector();
                    } else if (event.data.type === 'stopInspector') {
                      stopInspector();
                    }
                  });
                } catch (error) {
                  const rootElement = document.getElementById('root');
                  rootElement.innerHTML = \`
                    <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div class="text-red-600 font-semibold mb-2">Runtime Error:</div>
                      <pre class="text-sm text-red-600">\${error.message}</pre>
                    </div>
                  \`;
                }
              }
            </script>
          </body>
        </html>
      `;

      setTimeout(() => {
        iframeRef.current.srcdoc = template;
      }, 500);
    }
  }, [code]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'elementSelected') {
        setSelectedElement(event.data.html);
        setIsInspecting(false);
        setShowPopup(true);  // Show popup after selection
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const startInspector = () => {
    setSelectedElement(null);
    setIsInspecting(true);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'startInspector' }, '*');
    }
  };

  const stopInspector = () => {
    setIsInspecting(false);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'stopInspector' }, '*');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    UpdateCode(selectedElement, inputValue);
    resetHighlight();
    setShowPopup(false);
    setInputValue('');
  };

  return (
    <ErrorBoundary>
      <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden relative group">
        <div className='absolute -top-12 right-[50%] group-hover:top-4 transition-all duration-500 bg-purple-600 rounded-full p-2 cursor-pointer'>
          <SquareDashedMousePointer onClick={isInspecting ? stopInspector : startInspector} width={20} height={20} />
        </div>
        <iframe
          ref={iframeRef}
          title="preview"
          className="w-full h-full border-0 bg-red"
          sandbox="allow-scripts"
        />
        
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded shadow-lg w-1/3">
              <h3 className="mb-2 text-lg font-semibold">Edit Selected Element</h3>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ex. change text color to red"
                className="w-full mb-4 p-2 border rounded text-black"
              />
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                Generate
              </button>
              <button onClick={() => setShowPopup(false)} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        )}

        {selectedElement && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Selected Element:</h3>
            <pre>{selectedElement}</pre>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
