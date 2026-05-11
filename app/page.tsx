export default function Home() {
  const squares = [
    // Forward squares - faster, more movement
    { id: 1, size: 120, top: '15%', left: '10%', depth: 'forward', opacity: 0.15, blur: 0, rotate: 15, duration: '6s', delay: '0s', animation: 'floating-square' },
    { id: 2, size: 100, top: '65%', left: '75%', depth: 'forward', opacity: 0.12, blur: 0, rotate: -10, duration: '8s', delay: '1s', animation: 'floating-square' },
    { id: 3, size: 80, top: '40%', left: '85%', depth: 'forward', opacity: 0.18, blur: 0, rotate: 25, duration: '7s', delay: '2s', animation: 'floating-square' },

    // Middle squares - medium movement
    { id: 4, size: 60, top: '25%', left: '45%', depth: 'middle', opacity: 0.08, blur: 2, rotate: 45, duration: '10s', delay: '0.5s', animation: 'floating-square-slow' },
    { id: 5, size: 70, top: '75%', left: '20%', depth: 'middle', opacity: 0.1, blur: 1, rotate: -20, duration: '9s', delay: '1.5s', animation: 'floating-square-slow' },
    { id: 6, size: 50, top: '50%', left: '55%', depth: 'middle', opacity: 0.09, blur: 1.5, rotate: 60, duration: '11s', delay: '3s', animation: 'pulsing-square' },
    { id: 7, size: 90, top: '10%', left: '70%', depth: 'middle', opacity: 0.07, blur: 2, rotate: -35, duration: '12s', delay: '0.8s', animation: 'floating-square-slow' },

    // Behind squares - very slow movement
    { id: 8, size: 40, top: '30%', left: '25%', depth: 'behind', opacity: 0.05, blur: 4, rotate: 80, duration: '15s', delay: '2s', animation: 'floating-square-slow' },
    { id: 9, size: 35, top: '80%', left: '50%', depth: 'behind', opacity: 0.04, blur: 5, rotate: -45, duration: '14s', delay: '0.3s', animation: 'floating-square-slow' },
    { id: 10, size: 45, top: '5%', left: '90%', depth: 'behind', opacity: 0.06, blur: 3, rotate: 120, duration: '18s', delay: '1.2s', animation: 'floating-square' },
    { id: 11, size: 30, top: '60%', left: '15%', depth: 'behind', opacity: 0.03, blur: 6, rotate: -70, duration: '20s', delay: '2.5s', animation: 'pulsing-square' },
    { id: 12, size: 55, top: '45%', left: '95%', depth: 'behind', opacity: 0.04, blur: 4, rotate: 90, duration: '16s', delay: '1.8s', animation: 'floating-square-slow' },
  ];

  return (
    <main className="w-screen h-screen bg-gray-600 relative overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Animated Rounded Squares */}
      <div className="absolute inset-0 z-5">
        {squares.map((square) => {
          const scale = square.depth === 'forward' ? 1 : square.depth === 'middle' ? 0.8 : 0.6;
          return (
            <div
              key={square.id}
              className={`absolute rounded-2xl bg-white ${square.animation}`}
              style={{
                width: `${square.size}px`,
                height: `${square.size}px`,
                top: square.top,
                left: square.left,
                opacity: square.opacity,
                filter: `blur(${square.blur}px)`,
                transform: `rotate(${square.rotate}deg) scale(${scale})`,
                '--duration': square.duration,
                '--delay': square.delay,
                '--scale': scale,
                '--rotate': `${square.rotate}deg`,
                '--opacity': square.opacity,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Simple divider lines */}
      <div className="relative z-20 h-full flex">
        <div className="w-1/5 h-full border-r border-white/30"></div>
        <div className="w-1/5 h-full border-r border-white/30"></div>
        <div className="w-1/5 h-full border-r border-white/30"></div>
        <div className="w-1/5 h-full border-r border-white/30"></div>
      </div>

      {/* Your content here */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Your Content</h1>
      </div>
    </main>
  );
}