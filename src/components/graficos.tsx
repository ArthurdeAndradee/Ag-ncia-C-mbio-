'use client';
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "1 D",
    uv: 4000,
  
    amt: 2400
  },
  {
    name: "5 D",
    uv: 3000,
   
    amt: 2210
  },
  {
    name: "1 M ",
    uv: 2000,
  
    amt: 2290
  },
  {
    name: "3 M",
    uv: 2780,

    amt: 2000
  },
  {
    name: "6 M",
    uv: 1890,

    amt: 2181
  },
  {
    name: "1 A",
    uv: 2390,

    amt: 2500
  },
  
];

const Graficos: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
       
        <h2 className="text-2xl font-bold text-black">Taxa de câmbio</h2>

        <div className="flex items-center space-x-4">
         
        </div>
      </div>

  
      <ResponsiveContainer width={900} height={500}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graficos;