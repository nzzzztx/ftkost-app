import { useEffect, useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function RoomImageViewer({ photos }) {
    const galleryRef = useRef(null);

    useEffect(() => {
        if (!galleryRef.current) return;

        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryRef.current,
            children: "a",
            pswpModule: () => import("photoswipe"),
            wheelToZoom: true,
            bgOpacity: 0.9,
            showHideAnimationType: "zoom",
        });

        lightbox.init();

        return () => lightbox.destroy();
    }, []);

    if (!photos || photos.length === 0) return null;

    return (
        <div ref={galleryRef} style={{ position: "relative" }}>
            {photos.map((photo, index) => (
                <a
                    key={index}
                    href={photo.url}
                    data-pswp-width="1600"
                    data-pswp-height="1000"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={photo.url}
                        alt={`Foto kamar ${index + 1}`}
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "220px",
                            objectFit: "cover",
                            cursor: "zoom-in",
                        }}
                    />
                </a>
            ))}
        </div>
    );
}
