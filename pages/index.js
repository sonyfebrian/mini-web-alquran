import Link from 'next/link';
import Surah from '../components/surah';
import Header from '../components/header';
import ApiService from '../services/api';
import NavBar from '../components/Navbar';

export async function getStaticProps() {
  const surahs = await ApiService.getAllSurah();
  const featuredSurahs = ['Yasin', 'Al-Kahf', 'Al-Mulk', 'Ar-Rahman', 'Al-Waqi\'ah', 'Yusuf'];
  const recommendedSurahs = surahs.filter(
    ({ name }) => featuredSurahs.includes(name.transliteration.id),
  );

  return {
    props: {
      recommendedSurahs,
    },
  };
}

export default function Home({ recommendedSurahs }) {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="flex flex-col items-center justify-center py-2">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <h1 className="text-6xl font-bold">
                Stylish Glassmorphic Header Animation Made with Tailwind CSS &
                Next.js
              </h1>
              <h2 className="text-3xl font-bold">
                Fork and modify this sandbox
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="flex flex-col items-center justify-center py-2">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <h1 className="text-6xl font-bold">
                Stylish Glassmorphic Header Animation Made with Tailwind CSS &
                Next.js
              </h1>
              <h2 className="text-3xl font-bold">
                Fork and modify this sandbox
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main className="container">
        <div className="bg-teal-600 rounded-lg shadow py-4 px-4 my-4">
          <img src="/Quran-reading.svg" alt="Reading quran illustration" className="md:w-5/12 h-40 md:h-auto mx-auto" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl my-2 inline-block text-gray-700 tracking-wide">Surat Pilihan</h2>
          <Link href="/surah">
            <a className="underline">Semua Surat</a>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {recommendedSurahs.map((surah, index) => (
            <Link href="/surah/[surahId]" as={`/surah/${surah.number}`} key={surah.number}>
              <a><Surah data={surah} index={index + 1} /></a>
            </Link>
          ))}
        </div>
      </main>

    </>
  );
}
