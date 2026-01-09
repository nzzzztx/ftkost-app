import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKosBySlug } from "../services/kosService";

export default function Hero() {
    const { slug } = useParams();

    const [kos, setKos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchKos = async () => {
            try {
                const res = await getKosBySlug(slug);
                const data = res?.data ?? res; // aman axios / fetch

                if (isMounted) {
                    setKos(data);
                }
            } catch (error) {
                console.error("FETCH KOS ERROR:", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchKos();
        return () => {
            isMounted = false;
        };
    }, [slug]);

    if (loading || !kos) return null;

    /* ===============================
     | AMBIL FOTO KAMAR (UNTUK HERO)
     =============================== */
    const roomPhotos =
        kos.rooms?.flatMap((room) => room.photos ?? []) ?? [];

    const heroImage =
        roomPhotos[0]?.url ||
        roomPhotos[0]?.path && `/storage/${roomPhotos[0].path}` ||
        "/images/hero.jpg";

    return (
        <section id="beranda" className="hero">
            {/* BACKGROUND STRIP */}
            <div className="hero__strip" />

            <div className="hero__container">
                {/* LEFT - IMAGE */}
                <div className="hero__left">
                    <img
                        className="hero__image"
                        src={heroImage}
                        alt={kos.nama}
                        loading="lazy"
                    />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="hero__right">
                    <h1 className="hero__title">
                        <span className="hero__titleBlue">
                            {kos.nama.split(" ").slice(0, 2).join(" ")}
                        </span>{" "}
                        <span className="hero__titleOrange">
                            {kos.nama.split(" ").slice(2).join(" ")}
                        </span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="hero__desc">
                        {kos.deskripsi}
                    </p>

                    {/* GALLERY – DARI FOTO KAMAR */}
                    <div className="hero__gallery">
                        <div
                            id="heroGallery"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="5000"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="hero__thumbRow">
                                        {roomPhotos.slice(0, 2).map((photo, i) => (
                                            <img
                                                key={i}
                                                src={
                                                    photo.url ??
                                                    `/storage/${photo.path}`
                                                }
                                                alt={`Foto Kamar ${i + 1}`}
                                                className="hero__thumb"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
