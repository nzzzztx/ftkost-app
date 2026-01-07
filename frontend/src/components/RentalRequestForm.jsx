import { useState, useEffect } from "react";

export default function RentalRequestForm({ room }) {
    const [form, setForm] = useState({
        room_id: "",
        tipe_sewa: "bulanan", // default
        nama_penyewa: "",
        no_wa: "",
        alamat: "",
        catatan: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /* ===============================
       SET ROOM ID SAAT DATA ADA
    =============================== */
    useEffect(() => {
        if (room?.id) {
            setForm((prev) => ({
                ...prev,
                room_id: room.id,
            }));
        }
    }, [room]);

    /* ===============================
       HANDLE INPUT CHANGE
    =============================== */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /* ===============================
       BUILD WHATSAPP MESSAGE
    =============================== */
    const buildWaMessage = () => {
        const harga =
            form.tipe_sewa === "bulanan"
                ? `Rp ${room.harga_bulanan.toLocaleString("id-ID")} / bulan`
                : `Rp ${room.harga_harian.toLocaleString("id-ID")} / hari`;

        return `
Halo Customer Service XML Kos 👋

Saya ingin mengajukan permintaan sewa:

🏠 Rumah Kos
${room.kos.nama}

🛏️ Kamar
${room.nama}

📅 Tipe Sewa
${form.tipe_sewa.toUpperCase()}

💰 Harga
${harga}

👤 Nama
${form.nama_penyewa}

📱 WhatsApp
${form.no_wa}

📍 Alamat
${form.alamat}

📝 Catatan
${form.catatan || "-"}

Terima kasih 🙏
`.trim();
    };

    /* ===============================
       SUBMIT FORM
    =============================== */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("http://127.0.0.1:8000/api/rental-requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                const firstError =
                    data?.message ||
                    Object.values(data?.errors || {})[0]?.[0] ||
                    "Gagal mengirim permintaan";
                throw new Error(firstError);
            }

            // 📩 OPEN WHATSAPP (CS DEFAULT)
            const waNumber = "6282325308886";
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
                buildWaMessage()
            )}`;
            window.open(waUrl, "_blank");

            // reset input (room & tipe tetap)
            setForm((prev) => ({
                ...prev,
                nama_penyewa: "",
                no_wa: "",
                alamat: "",
                catatan: "",
            }));
        } catch (err) {
            setError(err.message);
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
                <div className="text-muted">
                    {room.kos.nama}
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="room_id" value={form.room_id} />

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
