"use client";

interface LocationMapProps {
  latitude: number;
  longitude: number;
  zoom?: number; // 1–20
  markerTitle?: string;
}

export function LocationMap({
  latitude,
  longitude,
  zoom = 16,
  markerTitle = "Exclusivo Barbershop",
}: LocationMapProps) {
  // Convert zoom to bounding box size
  const zoomFactor = 1 / zoom; // higher zoom means smaller box
  const latDiff = 0.02 * zoomFactor;
  const lonDiff = 0.02 * zoomFactor;

  const minLon = longitude - lonDiff;
  const maxLon = longitude + lonDiff;
  const minLat = latitude - latDiff;
  const maxLat = latitude + latDiff;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden"
      style={{ minHeight: "300px" }}
    >
      <iframe
        src={mapUrl}
        className="w-full h-full border-0 grayscale invert opacity-90"
        style={{ minHeight: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${markerTitle}`}
      />
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-border">
        <p className="font-semibold text-sm">{markerTitle}</p>
        <p className="text-xs text-muted-foreground">
          C56G+MP3, Calapan City, Oriental Mindoro
        </p>
      </div>
    </div>
  );
}
