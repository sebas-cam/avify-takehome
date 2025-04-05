import React from 'react';
import { GenerationMix } from '../types/energy';
import { 
  Sun, 
  Wind, 
  Zap, 
  Atom, 
  Leaf, 
  Droplets, 
  Factory, 
  Import, 
  Settings 
} from 'lucide-react';

interface Props {
  data: GenerationMix;
  key: number;
}

export function CardEnergyStats({ data }: Props) {
  const getFuelIcon = (fuel: string) => {
    const icons: Record<string, Element> = {
      solar: <Sun className="w-6 h-6" />,
      wind: <Wind className="w-6 h-6" />,
      gas: <Zap className="w-6 h-6" />,
      nuclear: <Atom className="w-6 h-6" />,
      biomass: <Leaf className="w-6 h-6" />,
      hydro: <Droplets className="w-6 h-6" />,
      coal: <Factory className="w-6 h-6" />,
      imports: <Import className="w-6 h-6" />,
      other: <Settings className="w-6 h-6" />
    };
    return icons[fuel] || <Settings className="w-6 h-6" />;
  };

  const getFuelColor = (fuel: string) => {
    const colors: Record<string, string> = {
      solar: 'bg-yellow-500',
      wind: 'bg-blue-300',
      gas: 'bg-orange-500',
      nuclear: 'bg-blue-500',
      biomass: 'bg-green-500',
      hydro: 'bg-cyan-500',
      coal: 'bg-gray-800',
      imports: 'bg-purple-500',
      other: 'bg-gray-500'
    };
    return colors[fuel] || 'bg-gray-200';
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300">
      <div className="card-body p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getFuelColor(data.fuel)} text-white`}>
              {getFuelIcon(data.fuel)}
            </div>
            <h2 className="card-title text-lg capitalize">
              {data.fuel}
            </h2>
          </div>
          <div className="text-2xl font-bold text-primary">
            {data.perc}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${getFuelColor(data.fuel)}`}
            style={{ width: `${data.perc}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
} 