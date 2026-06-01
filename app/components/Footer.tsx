'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full mb-10 dark:border-gray-800">
            <div className="w-11/12 mx-auto bg-white py-20 px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <a
                            href="https://instagram.com/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="mailto:@saliimidorsa@gmail.com"
                            className="text-black transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/dorsasalimi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors"
                        >
                            GitHub
                        </a>
                    </div>

                    <div className="text-black text-sm flex items-center gap-1.5">
                        Made with
                        <span className="text-black drop-shadow-sm">♥</span>
                        <span className="text-black text-xs">&#38;</span>
                        <span className="text-black ">coffee</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}