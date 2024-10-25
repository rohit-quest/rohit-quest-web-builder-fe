import React from "react";
import { Bot } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">AI Website Generator</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 AI Website Generator. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
