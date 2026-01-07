import { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import Location from '../components/Location';
import RoomType from '../components/RoomType';
import Testimoni from '../components/Testimoni';
import Faq from '../components/faq';
import CTA from '../components/CTA';

import { getKosList } from '../services/kosService';

export default function LandingPage() {
    const [kosList, setKosList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("FETCH KOS START");

        getKosList()
            .then((data) => {
                console.log("FETCH KOS RESULT:", data);
                setKosList(data);
            })
            .catch((error) => {
                console.error("FETCH KOS ERROR:", error);
            })
            .finally(() => {
                console.log("FETCH KOS END");
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Hero />
            <Location />

            <RoomType kosList={kosList} loading={loading} />

            <Testimoni />
            <Faq />
            <CTA />
        </>
    );
}
