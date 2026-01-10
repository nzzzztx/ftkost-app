import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function RoomType({ kosList = [], loading = false }) {
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef(null);
    const BACKEND_URL = "http://127.0.0.1:8000";

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const normalizedKosList = Array.isArray(kosList)
        ? kosList
        : kosList
            ? [kosList]
            : [];

    const allRooms = normalizedKosList.flatMap((kos) =>
        (Array.isArray(kos.rooms) ? kos.rooms : []).map((room) => ({
            ...room,
            kos,
        }))
    );

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const amount = isMobile ? 360 : 420;

        scrollRef.current.scrollBy({
            left: direction === "next" ? amount : -amount,
            behavior: "smooth",
        });
    };

    return (
        <section id="tipe-kamar" className="room-section">
            <div className="container position-relative">

                {/* HEADER */}
                <div className="room-header text-center">
                    <h2>
                        <span className="text-primary">TIPE</span>{" "}
                        <span className="text-warning">KAMAR</span>
                    </h2>
                    <p>
                        Pilih tipe kamar yang paling pas buat kebutuhan dan gaya hidup kamu.
                        Semua kamar sudah disiapkan dengan kenyamanan maksimal.
                    </p>
                </div>

                {/* LIST KAMAR */}
                {!loading && allRooms.length > 0 && (
                    <div
                        id="roomTypeCarousel"
                        className="room-scroll-wrapper"
                        ref={scrollRef}
                    >
                        <div className="room-slide">
                            {allRooms.map((room) => (
                                <div key={room.id} className="room-card-wrapper">
                                    <div className="room-card">

                                        {/* FOTO KAMAR */}
                                        <div
                                            id={`inner-carousel-${room.id}`}
                                            className="carousel slide room-carousel"
                                            data-bs-interval="false"
                                        >
                                            <div className="carousel-inner">
                                                {Array.isArray(room.photos) && room.photos.length > 0 ? (
                                                    room.photos.map((photo, i) => {
                                                        const src =
                                                            photo?.url ??
                                                            (photo?.path
                                                                ? `${BACKEND_URL}/storage/${photo.path}`
                                                                : "/images/room-placeholder.jpg");

                                                        return (
                                                            <div
                                                                key={i}
                                                                className={`carousel-item ${i === 0 ? "active" : ""}`}
                                                            >
                                                                <img
                                                                    src={src}
                                                                    alt={room.nama}
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    <div className="carousel-item active">
                                                        <img
                                                            src="/images/room-placeholder.jpg"
                                                            alt="Room placeholder"
                                                            loading="lazy"
                                                        />
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

                                        {/* BODY */}
                                        <div className="room-body">
                                            <h5 className="room-title">{room.nama}</h5>

                                            <div className="room-kos-name">
                                                {room.kos?.slug ? (
                                                    <Link
                                                        to={`/kos/${room.kos.slug}`}
                                                        className="text-decoration-none"
                                                    >
                                                        {room.kos.nama}
                                                    </Link>
                                                ) : (
                                                    "Rumah Kos"
                                                )}
                                            </div>

                                            <div className="room-price">
                                                Rp {room.harga_bulanan?.toLocaleString("id-ID")}
                                                <span> / bulan</span>
                                            </div>

                                            {room.harga_harian && (
                                                <div className="room-price-daily">
                                                    Rp {room.harga_harian.toLocaleString("id-ID")} / hari
                                                </div>
                                            )}

                                            <div className="room-meta">
                                                <span>{room.aturan_gender}</span>
                                                <span>Lantai {room.lantai}</span>
                                                <span>Kapasitas {room.kapasitas}</span>
                                            </div>

                                            {Array.isArray(room.facilities) && room.facilities.length > 0 && (
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

                                            <Link
                                                to={`/sewa/${room.id}?kos=${room.kos?.slug}`}
                                                className="btn btn-warning w-100 fw-bold mt-3"
                                            >
                                                Sewa Sekarang
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {!loading && allRooms.length === 0 && (
                    <p className="text-center text-muted mt-4">
                        Belum ada kamar tersedia
                    </p>
                )}
            </div>
        </section>
    );
}
