import React from 'react';
const images = [
  {src:"https://v3b.fal.media/files/b/0a9aa4a6/JM8y2gfy8_5HFLkxOqzNP_c38da69b55714eec832bbff7d6931942.jpg", alt:"POS terminal"},
  {src:"https://v3b.fal.media/files/b/0a9aa4a6/DN6o9yrjS_79GnbUw2GvT_1efc9c5585dd4409a9968b45aad979a5.jpg", alt:"Office team"},
  {src:"https://v3b.fal.media/files/b/0a9aa4a7/6EDIsWDaWB62B8ezsdmEY_5a450f7735bd40eaae2c17c728775ab2.jpg", alt:"Business owner"}
];
export default function Showcase() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {images.map(({src,alt}) => <div key={alt} className="rounded-xl overflow-hidden h-64"><img src={src} alt={alt} className="w-full h-full object-cover"/></div>)}
      </div>
    </section>
  );
}
