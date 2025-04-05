import React from 'react';
import { Zap, Sun, Wind, Atom } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          {/* Logo y Título */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="flex space-x-1">
              <Sun className="w-6 h-6 text-yellow-500" />
              <Wind className="w-6 h-6 text-blue-400" />
              <Atom className="w-6 h-6 text-blue-600" />
              <Zap className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              UK Energy Monitor
            </h1>
          </div>         
          

          {/* Botón de Tema */}
          <nav className="flex items-center space-x-6">
            <a 
              href="/" 
              className="text-base-content hover:text-primary transition-colors"
            >
              Dashboard
            </a>
            <a 
              href="https://github.com/sebas-cam" 
              target="_blank"
              className="text-base-content hover:text-primary transition-colors"
            >
              Acerca de
            </a>
            <a 
              href="https://api.carbonintensity.org.uk/generation" 
              target="_blank"
              className="text-base-content hover:text-primary transition-colors"
            >
              API
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}