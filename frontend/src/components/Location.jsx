export default function Location({ kos }) {
    const address = kos?.alamat ?? "";

    const mapSrc = address
        ? `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`
        : "https://www.google.com/maps?q=Indonesia&z=5&output=embed";

    return (
        <section id="lokasi" className="location-section">
            <div className="container">
                <div className="location-header">
                    <h2 className="location-title">
                        <span className="location-title-blue">LOKASI</span>{" "}
                        <span className="location-title-orange">KOS</span>
                    </h2>
                    <p className="location-desc">
                        Terletak di titik yang sangat aksesibel, memudahkan kamu menuju
                        Pusat Kota dan juga kampus, pekerjaan, pusat perbelanjaan, maupun area kuliner.
                    </p>
                </div>

                <div className="location-map-full">
                    <iframe
                        title="Lokasi Kos"
                        src={mapSrc}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="location-address">
                        {address || "Alamat belum tersedia"}
                    </div>
                </div>

            </div>
        </section>
    );
}
