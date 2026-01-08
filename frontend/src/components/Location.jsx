export default function Location() {
    return (
        <section id="lokasi" className="location-section">
            <div className="container">

                {/* HEADER */}
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

                {/* MAP */}
                <div className="location-map-full">
                    <iframe
                        title="Lokasi Kos"
                        src="https://www.google.com/maps?q=Jl.+Rinjani+No.172+Cilacap&z=16&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="location-address">
                        Jl. Rinjani No.172, Rawagaru, Sidanegara, Kec. Cilacap Tengah,
                        Kabupaten Cilacap, Jawa Tengah 53263
                    </div>
                </div>

            </div>
        </section>
    );
}
