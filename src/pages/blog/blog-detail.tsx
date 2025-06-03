import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const BlogDetail = () => {
  // In the future, you can extract this via URL params or props
  const post = {
    title: 'Pogram 2 Bulan, weight loss & pace 5:00min/KM',
    date: 'June 3, 2025',
    content: `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Program Latihan 8 Minggu</h1>
      <p class="mb-6">Fokus: Menurunkan berat badan ke 63–64 kg, mengecilkan lingkar perut, dan meningkatkan pace lari ke 5:00 menit/km.</p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Minggu 1–4: Fondasi Awal</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Senin:</strong> Easy Run 5 KM (pace 6:30–6:45) + Core</li>
          <li><strong>Selasa:</strong> Strength Full Body</li>
          <li><strong>Rabu:</strong> Interval 6x400m @5:15–5:00/km</li>
          <li><strong>Kamis:</strong> Recovery Run 5 KM pace 7:00 + Mobility</li>
          <li><strong>Jumat:</strong> Upper Body + Core</li>
          <li><strong>Sabtu:</strong> Long Run 8–10 KM (easy pace)</li>
          <li><strong>Minggu:</strong> Recovery Aktif (sepeda statis + jalan santai)</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Minggu 5–8: Optimalisasi dan Percepatan</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Senin:</strong> Tempo Run 5 KM @5:30–5:45 + Core</li>
          <li><strong>Selasa:</strong> Strength Full Body (beban bertahap)</li>
          <li><strong>Rabu:</strong> Interval 6x600m / 4x800m @4:50–5:00/km</li>
          <li><strong>Kamis:</strong> Recovery Run 5 KM pace 6:45–7:00 + Mobility</li>
          <li><strong>Jumat:</strong> Upper + Core (volume lebih tinggi)</li>
          <li><strong>Sabtu:</strong> Long Run 11–12 KM + Simulasi race 5 KM</li>
          <li><strong>Minggu:</strong> Recovery Aktif + Stretching + Tidur cukup</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Latihan Core (3x/minggu)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Plank 30–45 detik x 3 set</li>
          <li>Russian Twist 20x3</li>
          <li>Ab Wheel Rollout 8–12x3</li>
          <li>Leg Raise 12–15x3</li>
          <li>Side Plank 30 detik/sisi x 3</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Latihan Strength (Contoh)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Goblet Squat 3x12</li>
          <li>Dumbbell Lunges 3x10 per kaki</li>
          <li>Push-up 3x sampai gagal teknik benar</li>
          <li>Dumbbell Shoulder Press 3x10</li>
          <li>Bent-over Row 3x10</li>
          <li>Romanian Deadlift 3x10</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">Tips Pola Makan</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Kurangi gula dan gorengan</li>
          <li>Tingkatkan protein dan serat (sayur & buah)</li>
          <li>Minum air putih minimal 2.5 liter/hari</li>
          <li>Jaga porsi makan dan hindari makan malam berat</li>
        </ul>
      </section>
    </div>
    `
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog | Polma Tambunan</title>
        <meta name="description" content={post.content.slice(0, 150)} />
        <meta property="og:title" content={`${post.title} | Blog | Polma Tambunan`} />
        <meta property="og:description" content={post.content.slice(0, 150)} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={`${post.title} | Blog | Polma Tambunan`} />
        <meta name="twitter:description" content={post.content.slice(0, 150)} />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 py-16 flex items-start justify-center">
        <Fade delay={150} triggerOnce className="w-full max-w-3xl">
          <article className="bg-white shadow-md rounded-xl p-6 sm:p-8 prose prose-neutral prose-lg max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </Fade>
      </section>
    </>
  );
};

export default BlogDetail;
