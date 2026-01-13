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

    useEffect(() => {
        if (!kos) return;

        document.title = kos.nama ?? "XML Kos";

        const faviconUrl =
            kos.logo_url || kos.logo || "/logo-depan.jpg";

        if (!faviconUrl) return;

        document
            .querySelectorAll(
                "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
            )
            .forEach(el => el.remove());

        const icon = document.createElement("link");
        icon.rel = "icon";
        icon.type = "image/png";
        icon.href = faviconUrl + "?v=" + Date.now();

        const shortcut = document.createElement("link");
        shortcut.rel = "shortcut icon";
        shortcut.href = icon.href;

        const apple = document.createElement("link");
        apple.rel = "apple-touch-icon";
        apple.href = icon.href;

        document.head.append(icon, shortcut, apple);
    }, [kos]);



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
            <Faq
                faqs={kos.faqs}
                primaryColor={kos.primary_color}
                secondaryColor={kos.secondary_color}
                kos={kos}
            />
            <CTA kos={kos} />
        </KosProvider>
    );
}
