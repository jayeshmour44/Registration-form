import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { useScatterSeries, useXScale, useYScale } from '@mui/x-charts/hooks';

// ✅ Sample data
const data = [
  { id: 1, x1: 10, y1: 20, x2: 15, y2: 25 },
  { id: 2, x1: 20, y1: 30, x2: 25, y2: 35 },
  { id: 3, x1: 30, y1: 40, x2: 35, y2: 45 },
  { id: 4, x1: 40, y1: 35, x2: 45, y2: 50 },
  { id: 5, x1: 50, y1: 45, x2: 55, y2: 55 },
];

// ✅ Define two scatter series
const series = [
  {
    id: 'seriesA',
    label: 'Series A',
    data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
  },
  {
    id: 'seriesB',
    label: 'Series B',
    data: data.map((v) => ({ x: v.x2, y: v.y2, id: v.id })),
  },
];

// ✅ Component to draw connecting lines between scatter points
function LinkPoints({ seriesId, close }) {
  const scatter = useScatterSeries(seriesId);
  const xScale = useXScale();
  const yScale = useYScale();

  if (!scatter) return null;
  const { color, data } = scatter;
  if (!data) return null;

  return (
    <path
      fill="none"
      stroke={color}
      strokeWidth={2}
      d={`M ${data.map(({ x, y }) => `${xScale(x)},${yScale(y)}`).join(' L')}${
        close ? 'Z' : ''
      }`}
    />
  );
}

// ✅ Main Chart Component
export default function CombinedScatterChart() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '1rem',
        marginTop: '1.5rem',
      }}
    >
      <h3 style={{ marginBottom: '1rem', color: '#333' }}>Combined Scatter Chart</h3>
      <ScatterChart
        series={series}
        height={300}
        xAxis={[{ label: 'X Axis' }]}
        yAxis={[{ label: 'Y Axis' }]}
      >
        <LinkPoints seriesId="seriesA" />
        <LinkPoints seriesId="seriesB" />
      </ScatterChart>
    </div>
  );
}
