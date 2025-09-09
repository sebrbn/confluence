import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ExternalLink, FileText, X } from "lucide-react";

export default function NoticeBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const notices = [
    {
      id: "conference",
      title: "International Conference ICASD 2025",
      color: "green",
      link: "/conference",
      external: false,
    },
    {
      id: "marathon",
      title: "Marathon 2025",
      color: "purple",
      link: "https://kochilakeviewenvirothon.com",
      external: true,
    },
    {
      id: "seminar",
      title: "International Seminar",
      color: "yellow",
      link: "/mithradham",
      external: false,
    },
    {
      id: "expo",
      title: "Call for Expo & Stalls",
      color: "blue",
      link: "/call-for-expo",
      external: false,
      file: "src/files/Call for Expo and Stalls.pdf",
    },
  ];

  // Map color names to Tailwind classes
  const colorMap = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      link: "text-green-700",
      fileBg: "bg-green-100",
      fileBorder: "border-green-300",
      fileText: "text-green-800",
      fileHover: "hover:bg-green-200",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-800",
      link: "text-purple-700",
      fileBg: "bg-purple-100",
      fileBorder: "border-purple-300",
      fileText: "text-purple-800",
      fileHover: "hover:bg-purple-200",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      link: "text-yellow-700",
      fileBg: "bg-yellow-100",
      fileBorder: "border-yellow-300",
      fileText: "text-yellow-800",
      fileHover: "hover:bg-yellow-200",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      link: "text-blue-700",
      fileBg: "bg-blue-100",
      fileBorder: "border-blue-300",
      fileText: "text-blue-800",
      fileHover: "hover:bg-blue-200",
    },
  };

  if (!visible) return null;

  const visibleNotices = isOpen ? notices : notices.slice(0, 2);

  return (
    <div className="fixed top-16 left-4 sm:left-6 z-50 w-[95%] max-w-sm sm:w-80 md:w-96">
      <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md p-3">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Notice Cards */}
        <div className="flex flex-col gap-3 mt-4">
          {visibleNotices.map((notice) => {
            const color = colorMap[notice.color];
            return (
              <div
                key={notice.id}
                className={`${color.bg} ${color.border} border px-4 py-3 rounded-xl shadow-md flex items-center justify-between`}
              >
                <span className={`font-medium ${color.text} text-sm`}>
                  {notice.title}
                </span>

                <div className="flex items-center gap-2">
                  {notice.external ? (
                    <a
                      href={notice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-xs ${color.link} hover:underline`}
                    >
                      Open <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={notice.link}
                      className={`flex items-center gap-1 text-xs ${color.link} hover:underline`}
                    >
                      View <FileText className="w-3 h-3" />
                    </Link>
                  )}

                  {notice.file && (
                    <a
                      href={notice.file}
                      download
                      className={`px-2 py-1 text-xs rounded-md ${color.fileBg} ${color.fileBorder} ${color.fileText} ${color.fileHover}`}
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand/Collapse Button */}
        <div className="mt-3 text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800 hover:underline"
          >
            {isOpen ? (
              <span className="flex items-center justify-center gap-1 text-white">
                Show Less <ChevronUp className="w-3 h-3 text-white" />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1 text-white">
                Show All <ChevronDown className="w-3 h-3 text-white" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
