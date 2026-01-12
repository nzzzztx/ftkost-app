import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Location from "../components/Location";
import RoomType from "../components/RoomType";
import Testimoni from "../components/Testimoni";
import Faq from "../components/Faq";
import CTA from "../components/CTA";

import { getKosBySlug } from "../services/kosService";
import { KosProvider } from "../contexts/KosContext";

export default function LandingPage() {
    const { slug } = useParams();
    const [kos, setKos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const fetchKos = async () => {
            try {
                const res = await getKosBySlug(slug);
                if (mounted) {
                    setKos(res.data ?? res);
                }
            } catch (err) {
                console.error(err);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchKos();
        return () => {
            mounted = false;
        };
    }, [slug]);

    // 🔥 INI TEMPAT SET WARNA LANDING
    useEffect(() => {
        if (!kos) return;

        const root = document.documentElement;

        root.style.setProperty("--primary-color", kos.primary_color);
        root.style.setProperty("--secondary-color", kos.secondary_color);

        console.log("THEME APPLIED:", kos.primary_color, kos.secondary_color);
    }, [kos]);


    if (loading || !kos) return null;

    return (
        <KosProvider kos={kos}>
            <Navbar kos={kos} />
            <Hero kos={kos} />
            <Location kos={kos} />
            <RoomType kosList={[kos]} loading={loading} />
            <Testimoni />
            <Faq />
            <CTA kos={kos} />
        </KosProvider>
    );
}
