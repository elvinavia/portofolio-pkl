import Image from "next/image";

export default function Home() {
  const skills = [
    { name: "HTML & CSS", lvl: 85, cat: "Frontend" },
    { name: "JavaScript", lvl: 75, cat: "Frontend" },
    { name: "React.js", lvl: 68, cat: "Frontend" },
    { name: "Next.js", lvl: 65, cat: "Frontend" },
    { name: "Flutter", lvl: 72, cat: "Mobile" },
    { name: "Python", lvl: 60, cat: "Backend" },
    { name: "MySQL / Supabase", lvl: 70, cat: "Database" },
    { name: "Java", lvl: 90, cat: "Dekstop" },
  ];

  const projects = [
    { icon: "🌐", title: "Website CRUD", tag: "Web Dev", desc: "Aplikasi web CRUD dengan Next.js & Supabase sebagai database backend realtime.", color: "#C9A96E" },
    { icon: "📱", title: "Aplikasi Login Flutter", tag: "Mobile", desc: "Aplikasi mobile login & register dengan Flutter dan Firebase Authentication.", color: "#8FA99A" },
    { icon: "🗄️", title: "Sistem Parkir", tag: "Database", desc: "Perancangan database sistem parkir otomatis menggunakan MySQL.", color: "#A08BB0" },
    { icon: "🏆", title: "Aplikasi Kasir", tag: "Desktop", desc: "Membuat aplikasi kasir agar mudah dalam melakukan transaksi jual beli", color: "#C9A96E" },
  ];

  const orgs = [
    { icon: "📦", role: "Ketua Divisi Logistik ", org: "PRAMUKA SMKN — Ambalan Arundaya", year: "2025–2026" },
    { icon: "🎖️", role: "Hartaka ", org: "PRAMUKA SMKN — Ambalan Arundaya", year: "2026–2027" },
    { icon: "👥", role: "Ketua Muda Mudi", org: "Membagun organisasi dari 0 dan merancang acara.", year: "2023–2025" },
    { icon: "💰", role: "Bendahara Muda Mudi", org: " Memegang keuangan organisasi muda mudi. ", year: "2023–2025" },
  ];

  const certs = [
    { title: "Bantara dan Laksana", issuer: "Tingkatan Pramuka penegak", year: "2024-2025" },
    { title: "Kemah 4 Saka", issuer: "Perjusami Binpuan Potensi Dirgantara ", year: "2024" },
    { title: "Lomba GT2K 4", issuer: "Perlombaan Galang Tangkas Tegak Kreatif 4", year: "2025" },
    { title: "Latgab Saka Wira Kartika", issuer: "Perkemahan latihan gabungan Saka Wira Kartika ", year: "2025" },
  ];

  const experiences = [
  {
    icon: "💻",
    role: "Cook helper (Kerja tetap)",
    place: "SMKN 8 Malang",
    year: "2026",
    desc: "Saya kerja sebagai juru masak di sebuah restoran"
  },
  {
    icon: "📱",
    role: "Flower bouquet",
    place: "Peketjaan pribadi",
    year: "2023-2026",
    desc: "Mengembangkan kemampuan keterampilan saya dengan berjualan buket"
  },
  {
    icon: "🎖️",
    role: "juara harapan 1 lomba fotografer",
    place: "Pramuka",
    year: "2025",
    desc: "Saya mendapat juara saat kemah jambore patriot NKRI-III."
  },
  {
    icon: "🗄️",
    role: "Membuat aplikasi",
    place: "Poject",
    year: "2025-2026",
    desc: "Saya berhasil membuat beberapa aplikasi menggunakan flutter dan java."
  }
];

  return (
    <div className="page">

      {/* ── AMBIENT BG ── */}
      <div className="amb amb1" />
      <div className="amb amb2" />
      <div className="amb amb3" />

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-logo">CHS<span>.</span></div>
        <ul className="nav-links">
          {["Profil","Keahlian","Proyek", "Pengalaman","Organisasi","Kontak"].map(n => (
            <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
          ))}
        </ul>
        <div className="nav-pill">PKL 2026</div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="profil">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="dot-pulse" />
            Rekayasa Perangkat Lunak · SMK
          </div>
          <h1 className="hero-name">
            Cindy<br />
            <em>Hariati Syaputri</em>
          </h1>
          <p className="hero-desc">
            Siswa adalah siswa rekayasa perangkat lunak di SMKN 8 Malang.
            Siap berkontribusi nyata di dunia industri teknologi.
          </p>
          <div className="hero-chips">
            <span>Java</span>
            <span>Flutter</span>
            <span>Python</span>
            <span>Next.js</span>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>8+</strong><span>Proyek</span></div>
            <div className="stat-div" />
            <div className="stat"><strong>3</strong><span>Sertifikat</span></div>
            <div className="stat-div" />
            <div className="stat"><strong>2</strong><span>Organisasi</span></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-frame">
            <div className="photo-glow" />
            <div className="photo-circle">
              <Image src="/CINDY-PKL.jpeg" alt="Cindy Hariati Syaputri" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="photo-deco-ring r1" />
            <div className="photo-deco-ring r2" />
            <div className="float-chip fc1"><span>✦</span> RPL</div>
            <div className="float-chip fc2">PKL 2026 <span>✦</span></div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ── DATA DIRI ── */}
      <section className="data-section">
        <div className="ds-inner">
          <div className="ds-label">Data Diri</div>
          <div className="ds-grid">
            {[
              ["Nama Lengkap", "Cindy Hariati Syaputri"],
              ["Tempat, Tgl Lahir", "Malang, 23 Juni 2009"],
              ["Alamat", "JL H. Alwi no 31 RT 04 RW 11, Pulesari, Pakis, Malang"],
              ["Sekolah", "SMK Negeri 8 Malang — Jurusan RPL"],
              ["No HP", "0882-0105-28874"],
              ["Email", "hariaticindy9@gmail.com"],
            ].map(([k, v]) => (
              <div key={k} className="ds-item">
                <span className="ds-key">{k}</span>
                <span className="ds-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TENTANG ── */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-num">02</div>
          <div className="about-content">
            <h2 className="sec-heading">Tentang Saya</h2>
            <p className="about-text">
              Saya adalah siswa jurusan <strong>Rekayasa Perangkat Lunak</strong> yang memiliki
              minat mendalam dalam pembuatan website dan aplikasi mobile. Dengan pengalaman
              menggunakan <strong>Java Swing, Flutter, dan Python</strong>, saya siap berkontribusi 
              di dunia industri dengan semangat belajar tinggi dan kemampuan bekerja dalam tim.
              selain di dunia industri saya juga lebih berminat dengan keterampilan, seperti membuat 
              barang atau benda yang bisa dijual, jadi saya bisa mengandalkan kerativitas saya di bidang 
              yang saya minati. dan saya juga lebih menyukai dunia organisasi agar kita bisa mencari 
              pengalaman dan relasi. saya lebih suka berkreasi dengan kemampuan saya sendiri.
              saya suka ikut kegiatan yang menyenangkan seperti berorganisasi oleh karena itu, beberapa pengalaman 
              dan sertifikat adalah hal yang saya dapatkan di organisasi. di rpl saya belajar banyak bahasa pemrograman, 
              tetapi minat saya lebih ke keterampilan membuat suatu barang atau makanan. katena cita-cita
              saya mau berwirausaha dengan kreativitas yang saya buat dan pelajari dari SMK NEGERI 8 MALANG.
            </p>
          </div>
        </div>
      </section>

      {/* ── KEAHLIAN ── */}
      <section className="skills-section" id="keahlian">
        <div className="section-inner">
          <div className="section-header">
            <span className="sec-num">03</span>
            <h2 className="sec-heading">Keahlian</h2>
            <div className="sec-line" />
          </div>
          <div className="skills-layout">
            <div className="skills-bars">
              {["Frontend","Mobile","Backend","Database","Tools"].map(cat => {
                const list = skills.filter(s => s.cat === cat);
                if (!list.length) return null;
                return (
                  <div key={cat} className="skill-group">
                    <div className="skill-cat">{cat}</div>
                    {list.map(({ name, lvl }) => (
                      <div key={name} className="skill-row-item">
                        <div className="skill-meta">
                          <span>{name}</span><span className="skill-n">{lvl}%</span>
                        </div>
                        <div className="skill-track">
                          <div className="skill-prog" style={{ width: `${lvl}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="skills-chart">
              <div className="chart-title">Skill Level</div>
              <div className="bars-viz">
                {skills.slice(0, 6).map(({ name, lvl }) => (
                  <div key={name} className="viz-col">
                    <div className="viz-bar-wrap">
                      <div className="viz-bar" style={{ height: `${lvl}%` }}>
                        <div className="viz-bar-glow" />
                      </div>
                    </div>
                    <div className="viz-label">{name.split(" ")[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYEK ── */}
      <section className="projects-section" id="proyek">
        <div className="section-inner">
          <div className="section-header">
            <span className="sec-num">04</span>
            <h2 className="sec-heading">Proyek </h2>
            <div className="sec-line" />
          </div>
          <div className="proj-grid">
            {projects.map(({ icon, title, tag, desc, color }) => (
              <div key={title} className="proj-item" style={{ "--pc": color } as React.CSSProperties}>
                <div className="proj-top-row">
                  <span className="proj-ico">{icon}</span>
                  <span className="proj-badge">{tag}</span>
                </div>
                <h3 className="proj-name">{title}</h3>
                <p className="proj-text">{desc}</p>
                <div className="proj-accent-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PENGALAMAN ── */}
<section className="exp-section" id="pengalaman">
  <div className="section-inner">
    <div className="section-header">
      <span className="sec-num">05</span>
      <h2 className="sec-heading">Pengalaman</h2>
      <div className="sec-line" />
    </div>

    <div className="org-list">
      {experiences.map(({ icon, role, place, year, desc }) => (
        <div key={role} className="org-item">
          <div className="org-dot" />
          <div className="org-body">
            <div className="org-icon-wrap">{icon}</div>
            <div>
              <div className="org-role">{role}</div>
              <div className="org-org">{place}</div>
              <div className="org-year">{year}</div>
              <div className="org-org">{desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── ORGANISASI + SERTIFIKAT ── */}
      <section className="exp-section" id="organisasi">
        <div className="section-inner exp-layout">
          <div className="exp-col">
            <div className="section-header">
              <span className="sec-num">06</span>
              <h2 className="sec-heading">Organisasi</h2>
            </div>
            <div className="org-list">
              {orgs.map(({ icon, role, org, year }) => (
                <div key={role} className="org-item">
                  <div className="org-dot" />
                  <div className="org-body">
                    <div className="org-icon-wrap">{icon}</div>
                    <div>
                      <div className="org-role">{role}</div>
                      <div className="org-org">{org}</div>
                      <div className="org-year">{year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="exp-divider" />
          <div className="exp-col">
            <div className="section-header">
              <span className="sec-num">07</span>
              <h2 className="sec-heading">Sertifikat</h2>
            </div>
            <div className="cert-list">
              {certs.map(({ title, issuer, year }, i) => (
                <div key={title} className="cert-item">
                  <div className="cert-idx">0{i + 1}</div>
                  <div>
                    <div className="cert-name">{title}</div>
                    <div className="cert-iss">{issuer} · {year}</div>
                  </div>
                  <div className="cert-check">✓</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TUJUAN PKL ── */}
      <section className="goal-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="sec-num">08</span>
            <h2 className="sec-heading">Tujuan PKL</h2>
            <div className="sec-line" />
          </div>
          <div className="goal-grid">
            {[
              { icon: "🏢", head: "Pengalaman Industri", text: "Mendapatkan pengalaman kerja langsung di dunia industri teknologi." },
              { icon: "📈", head: "Peningkatan Skill", text: "Memperdalam kemampuan teknis dan soft skill dalam tim kerja yang profesional dan dinamis." },
              { icon: "🤝", head: "Networking & Karir", text: "Membangun relasi profesional dan memahami budaya kerja perusahaan teknologi modern." },
              { icon: "💡", head: "Penerapan Ilmu", text: "Menerapkan ilmu yang telah dipelajari di sekolah ke dalam dunia kerja secara nyata." },
              { icon: "🌐", head: "Adaptasi Lingkungan", text: "Belajar beradaptasi dengan lingkungan kerja dan budaya perusahaan." },
              { icon: "🧠", head: "Pengembangan Pola Pikir", text: "Melatih pola pikir kritis dan logis dalam menyelesaikan masalah di dunia kerja." },
            ].map(({ icon, head, text }) => (
              <div key={head} className="goal-item">
                <div className="goal-icon">{icon}</div>
                <h3 className="goal-head">{head}</h3>
                <p className="goal-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer" id="kontak">
        <div className="footer-inner">
          <div className="footer-brand">Cindy <em>Hariati Syaputri</em></div>
          <p className="footer-sub">Rekayasa Perangkat Lunak · PKL 2026</p>
          <div className="footer-contacts">
            <span>📧 hariaticindy9@gmail.com</span>
            <span>📱 0882-0105-28874</span>
            <span>📍 Malang, Jawa Timur</span>
            <p>
    📸 Instagram:{" "}
    <a
      href="https://www.instagram.com/wlypac_ndyy09?igsh=OGdjNDEyNzYxaGsx"
      target="_blank"
      style={{ color: "#C13584", textDecoration: "none", fontWeight: "bold" }}
    >
      @wlypac_ndyy09
    </a>
  </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cindy Hariati Syaputri</span>
          <span className="footer-heart">Made with ♥</span>
        </div>
      </footer>
    </div>
  );
}