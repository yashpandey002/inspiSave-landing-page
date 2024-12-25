function Footer() {
    return (
        <nav className="w-full border-t border-[#E2E2E2]">
            <div className="max-w-[1440px] mx-auto flex flex-col-reverse gap-4 items-center justify-between py-4 px-2 sm:px-4 md:flex-row lg:px-6">
                <div>
                    <p className="text-center text-gray-600">
                        Made with ❤️ by{' '}
                        <span className="underline hover:text-gray-950">
                            <a
                                href="https://yash-pandey.netlify.app/"
                                target="_blank"
                            >
                                Yash Pandey
                            </a>
                        </span>
                        , in beautiful city of lakes Udaipur.
                    </p>
                </div>
                <div>
                    <a
                        href="https://github.com/yashpandey002/inspiSave-chrome-extension"
                        target="_blank"
                        className="text-base text-gray-500 mr-3 md:mr-5"
                    >
                        Github
                    </a>
                    <a
                        href="#"
                        className="text-base text-white bg-black py-[8px] px-[12px] rounded-full md:px-[16px]"
                    >
                        Download
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Footer;
