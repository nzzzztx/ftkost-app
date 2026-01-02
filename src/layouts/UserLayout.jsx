import Navbar from '../components/Navbar';

export default function UserLayout({ children }) {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '96px' }}>
                {children}
            </div>
        </>
    );
}
