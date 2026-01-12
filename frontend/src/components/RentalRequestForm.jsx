import { useState, useEffect } from "react";
import api from "../services/api";

export default function RentalRequestForm({ room }) {
    const [form, setForm] = useState({
        room_id: "",
        kos_slug: "",
        tipe_sewa: "bulanan",
        nama_penyewa: "",
        email: "",
        no_wa: "",
        alamat: "",
        catatan: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (room?.id) {
            setForm((prev) => ({
                ...prev,
                room_id: room.id,
                kos_slug: room.kos?.slug ?? "",
            }));
        }
    }, [room]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await api.post("/rental-requests", form);
            const data = res.data;

            if (!data) {
                throw new Error("Gagal mengirim permintaan");
            }

            setSuccess(true);

            setForm((prev) => ({
                ...prev,
                nama_penyewa: "",
                email: "",
                no_wa: "",
                alamat: "",
                catatan: "",
            }));
        } catch (err) {
            setError(
                err?.response?.data?.message ||
                Object.values(err?.response?.data?.errors || {})[0]?.[0] ||
                err.message
            );
        } finally {
            setLoading(false);
        }
    };

    if (!room) return null;

    return (
        <div className="rental-form-card">
            <h4 className="mb-3">Form Permintaan Sewa</h4>

            {/* INFO KAMAR */}
            <div className="room-info mb-4">
                <strong>{room.nama}</strong>
                <div className="text-muted">{room.kos?.nama}</div>
            </div>

            {/* PESAN SUKSES */}
            {success && (
                <div className="alert alert-success">
                    <strong>Terima kasih 🙏</strong>
                    <div>
                        Terima kasih sudah mengisi form, ditunggu konfirmasi selanjutnya.
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* HIDDEN */}
                <input type="hidden" name="room_id" value={form.room_id} />
                <input type="hidden" name="kos_slug" value={form.kos_slug} />

                {/* PILIH TIPE SEWA */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Pilih Tipe Sewa</label>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tipe_sewa"
                            value="bulanan"
                            checked={form.tipe_sewa === "bulanan"}
                            onChange={handleChange}
                            id="sewaBulanan"
                        />
                        <label className="form-check-label" htmlFor="sewaBulanan">
                            Bulanan – Rp {room.harga_bulanan.toLocaleString("id-ID")} / bulan
                        </label>
                    </div>

                    <div className="form-check mt-1">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tipe_sewa"
                            value="harian"
                            checked={form.tipe_sewa === "harian"}
                            onChange={handleChange}
                            id="sewaHarian"
                        />
                        <label className="form-check-label" htmlFor="sewaHarian">
                            Harian – Rp {room.harga_harian.toLocaleString("id-ID")} / hari
                        </label>
                    </div>
                </div>

                {/* INPUT */}
                <div className="mb-3">
                    <label className="form-label">Nama Lengkap</label>
                    <input
                        type="text"
                        name="nama_penyewa"
                        className="form-control"
                        value={form.nama_penyewa}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">No WhatsApp</label>
                    <input
                        type="text"
                        name="no_wa"
                        className="form-control"
                        value={form.no_wa}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Alamat</label>
                    <textarea
                        name="alamat"
                        className="form-control"
                        rows="2"
                        value={form.alamat}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Catatan</label>
                    <textarea
                        name="catatan"
                        className="form-control"
                        rows="2"
                        value={form.catatan}
                        onChange={handleChange}
                    />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={loading}
                >
                    {loading ? "Mengirim..." : "Kirim Permintaan"}
                </button>
            </form>
        </div>
    );
}
