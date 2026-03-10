import { MapPin } from 'lucide-react';

const MapSection = () => {
  const regions = [
    { name: 'West Africa', x: 48, y: 45 },
    { name: 'Central Africa', x: 55, y: 50 },
    { name: 'Dubai HQ', x: 62, y: 35 },
  ];

  return (
    <div className="map-container">
      <svg 
        viewBox="0 0 100 60" 
        style={{ 
          width: '100%', 
          height: '100%',
          backgroundColor: 'var(--color-bg-secondary)'
        }}
        aria-label="World map showing Bondze geographic footprint"
      >
        {/* Simplified world map background - Africa and Middle East focus */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7f9fc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        
        {/* Africa continent simplified shape */}
        <path
          d="M35,20 
             Q30,25 28,35 
             Q25,45 30,55 
             Q40,60 50,58 
             Q60,55 62,45 
             Q65,35 60,25 
             Q55,15 45,15 
             Q40,15 35,20 Z"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />
        
        {/* Arabian Peninsula */}
        <path
          d="M55,25 
             Q58,30 62,32 
             Q68,30 72,28 
             Q75,30 74,35 
             Q72,40 68,42 
             Q62,40 60,35 
             Q58,30 55,25 Z"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />
        
        {/* Europe */}
        <path
          d="M30,5 
             Q35,0 50,0 
             Q65,0 70,5 
             Q75,10 70,15 
             Q60,18 50,15 
             Q40,12 35,15 
             Q30,10 30,5 Z"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />
        
        {/* Connection line from Africa to Dubai */}
        <line
          x1="51"
          y1="45"
          x2="62"
          y2="35"
          stroke="var(--color-gold)"
          strokeWidth="0.4"
          strokeDasharray="2,1"
          opacity="0.6"
        />
        
        {/* Region markers */}
        {regions.map((region, index) => (
          <g key={index}>
            {/* Marker circle */}
            <circle
              cx={region.x}
              cy={region.y}
              r="1.5"
              fill="var(--color-gold)"
              stroke="white"
              strokeWidth="0.3"
            />
            {/* Pulse effect ring */}
            <circle
              cx={region.x}
              cy={region.y}
              r="2.5"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="0.2"
              opacity="0.4"
            />
            {/* Region label */}
            <text
              x={region.x}
              y={region.y - 3}
              textAnchor="middle"
              fontSize="2"
              fontWeight="600"
              fill="var(--color-text-primary)"
            >
              {region.name}
            </text>
          </g>
        ))}
      </svg>
      
      <div className="map-placeholder" style={{ pointerEvents: 'none', opacity: 0 }}>
        <MapPin size={48} />
        <p>Map Loading...</p>
      </div>
    </div>
  );
};

export default MapSection;
