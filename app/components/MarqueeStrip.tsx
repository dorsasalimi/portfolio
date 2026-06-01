'use client';
export default function MarqueeStrip({ text = '✦ DEVELOPER ✦ UX/UI DESIGNER ✦ FREELANCE ✦ AVAILABLE FOR WORK' }) {
    return (
        <div className="w-full overflow-hidden border-y border-white/10 py-4 my-20">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-[13px] font-black uppercase tracking-[0.3em] text-white/40 mx-8">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
}