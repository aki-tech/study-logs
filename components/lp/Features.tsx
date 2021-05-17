import React from 'react'
import Image from 'next/image';

const Features = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex py-32  items-center">
            <div className="w-1/2">
              <h2 className="font-bold text-3xl leading-relaxed mb-8">質問し放題の環境<br />完全無料の寄付性</h2>
              <p>プログラミングを始めたての時は質問できる環境が大事です。</p>
            </div>
            <div className="font-bold w-1/2 text-center">
            <span className="text-9xl mr-2">0</span>
            <span className="text-2xl">Yen</span>
          </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-200">
      <div className="container">
        <div className="flex py-32  items-center">
          <div className="w-1/2 order-1">
            <h2 className="font-bold text-3xl leading-relaxed mb-8">教えることで<br />自分の知識が定着します。</h2>
            <p>誰かに教えることこそ最高の学習の機会なのです。</p>
          </div>
          <div className="w-1/2">
            <div className="w-1/2 mx-auto">
              <Image src="/images/pc.png" width="567px" height="567px" alt=""></Image>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="flex py-32  items-center">
          <div className="w-1/2">
            <h2 className="font-bold text-3xl leading-relaxed mb-8">P to P<br />お互い高めあう</h2>
            <p>教える方も教わる方もメリットがある形で</p>
          </div>
          <div className="w-1/2">
            <div className="w-1/2 mx-auto">
              <Image src="/images/tag.png" width="404px" height="317px" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Features
