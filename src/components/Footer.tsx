
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Column 1: Location */}
        <div>
          <h3 className="font-semibold text-base mb-2">Location</h3>
          <p>Office No. K-131, S.No. 17/1A/2,</p>
          <p>Palladium Grand, PH-2,</p>
          <p>Dhanori, Pune,</p>
          <p>Maharashtra - 411015</p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="font-semibold text-base mb-2">Contact</h3>
          <p>Phone: <a href="tel:+919527564070" className="text-red-300 hover:underline">+91 95275 64070</a></p>
          <p>Email: <a href="mailto:sales@spherixdiagnostics.com" className="text-red-300 hover:underline">sales@spherixdiagnostics.com</a></p>
          <p>Website:{" "}
            <a
              href="https://spherixdiagnostics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 hover:underline"
            >
              spherixdiagnostics.com
            </a>
          </p>
        </div>

        {/* Column 3: Connect */}
        <div>
          <h3 className="font-semibold text-base mb-2">We&apos;re Hiring!</h3>
          <p className="mb-1 text-sm text-gray-300">
            Join our growing sales team across multiple cities in India.
            Freshers and experienced candidates welcome.
          </p>
          <p className="text-red-300 text-sm">
            <a href="/about#careers" className="hover:underline">
              Read more &#8594;
            </a>
          </p>
        </div>


      </div>

      {/* Bottom line */}
      <div className="text-center text-xs mt-8 border-t border-gray-700 pt-4 px-4">
        <p>&copy; 2023 Spherix Diagnostics. All rights reserved.</p>
        <p>
          Website created by{' '}
          <a
            href="https://www.linkedin.com/in/mihir-gujarathi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300 hover:underline"
          >
            Mihir Gujarathi
          </a>
        </p>
      </div>
    </footer>
  );
}
