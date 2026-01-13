import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getKosBySlug } from "../services/kosService";

export default function Hero() {
    const { slug } = useParams();

    const [kos, setKos] = useState(null);
    const [loading, setLoading] = useState(true);

    // FOTO BESAR = FOTO KAMAR PERTAMA
    const [activeHero, setActiveHero] = useState("/images/hero.jpg");

    // REF THUMBNAIL
    const thumbRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);

    /* ===============================
       FETCH DATA KOS
    =============================== */
    useEffect(() => {
        let isMounted = true;

        const fetchKos = async () => {
            try {
                const res = await getKosBySlug(slug);
                const data = res?.data ?? res;
                if (isMounted) setKos(data);
            } catch (err) {
                console.error("FETCH KOS ERROR:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchKos();
        return () => (isMounted = false);
    }, [slug]);

    /* ===============================
       SET FOTO HERO (AMAN, TANPA IP)
    =============================== */
    useEffect(() => {
        if (!kos) return;

        const hero =
            kos.hero_photo ??
            kos.rooms?.[0]?.photos?.[0]?.url ??
            "/images/hero.jpg";

        setActiveHero(hero);
    }, [kos]);

    /* ===============================
       FOTO KAMAR (THUMBNAIL)
    =============================== */
    const roomPhotos = Array.isArray(kos?.rooms)
        ? kos.rooms.flatMap((room) =>
            (room.photos ?? [])
                .map((photo) => photo.url)
                .filter(Boolean)
        )
        : [];

    /* ===============================
       CEK SCROLL
    =============================== */
    useEffect(() => {
        if (!thumbRef.current) return;
        const el = thumbRef.current;
        setCanScroll(el.scrollWidth > el.clientWidth);
    }, [roomPhotos]);

    /* ===============================
       SCROLL HANDLER
    =============================== */
    const scrollThumb = (dir) => {
        if (!thumbRef.current) return;
        const amount = thumbRef.current.offsetWidth * 0.9;
        thumbRef.current.scrollBy({
            left: dir === "next" ? amount : -amount,
            behavior: "smooth",
        });
    };

    // ⬅️ RETURN NULL DITARUH PALING BAWAH (SETELAH SEMUA HOOK)
    if (loading || !kos) return null;

    const kosName = kos.nama ?? "";
    const kosNameParts = kosName.split(" ");

    return (
        <section id="beranda" className="hero">
            <div className="hero__strip" />

            <div className="hero__container">
                {/* LEFT */}
                <div className="hero__left">
                    <img
                        className="hero__image"
                        src={activeHero}
                        alt={kosName}
                        loading="lazy"
                    />
                </div>

                {/* RIGHT */}
                <div className="hero__right">
                    <h1 className="hero__title">
                        <span className="hero__titleBlue">
                            {kosNameParts.slice(0, 2).join(" ")}
                        </span>{" "}
                        <span className="hero__titleOrange">
                            {kosNameParts.slice(2).join(" ")}
                        </span>
                    </h1>

                    <p className="hero__desc">{kos.deskripsi}</p>

                    {/* THUMBNAIL */}
                    <div className="hero__gallery">
                        <button
                            className="hero__arrow hero__arrow--left"
                            onClick={() => scrollThumb("prev")}
                            disabled={!canScroll}
                        >
                            ‹
                        </button>

                        <div className="hero__thumbRow" ref={thumbRef}>
                            {roomPhotos.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    className="hero__thumb"
                                    alt={`Foto kamar ${i + 1}`}
                                    loading="lazy"
                                />
                            ))}
                        </div>

                        <button
                            className="hero__arrow hero__arrow--right"
                            onClick={() => scrollThumb("next")}
                            disabled={!canScroll}
                        >
                            ›
                        </button>
                    </div>

                    {/* FASILITAS (AMAN) */}
                    <div className="hero__facilities">
                        <div className="hero__facTitle">FASILITAS BERSAMA</div>
                        <div className="hero__facGrid">
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/wifi.svg" alt="Wifi" />
                                </span>
                                Wifi
                            </div>
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/kitchen.svg" alt="Dapur" />
                                </span>
                                Dapur bersama
                            </div>
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/car.svg" alt="Parkir Mobil" />
                                </span>
                                Parkir mobil
                            </div>
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/bike.svg" alt="Parkir Motor" />
                                </span>
                                Parkir motor
                            </div>
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/laundry.svg" alt="Laundry" />
                                </span>
                                Laundry
                            </div>
                            <div className="hero__facItem">
                                <span className="hero__facIcon">
                                    <img src="/icons/cleaning.svg" alt="Cleaning" />
                                </span>
                                Cleaning Service
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
