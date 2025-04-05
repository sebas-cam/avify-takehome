import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="mx-auto px-4 py-8">               
        <div className="border-t border-base-300 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} GER. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}