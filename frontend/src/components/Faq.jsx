import { useState } from "react";
import "../styles/faq.css";

/* ===== FAQ DEFAULT (JANGAN DIHAPUS) ===== */
const defaultFaqs = [
    {
        q: "Bagaimana cara mendaftar atau reservasi kamar di XML Kos?",
        a: "Kamu bisa langsung menghubungi Customer Service melalui tombol WhatsApp yang tersedia."
    },
    {
        q: "Berapa lama minimal durasi sewa kamar di XML Kos?",
        a: "Minimal durasi sewa adalah bisa perhari dan 1 bulan."
    },
    {
        q: "Bagaimana aturan kunjungan tamu di XML Kos?",
        a: "Tamu diperbolehkan berkunjung dengan batas waktu tertentu dan wajib menjaga ketertiban."
    },
    {
        q: "Bagaimana dengan keamanan di XML Kos?",
        a: "Keamanan dijaga dengan CCTV, akses terbatas, dan lingkungan yang terpantau."
    },
    {
        q: "Apakah diperbolehkan membawa hewan peliharaan?",
        a: "Untuk saat ini hewan peliharaan belum diperbolehkan."
    },
    {
        q: "Apakah XML Kos memiliki sistem keamanan 24 jam?",
        a: "Ya, sistem keamanan berjalan 24 jam."
    }
];

export default function Faq({ faqs = [], primaryColor, secondaryColor, kos }) {
    const [active, setActive] = useState(null);

    const faqImage =
        kos?.hero_photo ??
        kos?.logo ??
        "/images/faq.jpg";

    const safeFaqs =
        Array.isArray(faqs) && faqs.length > 0
            ? faqs.map(item => ({
                q: item.question,
                a: item.answer,
            }))
            : defaultFaqs;

    return (
        <section id="faq" className="faq">
            <div className="faq__container">
                <div className="faq__image">
                    <img
                        src={faqImage}
                        alt={`FAQ ${kos?.nama ?? "Kos"}`}
                        loading="lazy"
                    />
                </div>

                <div className="faq__content">
                    <h2 className="faq__title">
                        FAQ <span>KOS</span>
                    </h2>
                    <p className="faq__subtitle">
                        Di bagian FAQ ini, kamu bisa menemukan jawaban dari pertanyaan-pertanyaan umum seputar kos.
                    </p>

                    <div className="faq__list">
                        {safeFaqs.map((item, i) => (
                            <div
                                key={i}
                                className={`faq__item ${active === i ? "active" : ""}`}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    {item.q}
                                    <span className="faq__icon">
                                        {active === i ? "−" : "›"}
                                    </span>
                                </button>

                                <div className="faq__answer">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
