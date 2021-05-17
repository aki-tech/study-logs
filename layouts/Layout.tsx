import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-blue-200">
      <header className="container h-16 flex space-x-4 items-center">
        <Link href="/">
          <a className="font-bold text-2xl">Study Logs</a>
        </Link>
        <span className="flex-1"></span>
        <Link href="/mypage">
          <a>マイページ</a>
        </Link>
        <Link href="/create">
          <a>質問を作成</a>
        </Link>
        <div className="bg-gray-600 w-10 h-10 rounded-full"></div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
