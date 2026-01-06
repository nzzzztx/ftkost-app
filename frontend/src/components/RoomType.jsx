export default function RoomType({ kosList = [], loading = false }) {
    console.log('ROOMTYPE kosList:', kosList);
    console.log('ROOMTYPE loading:', loading);

    return (
        <section id="tipe-kamar" className="room-section">
            <div className="container">

                {/* ================= HEADER ================= */}
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

                {/* ================= OUTER CAROUSEL ================= */}
                {!loading && kosList.length > 0 && (
                    <div
                        id="roomTypeCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">

                            {kosList.flatMap((kos) =>
                                kos.rooms?.map((room, index) => (
                                    <div
                                        key={room.id}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        {/* ================= ROOM CARD ================= */}
                                        <div className="room-card-wrapper">

                                            <div className="room-card">

                                                {/* ===== FOTO / INNER CAROUSEL ===== */}
                                                <div
                                                    id={`room-${room.id}`}
                                                    className="carousel slide room-carousel"
                                                    data-bs-ride="carousel"
                                                >
                                                    <div className="carousel-inner">

                                                        {room.photos && room.photos.length > 0 ? (
                                                            room.photos.map((photo, i) => (
                                                                <div
                                                                    key={photo.id}
                                                                    className={`carousel-item ${i === 0 ? 'active' : ''}`}
                                                                >
                                                                    <img
                                                                        src={photo.url}
                                                                        alt={room.nama}
                                                                        className="w-100"
                                                                    />
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className="carousel-item active">
                                                                <img
                                                                    src="/images/room-placeholder.jpg"
                                                                    alt="No image"
                                                                    className="w-100"
                                                                />
                                                            </div>
                                                        )}

                                                    </div>

                                                    <button
                                                        className="carousel-control-prev"
                                                        type="button"
                                                        data-bs-target={`#room-${room.id}`}
                                                        data-bs-slide="prev"
                                                    >
                                                        <span className="carousel-control-prev-icon" />
                                                    </button>

                                                    <button
                                                        className="carousel-control-next"
                                                        type="button"
                                                        data-bs-target={`#room-${room.id}`}
                                                        data-bs-slide="next"
                                                    >
                                                        <span className="carousel-control-next-icon" />
                                                    </button>
                                                </div>

                                                {/* ===== BODY ===== */}
                                                <div className="room-body">
                                                    <h5>{room.nama}</h5>

                                                    <div className="room-price">
                                                        Rp {room.harga_bulanan?.toLocaleString('id-ID')}
                                                        <span> / bulan</span>
                                                    </div>

                                                    <div className="room-tags">
                                                        <span>{room.aturan_gender}</span>
                                                        <span>Kapasitas {room.kapasitas}</span>
                                                        <span>Lantai {room.lantai}</span>
                                                    </div>

                                                    {/* ===== FASILITAS ===== */}
                                                    <ul className="room-facilities badges">
                                                        {room.facilities && room.facilities.length > 0 ? (
                                                            room.facilities.map((f) => (
                                                                <li key={f.id} className="facility-badge">
                                                                    {f.name}
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li className="facility-empty">
                                                                Fasilitas belum tersedia
                                                            </li>
                                                        )}
                                                    </ul>

                                                    <a
                                                        href="https://wa.me/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-primary btn-pill w-100"
                                                    >
                                                        Chat Pemilik Kos
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                        </div>

                        {/* ===== OUTER CONTROLS ===== */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#roomTypeCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" />
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#roomTypeCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                )}

                {/* ================= FALLBACK STATIC (TETAP ADA) ================= */}
                <div className="room-grid">
                    <div className="room-card">{/* static A */}</div>
                    <div className="room-card highlight">{/* static B */}</div>
                    <div className="room-card">{/* static C */}</div>
                </div>

            </div>
        </section>
    );
}
