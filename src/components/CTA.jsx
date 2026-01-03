export default function CTA() {
    return (
        <section className="cta-orange">
            <div className="cta-bg" />

            <div className="cta-container">
                <div className="cta-left">
                    <img
                        src="/logo/logo.svg"
                        alt="XML Kos"
                        className="cta-logo"
                    />

                    <p className="cta-desc">
                        XML Kos adalah hunian nyaman dengan lokasi strategis,
                        lingkungan aman, dan pengelolaan rapi untuk mendukung
                        aktivitas harianmu.
                    </p>

                    <div className="cta-social">
                        <a
                            href="https://wa.me/62812XXXXXXXX"
                            target="_blank"
                            aria-label="WhatsApp"
                        >
                            <i className="bi bi-whatsapp"></i>
                            0812-xxxx-xxxx
                        </a>

                        <a
                            href="https://instagram.com/xml.kos"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram"></i>
                            @xml.kos
                        </a>

                        <a
                            href="mailto:info@xmlkos.com"
                            aria-label="Email"
                        >
                            <i className="bi bi-envelope"></i>
                            info@xmlkos.com
                        </a>
                    </div>
                </div>


                <div className="cta-center">
                    <h2>Yuk, Mulai Hidup Nyaman di XML Kos!</h2>
                    <p>
                        Temukan tempat tinggal yang bikin kamu betah setiap hari.
                        Saatnya pindah ke kos yang benar-benar cocok buat kebutuhanmu.
                    </p>

                    <a
                        href="https://wa.me/628xxxxxxxxxx"
                        target="_blank"
                        className="cta-btn"
                    >
                        Chat Pemilik Kos
                    </a>
                </div>

                <div className="cta-right">
                    <h4>ALAMAT KANTOR</h4>
                    <p>
                        Jl. Rinjani No.172, Rawagaru, Sidareja, Kec. Cilacap Tengah,
                        Kabupaten Cilacap, Jawa Tengah 53263
                    </p>

                    <iframe
                        src="https://www.google.com/maps?q=Jl.%20Rinjani%20No.172%20Cilacap&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <a
                        href="https://maps.google.com?q=Jl.+Rinjani+No.172+Cilacap"
                        target="_blank"
                        className="cta-map-link"
                    >
                        Lihat di Maps →
                    </a>
                </div>

            </div>
        </section>
    );
}
