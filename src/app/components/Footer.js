// src/app/components/Footer.js

export default function Footer() {
    return (
        <footer className="bg-gray-200 p-4 text-center">
            {/* Add your content here */}
            <p>&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</p>
        </footer>
    );
}
