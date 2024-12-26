import React from 'react';

function Nav() {
    return (
        <nav className="w-full border-b border-[#E2E2E2]">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-2 sm:px-4 lg:px-6">
                <div>
                    <a href="/">
                        <img
                            src="./img/logo.svg"
                            className="h-[30px] md:h-[40px] lg:h-[45px]"
                        />
                    </a>
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

export default Nav;
