import React from "react";

/**
 * PDF Download Page
 * ------------------
 * Uses: public/files/Call for Expo and Stalls.pdf
 */

const PDF_TITLE = "Call for Expo and Stalls";
const PDF_URL = "src/files/Call for Expo and Stalls.pdf";

export default function PdfDownloadPage() {
  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          {PDF_TITLE}
        </h1>
        <p className="mt-3 text-gray-600">
          Download or view the official PDF below.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white bg-gray-900 hover:bg-black shadow-sm"
            title="Open PDF in a new tab"
          >
            {/* Eye icon */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 5c-4.5 0-8.3 2.6-10 7 1.7 4.4 5.5 7 10 7s8.3-2.6 10-7c-1.7-4.4-5.5-7-10-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg> */}
            View PDF
          </a>

          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 shadow-sm"
            title="Download the PDF"
          >
            {/* Download icon */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.279 11.707a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
            </svg> */}
            Download PDF
          </a>
        </div>

        {/* Inline preview frame */}
        <div className="mt-10">
          {/* <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <iframe
              title="PDF preview"
              src={PDF_URL}
              className="w-full h-[70vh] bg-white"
            />
          </div> */}
          <p className="mt-2 text-xs text-gray-500">
            If the preview does not load, use the <span className="font-medium">View PDF</span> button above.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Usage (React Router v6):
 * ------------------------
 * 1) Place your PDF under: public/files/Call for Expo and Stalls.pdf
 * 2) Add a route:
 *    import PdfDownloadPage from "./pages/PdfDownloadPage";
 *    <Route path="/expo-pdf" element={<PdfDownloadPage />} />
 * 3) Add a navbar link: <Link to="/expo-pdf">Expo PDF</Link>
 */