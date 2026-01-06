import { useState, useEffect, useRef } from 'react';

export default function RoomType({ kosList = [], loading = false }) {
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null); // 🔥 tambahan

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const allRooms = kosList.flatMap((kos) =>
        (kos.rooms || []).map((room) => ({
            ...room,
            kos,
        }))
    );

    // 🔥 TIDAK PAKAI carousel slide logic lagi
    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const amount = isMobile ? 360 : 420;
        scrollRef.current.scrollBy({
            left: direction === 'next' ? amount : -amount,
            behavior: 'smooth',
        });
    };

    return (
        <section id="tipe-kamar" className="room-section">
            <div className="container position-relative">

                {/* HEADER */}
                <div className="room-header text-center">
                    <h2>
                        <span className="text-primary">TIPE</span>{' '}
                        <span className="text-warning">KAMAR</span>
                    </h2>
                    <p>
                        Pilih tipe kamar yang paling pas buat kebutuhan dan gaya hidup kamu.
                        Semua kamar sudah disiapkan dengan kenyamanan maksimal.
                    </p>
                </div>

                {!loading && allRooms.length > 0 && (
                    <>
                        {/* 🔥 OUTER BUTTON – MANUAL
                        <button
                            type="button"
                            className="room-outer-btn room-outer-btn--left"
                            onClick={() => scroll('prev')}
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            className="room-outer-btn room-outer-btn--left"
                            onClick={() => scroll('prev')}
                        >
                            ‹
                        </button> */}

                        {/* 🔥 GANTI FUNGSI: BUKAN BOOTSTRAP CAROUSEL */}
                        <div
                            id="roomTypeCarousel"
                            className="room-scroll-wrapper"
                            ref={scrollRef}
                        >
                            <div className="room-slide">
                                {allRooms.map(room => (
                                    <div key={room.id} className="room-card-wrapper">
                                        <div className="room-card">

                                            {/* INNER CAROUSEL FOTO – TETAP */}
                                            <div
                                                id={`inner-carousel-${room.id}`}
                                                className="carousel slide room-carousel"
                                                data-bs-interval="false"
                                            >
                                                <div className="carousel-inner">
                                                    {room.photos?.length ? (
                                                        room.photos.map((photo, i) => (
                                                            <div
                                                                key={i}
                                                                className={`carousel-item ${i === 0 ? 'active' : ''}`}
                                                            >
                                                                <img src={photo.url} alt={room.nama} />
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="carousel-item active">
                                                            <img src="/images/room-placeholder.jpg" />
                                                        </div>
                                                    )}
                                                </div>

                                                <button
                                                    className="carousel-control-prev inner-nav-btn"
                                                    type="button"
                                                    data-bs-target={`#inner-carousel-${room.id}`}
                                                    data-bs-slide="prev"
                                                />
                                                <button
                                                    className="carousel-control-next inner-nav-btn"
                                                    type="button"
                                                    data-bs-target={`#inner-carousel-${room.id}`}
                                                    data-bs-slide="next"
                                                />
                                            </div>

                                            <div className="room-body">
                                                {/* Nama Kamar */}
                                                <h5 className="room-title">{room.nama}</h5>

                                                {/* Nama Rumah Kos */}
                                                <div className="room-kos-name">
                                                    {room.kos?.nama ?? 'Rumah Kos'}
                                                </div>

                                                {/* Harga */}
                                                <div className="room-price">
                                                    Rp {room.harga_bulanan?.toLocaleString('id-ID')}
                                                    <span> / bulan</span>
                                                </div>

                                                {/* Harga Harian (opsional) */}
                                                {room.harga_harian && (
                                                    <div className="room-price-daily">
                                                        Rp {room.harga_harian.toLocaleString('id-ID')} / hari
                                                    </div>
                                                )}

                                                {/* Info Ringkas */}
                                                <div className="room-meta">
                                                    <span>{room.aturan_gender}</span>
                                                    <span>Lantai {room.lantai}</span>
                                                    <span>Kapasitas {room.kapasitas}</span>
                                                </div>

                                                {/* Fasilitas (dibatasi max 6 biar rapi) */}
                                                {room.facilities && room.facilities.length > 0 && (
                                                    <ul className="room-facilities badges">
                                                        {room.facilities.slice(0, 8).map((f) => (
                                                            <li key={f.id} className="facility-badge">
                                                                {f.name}
                                                            </li>
                                                        ))}
                                                        {room.facilities.length > 8 && (
                                                            <li className="facility-badge more">
                                                                +{room.facilities.length - 8} lainnya
                                                            </li>
                                                        )}
                                                    </ul>
                                                )}

                                                {/* CTA */}
                                                <a
                                                    href={`https://wa.me/?text=Halo, saya tertarik dengan kamar ${room.nama}`}
                                                    className="btn btn-warning w-100 fw-bold mt-3"
                                                >
                                                    Chat Pemilik Kos
                                                </a>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
