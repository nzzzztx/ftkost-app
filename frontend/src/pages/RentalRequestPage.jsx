import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import RentalRequestForm from "../components/RentalRequestForm";
import api from "../services/api";

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
                const res = await api.get(`/rooms/${roomId}`);
                const data = res?.data ?? null;

                if (!data) {
                    throw new Error("Kamar tidak ditemukan");
                }

                setRoom(data);
            } catch (err) {
                setError(
                    err?.response?.data?.message ||
                    err.message ||
                    "Gagal mengambil data kamar"
                );
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
