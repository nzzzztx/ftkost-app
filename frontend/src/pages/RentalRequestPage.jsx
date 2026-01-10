import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import RentalRequestForm from "../components/RentalRequestForm";

export default function RentalRequestPage() {
    const { roomId } = useParams();

    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!roomId) {
            setError("Room ID tidak valid");
            setLoading(false);
            return;
        }

        const fetchRoom = async () => {
            try {
                const res = await fetch(
                    `http://127.0.0.1:8000/api/rooms/${roomId}`
                );

                if (!res.ok) {
                    throw new Error("Gagal mengambil data kamar");
                }

                const data = await res.json();
                setRoom(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRoom();
    }, [roomId]);

    if (loading) {
        return <p className="text-center py-5">Loading data kamar...</p>;
    }

    if (error) {
        return <p className="text-center text-danger py-5">{error}</p>;
    }

    if (!room) {
        return <p className="text-center py-5">Kamar tidak ditemukan</p>;
    }

    return (
        <>
            <Navbar kos={room.kos} />

            <main className="page-wrapper">
                <section className="container py-5">
                    <RentalRequestForm room={room} />
                </section>
            </main>
        </>
    );
}
