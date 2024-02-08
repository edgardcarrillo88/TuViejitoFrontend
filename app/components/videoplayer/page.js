'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css'

const VideoPlayer = ({ src, nextVideo }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnded = () => {
            setIsPlaying(false);
            nextVideo();
        };


        const handleVideoPlay = () => {
            setIsPlaying(true);
        };


        video.addEventListener('ended', handleVideoEnded);
        video.addEventListener('play', handleVideoPlay);

        return () => {
            video.removeEventListener('ended', handleVideoEnded);
            video.removeEventListener('play', handleVideoPlay);
        };
    }, [nextVideo]);

    useEffect(() => {
        const video = videoRef.current;
        if (isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      }, [isPlaying]);

    return (
        <div className={styles.videoContainer}>
            <video className={styles.videoPlayer} ref={videoRef} autoPlay={isPlaying} muted={!isPlaying}>
                <source src={src} type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    );
};

export default VideoPlayer;
