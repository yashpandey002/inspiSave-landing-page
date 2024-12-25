const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10">
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
                    Privacy Policy
                </h1>
                <p className="text-gray-600 mb-4">
                    Effective Date:{' '}
                    <span className="font-medium">26 December 2024</span>
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Introduction
                    </h2>
                    <p className="text-gray-600">
                        Thank you for using{' '}
                        <span className="font-medium">inspiSave</span>, a Chrome
                        extension designed to help users capture screenshots of
                        landing pages, along with the webpage title and URL, and
                        save them to their Notion database. Your privacy is
                        important to us, and this privacy policy explains how we
                        handle your data when you use our extension.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Data We Collect
                    </h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                            <strong>Webpage Screenshot:</strong> Captured using
                            the <code>chrome.tabs.captureVisibleTab</code> API
                            and sent to our backend for saving to your Notion
                            database.
                        </li>
                        <li>
                            <strong>Webpage Title and URL:</strong> Extracted
                            using the content script to provide context to your
                            saved screenshots and sent to the backend.
                        </li>
                        <li>
                            <strong>Notion Authentication Token:</strong> Stored
                            locally in your browser using{' '}
                            <code>chrome.storage.local</code>
                            to authenticate your requests to Notion.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        How We Use the Collected Data
                    </h2>
                    <p className="text-gray-600">
                        The collected data is used exclusively for the
                        functionality of the inspiSave extension:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                            Screenshots, webpage titles, and URLs are sent to
                            your Notion database via our backend.
                        </li>
                        <li>
                            Authentication tokens are stored locally and used
                            only to authenticate with Notion on your behalf.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Data Storage
                    </h2>
                    <p className="text-gray-600">
                        <strong>Local Storage:</strong> Your Notion
                        authentication token is stored locally and is never
                        shared with third parties.
                    </p>
                    <p className="text-gray-600">
                        <strong>Backend Server:</strong> Screenshots, titles,
                        and URLs are temporarily stored on our backend server
                        during the process of saving them to Notion. No data is
                        retained on our backend after it is successfully saved.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Permissions
                    </h2>
                    <p className="text-gray-600">
                        The inspiSave extension requires the following
                        permissions to function:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                            <strong>activeTab:</strong> To capture the
                            screenshot of the active tab.
                        </li>
                        <li>
                            <strong>desktopCapture:</strong> To capture the
                            visible area of the webpage.
                        </li>
                        <li>
                            <strong>host_permissions:</strong> To allow the
                            extension to work on any webpage.
                        </li>
                        <li>
                            <strong>storage:</strong> To securely store your
                            Notion authentication token locally.
                        </li>
                        <li>
                            <strong>content_scripts:</strong> To extract the
                            title and URL of the webpage.
                        </li>
                        <li>
                            <strong>tabs:</strong> To identify the currently
                            active tab.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Third-Party Services
                    </h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                            <strong>Notion:</strong> We integrate with Notion to
                            save your screenshots. This requires an
                            authentication token provided by you.
                        </li>
                        <li>
                            <strong>Backend Server:</strong> Our server acts as
                            an intermediary for sending data to Notion and does
                            not store any data permanently.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        User Control
                    </h2>
                    <p className="text-gray-600">
                        You are in full control of the extension:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                            Revoke permissions for the extension at any time
                            through Chrome settings.
                        </li>
                        <li>
                            Delete your Notion authentication token by clearing
                            the extension's local storage.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600">
                        If you have any questions about this privacy policy,
                        feel free to contact us:
                    </p>
                    <p className="text-gray-600">
                        <strong>Email:</strong>{' '}
                        <a
                            href="mailto:[YourEmail]"
                            className="text-blue-500 hover:underline"
                        >
                            pandeyyash002@gmail.com
                        </a>
                    </p>
                </section>

                <p className="text-gray-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} inspiSave. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
