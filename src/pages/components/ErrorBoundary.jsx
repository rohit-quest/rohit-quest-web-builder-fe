import React, { Component } from 'react';
import { AlertOctagon } from 'lucide-react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                        <AlertOctagon size={20} />
                        <h2 className="font-semibold">Runtime Error</h2>
                    </div>
                    <pre className="text-sm text-red-600 overflow-auto">
                        {this.state.error?.message}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}