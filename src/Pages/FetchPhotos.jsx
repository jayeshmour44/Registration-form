import React, { useState, useEffect } from 'react';
import './FetchPhotos.css'; // 👈 we'll style it here

const FetchPhotos = () => {
  const [photos, setPhotos] = useState([]);      // store photos data
  const [loading, setLoading] = useState(true);  // track loading

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.slice(0, 30)); // 👈 show only first 30 photos for better performance
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading photos...</p>;

  return (
    <div className="photos-container">
      <h2 className="photos-title">📸 Photo Gallery</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h4>{photo.title}</h4>
            <p><strong>Album ID:</strong> {photo.albumId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchPhotos;
