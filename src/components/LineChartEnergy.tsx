import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GenerationMix } from '../types/energy';

interface Props {
  data: GenerationMix[];
}

export function LineChartEnergy({ data }: Props) {
  // Transform the data for the chart
  const chartData = data.map(item => ({
    name: item.fuel.charAt(0).toUpperCase() + item.fuel.slice(1),
    value: item.perc
  }));

  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-lg shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Porcentaje']}
            labelFormatter={(label) => `Fuente: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 