import { useState } from "react";

export default function Location() {
    const [activeTab, setActiveTab] = useState("transportasi");

    const locations = {
        transportasi: [
            { name: "Terminal Bus Cilacap", distance: "2.0 km" },
            { name: "Stasiun Cilacap", distance: "5.0 km" },
            { name: "Halte Bus Damri", distance: "5.8 km" },
            { name: "Pelabuhan Tanjung Intan", distance: "6.1 km" },
            { name: "Bandara Tunggul Wulung", distance: "8.8 km" },
        ],
        perkantoran: [
            { name: "Mall Pelayanan Publik Cilacap", distance: "1.9 km" },
            { name: "Kantor Bupati Cilacap", distance: "3.2 km" },
            { name: "Kantor Pajak Pratama", distance: "4.1 km" },
            { name: "Dinas Pendidikan", distance: "4.6 km" },
        ],
        universitas: [
            { name: "Universitas Al-Irsyad Cilacap", distance: "2.6 km" },
            { name: "Politeknik Negeri Cilacap", distance: "2.8 km" },
            { name: "Amikom Purwokerto Kampus 2 Cilacap", distance: "4.6 km" },
            { name: "Universitas Jenderal Soedirman", distance: "6.0 km" },
        ],
        rumahsakit: [
            { name: "RSI Fatimah Cilacap", distance: "1.0 km" },
            { name: "RSUD Cilacap", distance: "2.5 km" },
            { name: "RS Pertamina Cilacap", distance: "4.3 km" },
        ],
        mall: [
            { name: "Superindo Cilacap", distance: "1.7 km" },
            { name: "Rita SuperMall", distance: "3.7 km" },
            { name: "Cilacap Plaza", distance: "4.9 km" },
        ],
    };

    return (
        <section id="lokasi" className="location-section">
            <div className="container">
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
                            <button
                                className={activeTab === "transportasi" ? "active" : ""}
                                onClick={() => setActiveTab("transportasi")}
                            >
                                Transportasi Umum
                            </button>
                            <button
                                className={activeTab === "perkantoran" ? "active" : ""}
                                onClick={() => setActiveTab("perkantoran")}
                            >
                                Perkantoran
                            </button>
                            <button
                                className={activeTab === "universitas" ? "active" : ""}
                                onClick={() => setActiveTab("universitas")}
                            >
                                Universitas
                            </button>
                            <button
                                className={activeTab === "rumahsakit" ? "active" : ""}
                                onClick={() => setActiveTab("rumahsakit")}
                            >
                                Rumah Sakit
                            </button>
                            <button
                                className={activeTab === "mall" ? "active" : ""}
                                onClick={() => setActiveTab("mall")}
                            >
                                Pusat Perbelanjaan
                            </button>
                        </div>

                        <ul className="location-list">
                            {locations[activeTab].map((item, index) => (
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <strong>{item.distance}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="location-map">
                        <iframe
                            title="Lokasi Kos"
                            src="https://www.google.com/maps?q=Jl.+Rinjani+No.172+Cilacap&output=embed"
                            loading="lazy"
                        />
                        <div className="location-address">
                            Jl. Rinjani No.172, Rawagaru, Sidanegara, Kec. Cilacap Tengah,
                            Kabupaten Cilacap, Jawa Tengah 53263
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
