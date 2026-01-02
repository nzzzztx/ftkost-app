export default function Location() {
    return (
        <section id="lokasi" className="location-section">
            <div className="container">
                {/* HEADER */}
                <div className="location-header text-center">
                    <h2>
                        <span className="text-primary">LOKASI</span>{" "}
                        <span className="text-warning">KOS</span>
                    </h2>
                    <p>
                        Terletak di titik yang sangat aksesibel, memudahkan kamu menuju
                        kampus dan pekerjaan, pusat perbelanjaan, maupun area kuliner.
                    </p>
                </div>

                <div className="location-content">
                    <div className="location-info">
                        <div className="location-tabs">
                            <button className="active">Transportasi Umum</button>
                            <button>Perkantoran</button>
                            <button>Universitas</button>
                            <button>Rumah Sakit</button>
                            <button>Pusat Perbelanjaan</button>
                        </div>

                        <ul className="location-list">
                            <li><span>Terminal Bus Cilacap</span><strong>2.0 km</strong></li>
                            <li><span>Stasiun Cilacap</span><strong>5.0 km</strong></li>
                            <li><span>Halte Bus Damri</span><strong>5.8 km</strong></li>
                            <li><span>Pelabuhan Tanjung Intan</span><strong>6.1 km</strong></li>
                            <li><span>Bandara Tunggul Wulung</span><strong>8.8 km</strong></li>
                        </ul>
                    </div>

                    <div className="location-map">
                        <iframe
                            title="Lokasi Kos"
                            src="https://www.google.com/maps?q=Jl.+Rinjani+No.172+Cilacap&output=embed"
                            loading="lazy"
                        />
                        <div className="location-address">
                            Jl. Rinjani No.172, Rawagaru, Sidanegara, Kec. Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53263
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
