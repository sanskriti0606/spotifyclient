import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './playlist.module.scss';

interface Playlist {
  _id: string;
  name: string;
  artist: string;
  song: string; // URL to the song
  image: string; // URL to the image
  duration: string;
}

const Playlist = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPlaylists = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://spotifyproject1.onrender.com/api/playlists', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Ensure token is passed for auth
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch playlists');
        }

        const data = await response.json();
        setPlaylists(data.data); // Ensure this matches your API response structure
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setError('Error fetching playlists.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <section className={styles.sectionPlaylist}>
      <div className={styles.container}>
        <h1 className={styles.mainHeading}>Playlists</h1>
        <button className={styles.backButton} onClick={() => router.back()}>Back</button>
      </div>
      <section className={`${styles.container} ${styles.gridThreeCols}`}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          playlists.map((playlist) => (
            <div key={playlist._id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={playlist.image || '/logo2.png'} alt="Playlist" />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.playlistTitle}>
                  <p>Name: {playlist.name}</p>
                  <p>Artist: {playlist.artist}</p>
                </div>
                <div className={styles.songDetails}>
                  <audio controls>
                    <source src={playlist.song} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <p>Duration: {playlist.duration}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default Playlist;
