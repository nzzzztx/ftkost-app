export default function CTA({ kos }) {
    if (!kos) return null;

    const logo = kos.logo_url || "/logo/logo.svg";
    const BACKEND_URL = "http://127.0.0.1:8000";
    const ctaTitle =
        kos.cta_title || `Yuk, Mulai Hidup Nyaman di ${kos.nama}`;

    const description = kos.deskripsi || "";

    const waNumber = kos.contact_whatsapp
        ? kos.contact_whatsapp.replace(/\D/g, "")
        : null;

    const waLink = waNumber ? `https://wa.me/${waNumber}` : null;

    const instagram = kos.contact_instagram
        ? kos.contact_instagram.replace("@", "")
        : null;

    const email = kos.contact_email || null;

    const addressLine1 = kos.alamat || "";

    const addressLine2 = [
        kos.kota,
        kos.provinsi,
        kos.kode_pos,
    ].filter(Boolean).join(", ");

    const mapsQuery = encodeURIComponent(
        [addressLine1, addressLine2].filter(Boolean).join(", ")
    );

    const mapsEmbed = mapsQuery
        ? `https://www.google.com/maps?q=${mapsQuery}&output=embed`
        : null;

    const mapsLink = mapsQuery
        ? `https://maps.google.com?q=${mapsQuery}`
        : null;

    return (
        <section className="cta-orange">
            <div className="cta-bg"
                style={{
                    backgroundImage: kos.photos?.length
                        ? `url(${BACKEND_URL}/storage/${kos.photos[0]})`
                        : `url("/images/footer.jpg")`,
                }} />

            <div className="cta-container">
                <div className="cta-left">
                    <img
                        src={logo}
                        alt={kos.nama}
                        className="cta-logo"
                    />

                    <div className="cta-social">
                        {waLink && (
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-whatsapp" />
                                {kos.contact_whatsapp}
                            </a>
                        )}

                        {instagram && (
                            <a
                                href={`https://instagram.com/${instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-instagram" />
                                @{instagram}
                            </a>
                        )}

                        {email && (
                            <a href={`mailto:${email}`}>
                                <i className="bi bi-envelope" />
                                {email}
                            </a>
                        )}
                    </div>
                </div>

                <div className="cta-center">
                    <h2>{ctaTitle}</h2>

                    {description && (
                        <p className="cta-desc">
                            {description}
                        </p>
                    )}

                    <a
                        href="#tipe-kamar"
                        className="cta-btn"
                    >
                        Sewa Sekarang
                    </a>
                </div>

                <div className="cta-right">
                    <h4>ALAMAT KOS</h4>

                    {addressLine1 && <p>{addressLine1}</p>}
                    {addressLine2 && <p>{addressLine2}</p>}

                    {mapsEmbed && (
                        <iframe
                            src={mapsEmbed}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    )}

                    {mapsLink && (
                        <a
                            href={mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-map-link"
                        >
                            Lihat di Maps →
                        </a>
                    )}
                </div>

            </div>
        </section>
    );
}
