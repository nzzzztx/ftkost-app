export default function Gallery() {
    const features = [
        {
            title: "DAPUR & RUANG MAKAN",
            images: ["/images/room1.jpg", "/images/room2.jpg", "/images/room3.jpg"],
        },
        {
            title: "RUANG TAMU",
            images: ["/images/room4.jpg", "/images/room5.jpg", "/images/room6.jpg"],
        },
        {
            title: "RUANG LAUNDRY",
            images: ["/images/room7.jpg", "/images/room8.jpg", "/images/room9.jpg"],
        },
        {
            title: "ROOFTOP",
            images: ["/images/room1.jpg", "/images/room2.jpg"],
        },
        {
            title: "PARKIRAN",
            images: ["/images/room3.jpg", "/images/room4.jpg"],
        },
        {
            title: "WORKING SPACE",
            images: ["/images/room5.jpg", "/images/room6.jpg"],
        },
    ];

    return (
        <section id="galeri" className="gallery">
            <div className="gallery__strip" />

            <div className="container">
                {/* HEADER */}
                <div className="gallery__header">
                    <h2>
                        <span className="text-primary">GALERI</span>{" "}
                        <span className="text-warning">KOS</span>
                    </h2>
                    <p>
                        Lihat detail kos secara lengkap, mulai fasilitas sampai suasana
                        lingkungannya.
                    </p>
                </div>

                {/* HERO IMAGE */}
                <div className="gallery__hero">
                    <img src="/images/hero.jpg" alt="Galeri Utama" />
                    <button className="gallery__play">▶</button>
                </div>

                {/* FEATURE GRID */}
                <div className="gallery__grid">
                    {features.map((item, i) => (
                        <GalleryCard key={i} {...item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===============================
   SINGLE CARD WITH CAROUSEL
================================ */
function GalleryCard({ title, images, index }) {
    const carouselId = `galleryCard${index}`;

    return (
        <div className="galleryCard">
            <div
                id={carouselId}
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-touch="true"
            >
                <div className="carousel-inner">
                    {images.map((img, i) => (
                        <div
                            className={`carousel-item ${i === 0 ? "active" : ""}`}
                            key={i}
                        >
                            <img src={img} alt={title} />
                        </div>
                    ))}
                </div>

                {/* ARROWS */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" />
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" />
                </button>
            </div>

            <div className="galleryCard__title">{title}</div>
        </div>
    );
}
