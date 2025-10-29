import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { useScatterSeries, useXScale, useYScale } from '@mui/x-charts/hooks';

// Sample data
const data = [
  { id: 1, x1: 10, y1: 20, x2: 15, y2: 25 },
  { id: 2, x1: 20, y1: 30, x2: 25, y2: 35 },
  { id: 3, x1: 30, y1: 40, x2: 35, y2: 45 },
];

// Define two series of scatter points
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

// Component to draw connecting lines between scatter points
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

// Main Chart Component
export default function CombinedScatterChart() {
  return (
    <ScatterChart series={series} height={300}>
      <LinkPoints seriesId="seriesA" />
      <LinkPoints seriesId="seriesB" />
    </ScatterChart>
  );
}

