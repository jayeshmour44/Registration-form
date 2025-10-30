import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const dataset = [
  { x1: 373, y1: 434, x2: 304, y2: 349 },
  { x1: 173, y1: 437, x2: 208, y2: 347 },
  { x1: 68, y1: 292, x2: 151, y2: 280 },
  { x1: 121, y1: 116, x2: 185, y2: 176 },
  // ... keep rest of the dataset
];

const chartSetting = {
  yAxis: [{ label: 'rainfall (mm)', width: 60 }],
  height: 300,
};

export default function ScatterDataset() {
  return (
    <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: '1rem' }}>Rainfall Scatter Chart</h3>
      <ScatterChart
        dataset={dataset}
        series={[
          { datasetKeys: { x: 'x1', y: 'y1' }, label: 'Series A' },
          { datasetKeys: { x: 'x2', y: 'y2' }, label: 'Series B' },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
