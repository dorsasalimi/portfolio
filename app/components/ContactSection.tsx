export default function ContactSection() {
    return (
        <div
            id="contact"
            className="mt-[400px] md:mt-[400px] lg:mt-[600px] w-11/12 md:w-7/12 m-auto md:ml-16 sm:px-0 md:mb-32 mb-10 text-left scroll-mt-24"
        >
            <p className="text-[8vw] md:text-[120px] tracking-tight leading-none">
                I'm always interested in cool stuff.
            </p>

            <p className="text-[8vw] md:text-[120px] tracking-tight leading-none mt-2 sm:mt-0">
                Have a project in mind?
            </p>

            <p className="text-[8vw] md:text-[120px] tracking-tight leading-none mt-2 sm:mt-0">
                <a
                    href="mailto:saliimidorsa@youremail.com"
                    className="
            relative inline-block cursor-pointer no-underline
            after:content-[''] after:absolute after:left-0 after:-bottom-2
            after:h-[4px] md:after:h-[8px] after:w-full
            after:origin-left after:scale-x-0
            after:bg-current
            after:transition-transform after:duration-500
            after:ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:after:scale-x-100
            focus-visible:after:scale-x-100
            active:after:scale-x-100
          "
                >
                    Let's talk.
                </a>
            </p>
        </div>
    );
}