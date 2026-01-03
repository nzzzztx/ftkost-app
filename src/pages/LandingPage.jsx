import Hero from '../components/Hero';
import Location from '../components/Location';
import RoomType from '../components/RoomType';
import Gallery from '../components/Gallery';
import Testimoni from '../components/Testimoni';
import Faq from '../components/faq';
import CTA from '../components/CTA';


export default function LandingPage() {
    return (
        <>
            <Hero />
            <Location />
            <RoomType />
            <Gallery />
            <Testimoni />
            <Faq />
            <CTA />
        </>
    );
}
