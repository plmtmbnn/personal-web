import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';

const BlogDetail = () => {
  // In the future, you can extract this via URL params or props
  const post = {
    title: '🏃‍♂️ Program Latihan 8 Minggu',
    date: 'June 3, 2025',
    content: `
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">🏃‍♂️ Program Latihan 8 Minggu</h1>
      <p class="mb-6">🎯 Tujuan: Turunkan berat badan dari <strong>68 KG → 63 KG</strong>, kecilkan lingkar perut, dan capai pace lari <strong>4:30 menit/km</strong>.</p>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">🗓️ Minggu 1–4: Fondasi & Pembakaran Lemak</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Senin:</strong> Easy Run 5–6 KM @6:30–6:45 + Core 💪</li>
          <li><strong>Selasa:</strong> Strength Full Body 🏋️</li>
          <li><strong>Rabu:</strong> 6x400m Interval @5:15–5:00 🏃‍♂️</li>
          <li><strong>Kamis:</strong> Recovery Run 5 KM @7:00 + Mobility 🧘</li>
          <li><strong>Jumat:</strong> Upper Body + Core 🔥</li>
          <li><strong>Sabtu:</strong> Long Run 8–10 KM (easy pace) ⛰️</li>
          <li><strong>Minggu:</strong> Recovery Aktif: sepeda statis/jalan 🚴‍♂️</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">⚡ Minggu 5–8: Performa & Pace</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Senin:</strong> Tempo Run 5 KM @5:30–5:45 + Core 💨</li>
          <li><strong>Selasa:</strong> Strength Full Body (beban bertahap) 💪</li>
          <li><strong>Rabu:</strong> 5x600m atau 4x800m @4:45–4:30 🏃‍♂️</li>
          <li><strong>Kamis:</strong> Recovery Run 5 KM @7:00 + Mobility 🧘</li>
          <li><strong>Jumat:</strong> Core + Upper (volume tinggi) 🔄</li>
          <li><strong>Sabtu:</strong> Long Run 10–12 KM + Test 5K pace 4:30 🏁</li>
          <li><strong>Minggu:</strong> Recovery Aktif, stretching, tidur cukup 😴</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">💪 Latihan Strength Full Body</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Goblet Squat – 3x12</li>
          <li>Dumbbell Lunge – 3x10/kaki</li>
          <li>Romanian Deadlift – 3x10</li>
          <li>Push-up – 3x maksimal</li>
          <li>Plank Row – 3x10</li>
          <li>Overhead Dumbbell Press – 3x12</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">🧘 Mobility (Peregangan & Aktivasi)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>World’s Greatest Stretch – 2x/sisi</li>
          <li>Deep Squat Hold – 1–2 menit</li>
          <li>Hip Circles – 10x/sisi</li>
          <li>Hamstring Kick – 10x/kaki</li>
          <li>Lying Glute Bridge – 15x</li>
          <li>Cat-Cow Stretch – 10x</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">🏋️ Upper Body Training</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Dumbbell Shoulder Press – 3x12</li>
          <li>Dumbbell Row – 3x10/sisi</li>
          <li>Push-up – 3x maksimal</li>
          <li>Plank to Push-up – 10x</li>
          <li>Triceps Dips – 3x12</li>
          <li>Renegade Row – 3x10</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">🧠 Latihan Core (3x/minggu)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Plank – 45 detik x 3 ⏱️</li>
          <li>Ab Wheel Rollout – 10x3 🛞</li>
          <li>Russian Twist – 20x3 🔄</li>
          <li>Side Plank – 30 detik/sisi x 3 ↔️</li>
          <li>Leg Raise – 15x3 🦵</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🥗 Tips Pola Makan Sehat</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Kurangi gula & gorengan ❌</li>
          <li>Konsumsi protein tinggi (telur, ayam, ikan, tempe) 🍗</li>
          <li>Sayur, buah, oats untuk serat 🍎</li>
          <li>Minum air putih 2.5–3L per hari 💧</li>
          <li>Hindari makan malam berat setelah jam 19:30 🌙</li>
        </ul>
      </section>
    </div>`
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
