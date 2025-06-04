import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { sampleFarms } from '../data/farms';

interface FarmMapProps {
  selectedFarmId?: string;
  onFarmSelect?: (farmId: string) => void;
}

const FarmMap: React.FC<FarmMapProps> = ({ selectedFarmId, onFarmSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([51.2362, -0.5704], 10);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.divIcon({
      className: 'custom-farm-marker',
      html: `<div style="
        background-color: #2E7D32;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
      ">🌾</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    sampleFarms.forEach((farm) => {
      const marker = L.marker([farm.location.lat, farm.location.lng], { icon: customIcon })
        .addTo(map);

      marker.bindPopup(`
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #2E7D32;">
            ${farm.name}
          </h3>
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">
            ${farm.type}
          </p>
          <p style="margin: 0 0 12px 0; font-size: 13px; color: #444; line-height: 1.4;">
            ${farm.description.substring(0, 100)}...
          </p>
          <div style="margin-bottom: 8px;">
            <strong style="font-size: 12px; color: #555;">Products:</strong>
            <div style="margin-top: 4px;">
              ${farm.products.slice(0, 3).map(product => 
                `<span style="
                  background: #f0f0f0; 
                  padding: 2px 6px; 
                  border-radius: 12px; 
                  font-size: 11px; 
                  margin-right: 4px;
                  display: inline-block;
                  margin-bottom: 2px;
                ">${product}</span>`
              ).join('')}
            </div>
          </div>
          <button 
            onclick="window.location.href='/farms/${farm.id}'"
            style="
              background: #2E7D32; 
              color: white; 
              border: none; 
              padding: 6px 12px; 
              border-radius: 4px; 
              cursor: pointer; 
              font-size: 12px;
              width: 100%;
            "
          >
            View Farm Details
          </button>
        </div>
      `);

      marker.on('click', () => {
        if (onFarmSelect) {
          onFarmSelect(farm.id);
        }
      });

      if (selectedFarmId === farm.id) {
        marker.openPopup();
        map.setView([farm.location.lat, farm.location.lng], 12);
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [selectedFarmId, onFarmSelect]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-96 rounded-lg border border-gray-300"
      style={{ minHeight: '400px' }}
    />
  );
};

export default FarmMap;