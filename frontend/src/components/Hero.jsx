export default function Hero() {
    return (
        <section id="beranda" className="hero">
            {/* BACKGROUND STRIP */}
            <div className="hero__strip" />

            <div className="hero__container">
                {/* LEFT - IMAGE */}
                <div className="hero__left">
                    <img
                        className="hero__image"
                        src="/images/hero.jpg"
                        alt="Foto Kos"
                        loading="lazy"
                    />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="hero__right">
                    {/* TITLE */}
                    <h1 className="hero__title">
                        <span className="hero__titleBlue">XML</span>{" "}
                        <span className="hero__titleOrange">KOS</span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="hero__desc">
                        XML Kos hadir buat kamu yang lagi cari tempat tinggal nyaman, bersih,
                        dan strategis di Cilacap Pusat. Mulai dari kamar yang rapi, fasilitas lengkap,
                        sampai akses dekat ke berbagai pusat aktivitas.
                    </p>

                    {/* CTA */}
                    {/* <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-pill hero__cta"
                    >
                        Chat Pemilik Kos
                    </a> */}

                    {/* GALLERY - CAROUSEL (2 SLIDES) */}
                    <div className="hero__gallery">
                        <div
                            id="heroGallery"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="5000"
                        >
                            {/* DOTS */}
                            <div className="carousel-indicators hero__dots">
                                <button
                                    type="button"
                                    data-bs-target="#heroGallery"
                                    data-bs-slide-to="0"
                                    className="active"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#heroGallery"
                                    data-bs-slide-to="1"
                                />
                            </div>

                            {/* SLIDES */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="hero__thumbRow">
                                        <img src="/images/room1.jpg" alt="Kamar 1" className="hero__thumb" />
                                        <img src="/images/room2.jpg" alt="Kamar 2" className="hero__thumb" />
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="hero__thumbRow">
                                        <img src="/images/room3.jpg" alt="Kamar 3" className="hero__thumb" />
                                        <img src="/images/room4.jpg" alt="Kamar 4" className="hero__thumb" />
                                    </div>
                                </div>
                            </div>

                            {/* ARROWS */}
                            <button
                                className="carousel-control-prev hero__arrow hero__arrow--left"
                                type="button"
                                data-bs-target="#heroGallery"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>

                            <button
                                className="carousel-control-next hero__arrow hero__arrow--right"
                                type="button"
                                data-bs-target="#heroGallery"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                    </div>

                    {/* FACILITIES */}
                    <div className="hero__facilities">
                        <div className="hero__facTitle">FASILITAS BERSAMA</div>

                        <div className="hero__facGrid">
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/wifi.svg" alt="Wifi" />
                                </span>
                                Wifi kecepatan 1000Mbps
                            </div>

                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/kitchen.svg" alt="Dapur" />
                                </span>
                                Dapur bersama
                            </div>

                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/car.svg" alt="Parkir Mobil" />
                                </span>
                                Parkir mobil
                            </div>

                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/cleaning.svg" alt="Cleaning" />
                                </span>
                                Cleaning service
                            </div>

                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/bike.svg" alt="Parkir Motor" />
                                </span>
                                Parkir motor
                            </div>

                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/laundry.svg" alt="Laundry" />
                                </span>
                                Laundry
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
