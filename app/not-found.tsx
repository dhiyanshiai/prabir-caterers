'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto">
                <h2 className="text-4xl font-bold text-red-600 mb-4">404</h2>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h3>
                <p className="text-gray-600 mb-8">
                    Maaf kijiye, humein yeh page nahi mila.
                    (Sorry, we couldn't find the page you're looking for.)
                </p>
                <Link
                    href="/"
                    className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
