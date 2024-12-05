import React from 'react';
import styles from './Gallery.module.css'; // Assuming you put the CSS styles in Gallery.css

const Gallery = () => {
  return (
    <div className={styles.gallerycontainer}>
      <h2>Gallery</h2>
      <div className={styles.gallery}>
        <div className={styles.galleryitem}><img src="https://900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg" alt="photo-1" /></div>
        <div className={styles.galleryitem}><img src="https://900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg" alt="photo-2" /></div>
        <div className={styles.galleryitem}><img src="https://900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg" alt="photo-3" /></div>
        <div className={styles.galleryitem}><img src="https://900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg" alt="photo-4" /></div>
        <div className={styles.galleryitem}><img src="https://900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg" alt="photo-5" /></div>
        <div className={styles.galleryitem}><img src="https://900degreespizza.com/wp-content/uploads/2019/10/chairs-cutlery-fork-9315.jpg" alt="photo-6" /></div>
        
      </div>

      {/* Explore More Button */}
      <div className={styles.explorebuttoncontainer}>
        <button className={styles.explorebutton}>Explore More</button>
      </div>
    </div>
  );
};

export default Gallery;
