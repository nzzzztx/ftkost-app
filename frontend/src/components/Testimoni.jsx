export default function Testimoni() {
    return (
        <section className="testimoni">
            <h2 className="testimoni__title">
                TESTIMONI <span>KOS</span>
            </h2>

            <p className="testimoni__subtitle">
                Dengar langsung pengalaman para penghuni yang sudah tinggal di kos ini.
            </p>

            {/* ⬇️ INI YANG DIUBAH */}
            <div className="testimoni__carousel">
                <div className="testi-card">
                    <div className="testi-quote">“</div>

                    <div className="testi-header">
                        <img src="/images/user1.jpg" alt="Ahmad Sahroni" />
                        <div>
                            <h4>Sahronex</h4>
                            <span>Durasi tinggal: 1 tahun 2 bulan</span>
                        </div>
                    </div>

                    <p className="testi-text">
                        Aku udah tinggal di sini cukup lama, dan alasan utamanya karena
                        benar-benar nyaman. Kamarnya tertata rapi, lingkungannya tenang,
                        dan aksesnya gampang banget ke kampus maupun tempat makan.
                    </p>
                </div>

                <div className="testi-card">
                    <div className="testi-quote">“</div>

                    <div className="testi-header">
                        <img src="/images/user2.jpg" alt="Dadang Suradang" />
                        <div>
                            <h4>Dadang Suradang</h4>
                            <span>Durasi tinggal: 2 tahun 4 bulan</span>
                        </div>
                    </div>

                    <p className="testi-text">
                        Aku suka banget sama kos ini karena semua kebutuhanku sebagai
                        mahasiswa dan freelance bisa ke-cover. Internet kencang,
                        suasananya tenang, dan keamanan terjaga.
                    </p>
                </div>

                <div className="testi-card">
                    <div className="testi-quote">“</div>

                    <div className="testi-header">
                        <img src="/images/user3.jpg" alt="Sukirman" />
                        <div>
                            <h4>Sukirman</h4>
                            <span>Durasi tinggal: 2 tahun 4 bulan</span>
                        </div>
                    </div>

                    <p className="testi-text">
                        Aku suka banget sama kos ini karena semua kebutuhanku sebagai
                        mahasiswa dan freelance bisa ke-cover. Internet kencang,
                        suasananya tenang, dan keamanan terjaga.
                    </p>
                </div>

                <button
                    className="testimoni__arrow testimoni__arrow--left"
                    onClick={() =>
                        document.querySelector(".testimoni__carousel")
                            .scrollBy({ left: -560, behavior: "smooth" })
                    }
                >
                    ‹
                </button>

                <button
                    className="testimoni__arrow testimoni__arrow--right"
                    onClick={() =>
                        document.querySelector(".testimoni__carousel")
                            .scrollBy({ left: 560, behavior: "smooth" })
                    }
                >
                    ›
                </button>
            </div>
        </section>
    );
}
