import React, { useEffect, useRef } from 'react';
import { ErrorBoundary } from './ErrorBoundary.jsx';

export function Preview({ code }) {
    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            const template = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              body { margin: 0; font-family: system-ui, sans-serif; }
              #root { padding: 1rem; }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              ${code}
              
              try {
                const rootElement = document.getElementById('root');
                const root = ReactDOM.createRoot(rootElement);
                root.render(<App />);
              } catch (error) {
                const rootElement = document.getElementById('root');
                rootElement.innerHTML = \`
                  <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div class="text-red-600 font-semibold mb-2">Runtime Error:</div>
                    <pre class="text-sm text-red-600">\${error.message}</pre>
                  </div>
                \`;
              }
            </script>
          </body>
        </html>
      `;

            iframeRef.current.srcdoc = template;
        }
    }, [code]);

    return (
        <ErrorBoundary>
            <div className="w-full h-full min-h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                    ref={iframeRef}
                    title="preview"
                    className="w-full h-full border-0"
                    sandbox="allow-scripts"
                />
            </div>
        </ErrorBoundary>
    );
}