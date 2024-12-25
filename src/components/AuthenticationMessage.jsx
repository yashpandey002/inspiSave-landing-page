function AuthenticationMessage({ type, isModalOpen, setIsModalOpen }) {
    return (
        <div className="fixed bg-black/40 h-[100vh] w-[100vw] top-0">
            <div className="absolute top-[30%] left-[50%] translate-x-[-50%] max-w-[400px] bg-white px-4 py-4 rounded-lg z-[9999] text-center">
                {type === 'success'
                    ? 'Authentication successfull🎉'
                    : 'Sorry, something went wrong, please try again!'}
                <img
                    src="./img/close-icon.svg"
                    className="absolute top-[-5px] right-[-5px] cursor-pointer"
                    onClick={() => setIsModalOpen(!isModalOpen)}
                />
            </div>
        </div>
    );
}

export default AuthenticationMessage;
