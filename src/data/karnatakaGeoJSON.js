// src/data/karnatakaGeoJSON.js
// Simplified bounding-box polygons for key districts
// For production, use a full GeoJSON file from:
// https://github.com/datameet/maps/tree/master/Districts

export const karnatakaGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { id: 'mysuru', name: 'Mysuru', ST_NM: 'Karnataka' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [76.2, 11.9], [76.2, 12.8], [77.0, 12.8], [77.0, 11.9], [76.2, 11.9]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'vijayanagara', name: 'Hampi (Vijayanagara)', ST_NM: 'Karnataka' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [76.0, 14.9], [76.0, 15.7], [76.9, 15.7], [76.9, 14.9], [76.0, 14.9]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'kodagu', name: 'Kodagu (Coorg)', ST_NM: 'Karnataka' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [75.4, 11.9], [75.4, 12.7], [76.2, 12.7], [76.2, 11.9], [75.4, 11.9]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'chikkamagaluru', name: 'Chikkamagaluru', ST_NM: 'Karnataka' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [75.4, 12.8], [75.4, 13.7], [76.2, 13.7], [76.2, 12.8], [75.4, 12.8]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'udupi', name: 'Udupi', ST_NM: 'Karnataka' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [74.5, 13.1], [74.5, 13.8], [75.2, 13.8], [75.2, 13.1], [74.5, 13.1]
        ]]
      }
    },
    {
      type: 'Feature',
      properties: { id: 'belagavi', name: 'Belagavi', ST_NM: 'Karnataka' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [74.2, 15.4], [74.2, 16.4], [75.3, 16.4], [75.3, 15.4], [74.2, 15.4]
        ]]
      }
    },
  ]
}
