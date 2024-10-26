import React, { useEffect, useRef } from 'react';
import { ErrorBoundary } from './ErrorBoundary.jsx';
import * as Babel from '@babel/standalone';
export function Preview({ code }) {
  const iframeRef = useRef(null);

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
              #root { padding: 1rem; }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script>
            window.onload = function(){
            try {
              ${transpiledCode}
              if (typeof App === 'undefined') {
                  throw new Error('App component is not defined');
                }
                const rootElement = document.getElementById('root');
                const root = ReactDOM.createRoot(rootElement);
                root.render(React.createElement(App));
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
      },500)
    }
  }, [code]);

  return (
    <ErrorBoundary>
      {/* for creen size add here cond */}
      <div className="w-full h-full  bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          ref={iframeRef}
          title="preview"
          className="w-full h-full border-0 bg-red"
          sandbox="allow-scripts"
        />
      </div>
    </ErrorBoundary>
  );
}