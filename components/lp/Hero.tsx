import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <Image src="/images/hero.png" layout="fill" objectFit="cover" />
      <div className="relative container">  
        <p className="text-5xl font-bold text-blue-900 leading-relaxed mb-6">プログラミング学習で<br />悩んでいませんか？</p>
        <Link href="/login">
          <a className="font-bold p-4 text-white bg-blue-600 py-4 px-10 rounded-full shadow">アカウントを作成</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
