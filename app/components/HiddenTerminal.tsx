// components/HiddenTerminal.tsx
'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const COMMANDS: Record<string, () => { text: string; dim?: boolean; bright?: boolean }[]> = {
    help: () => [
        { text: '' },
        { text: '  available commands:', bright: true },
        { text: '  ./about          who i am' },
        { text: '  ./stack          what i use' },
        { text: '  ./works          selected projects' },
        { text: '  ./contact        get in touch' },
        { text: '  ./availability   am i free right now?' },
        { text: '  clear            clear terminal', dim: true },
        { text: '' },
    ],
    './about': () => [
        { text: '' },
        { text: '  name     → dorsa', bright: true },
        { text: '  location → tehran, iran' },
        { text: '  role     → full-stack dev + ui designer' },
        { text: '  mood     → caffeinated & building' },
        { text: '  fact     → best code written past midnight', dim: true },
        { text: '' },
    ],
    './stack': () => [
        { text: '' },
        { text: '  frontend → react, next.js, tailwind' },
        { text: '  design   → figma, framer' },
        { text: '  backend  → node.js (learning fast)' },
        { text: '  secret   → console.log("why")', dim: true },
        { text: '' },
    ],
    './contact': () => [
        { text: '' },
        { text: '  email  → hello@dorsa.dev', bright: true },
        { text: '  github → github.com/dorsa' },
        { text: '' },
        { text: "  or just say hi. i don't bite.", dim: true },
        { text: '' },
    ],
    './availability': () => {
        const h = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tehran' })).getHours();
        const online = h >= 8 && h < 24;
        return [
            { text: '' },
            { text: `  status → ${online ? '✓ available' : 'sleeping. back tomorrow.'}`, bright: online, dim: !online },
            { text: '  open for freelance, full-time, coffee chats' },
            { text: '' },
        ];
    },
};

type Line = { text: string; dim?: boolean; bright?: boolean; isCmd?: boolean };

export default function HiddenTerminal() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [lines, setLines] = useState<Line[]>([
        { text: '  dorsa@portfolio — nobody told you this exists.', bright: true },
        { text: "  type 'help' to begin.", dim: true },
        { text: '' },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    const pushLines = useCallback((newLines: Line[]) => {
        setLines(prev => [...prev, ...newLines]);
        setTimeout(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, 30);
    }, []);

    const runCommand = useCallback((raw: string) => {
        const cmd = raw.trim().toLowerCase();
        pushLines([{ text: `  $ ${cmd}`, dim: true }]);
        if (!cmd) return;
        if (cmd === 'clear') { setLines([]); return; }
        if (cmd === 'exit' || cmd === 'q') { setOpen(false); return; }
        const fn = COMMANDS[cmd];
        if (fn) pushLines(fn());
        else pushLines([{ text: `  command not found: ${cmd}`, dim: true }, { text: '' }]);
    }, [pushLines]);

    // Listen for any keypress to open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            if (!open && e.key.length === 1) { setOpen(true); setInput(e.key); }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[9999]"
            style={{
                animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
        >
            <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>

            <div className="bg-[#0a0a0a] border-t border-white/10" style={{ maxHeight: '50vh' }}>
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
                    <button onClick={() => setOpen(false)} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20 ml-auto">
                        dorsa@portfolio:~
                    </span>
                </div>

                {/* Output */}
                <div ref={bodyRef} className="overflow-y-auto px-5 py-3" style={{ maxHeight: 'calc(50vh - 90px)', fontFamily: 'monospace' }}>
                    {lines.map((l, i) => (
                        <p key={i} className="text-[11px] leading-[1.9]" style={{
                            color: l.bright ? '#fff' : l.dim ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.65)',
                        }}>
                            {l.text || '\u00A0'}
                        </p>
                    ))}
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 px-5 py-3 border-t border-white/[0.06]">
                    <span className="text-[11px] text-white/30 font-mono whitespace-nowrap">dorsa@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') { runCommand(input); setInput(''); }
                            if (e.key === 'Escape') setOpen(false);
                        }}
                        className="flex-1 bg-transparent border-none outline-none text-white text-[11px] font-mono caret-white"
                        autoComplete="off"
                        spellCheck={false}
                    />
                </div>
            </div>
        </div>
    );
}