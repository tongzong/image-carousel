import React, { useState, useEffect, useRef } from "react";
import { Video, Image, FolderCog } from "lucide-react";


const Menu = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const Search = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const Home = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.955-8.955c.42-.42 1.104-.42 1.524 0l8.955 8.955M18.75 10.5v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5"
    />
  </svg>
);

const Bell = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.496-1.583 1.096 1.096 0 0 0-.17-1.743 15.422 15.422 0 0 1-1.38-1.748 10.64 10.64 0 0 0-.693-1.42 1.05 1.05 0 0 0-.258-.29 12.35 12.35 0 0 0-4.062-2.73 1.05 1.05 0 0 0-.756 0c-1.397.77-2.712 1.6-3.951 2.477"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 16.5A.75.75 0 0 1 12.75 18H11.25A.75.75 0 0 1 9 16.5"
    />
  </svg>
);

const UserCircle = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75c-2.164 0-4.201.59-6.042 1.675M16.5 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 19.5v-2.25c0-1.716-1.007-3.373-2.348-4.174L12 13.998l-3.652-2.897C7.007 11.877 6 13.534 6 15.25v2.25M17.982 18.725A7.488 7.488 0 0 1 12 21.75c-2.164 0-4.201-.59-6.042-1.675"
    />
  </svg>
);

const Support = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 5.378a3.004 3.004 0 0 0 3.257 0m-3.257 0A3.004 3.004 0 0 1 12 8.75m-3.047 3.047a.75.75 0 0 0 1.06 1.06L12 11.06l1.047 1.047a.75.75 0 0 0 1.06-1.06M12 15.75a3.004 3.004 0 0 0 3.257 0m-3.257 0A3.004 3.004 0 0 1 12 12.25m0 0v-2.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 15.75a3.004 3.004 0 0 0 3.257 0M9 15.75a3.004 3.004 0 0 1-3.257 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Sun = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);

const Moon = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 14.75a9 9 0 0 0-9.75-9.75c-.88 0-1.73.11-2.54.32-.82.21-1.61.54-2.31.99a9 9 0 0 0 12.1 12.1c.45-.7.78-1.49.99-2.31.21-.81.32-1.66.32-2.54Z"
    />
  </svg>
);

const ChevronLeft = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRight = (props: { className?: string }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);
// --- End of Icon Definitions ---

// --- Images array for the carousel ---
const images = [
  {
    src: "/pic2.jpg",
    title: "Sunset View",
    description: "A beautiful golden sunset over the hills.",
  },
  {
    src: "/pic3.jpg",
    title: "Forest Path",
    description: "A peaceful walk through the trees.",
  },
  {
    src: "/pic4.jpg",
    title: "City Skyline",
    description: "The city comes alive at night.",
  },
  {
    src: "/pic5.jpg",
    title: "Ocean Waves",
    description: "Relaxing waves on a sandy beach.",
  },
  {
    src: "/pic6.jpg",
    title: "Mountain Range",
    description: "Snow-capped peaks touching the sky.",
  },
  {
    src: "/pic7.jpg",
    title: "Desert Dunes",
    description: "Golden sands under the bright sun.",
  },
  {
    src: "/pic8.jpg",
    title: "Countryside",
    description: "Green fields and calm scenery.",
  },
  {
    src: "/pic9.jpg",
    title: "Bridge View",
    description: "An iconic bridge over calm waters.",
  },
  {
    src: "/pic10.jpg",
    title: "Aurora Lights",
    description: "Northern lights painting the sky.",
  },
];

// Main Component containing all the logic and UI
export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // --- Dark Mode Logic ---
  useEffect(() => {
    // Check local storage for theme preference on initial load
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Update DOM class and local storage when theme changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // --- Carousel Logic ---
  const handleNext = () => {
    // Move to the next slide, ensuring we don't go past the last image
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const handlePrev = () => {
    // Move to the previous slide, ensuring we don't go below 0
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Logic to determine which part of the adjacent images is visible
  const getCardClasses = (index: number) => {
    if (index === currentIndex) {
      // Current card is fully visible
      return "w-full transform transition-all duration-500 ease-in-out opacity-100";
    } else if (index === currentIndex + 1) {
      // Next card is partially visible to hint at more content
      return "w-[75%] transform transition-all duration-500 ease-in-out opacity-75";
    } else if (index > currentIndex) {
      // Cards further down are mostly hidden
      return "w-[10%] transform transition-all duration-500 ease-in-out opacity-25";
    } else {
      // Previous cards are completely hidden
      return "w-0 transform transition-all duration-500 ease-in-out opacity-0";
    }
  };

  // --- Render ---
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 border">
      
      <header className="flex items-center justify-between p-4 bg-background text-foreground sticky top-0 z-50 transition-colors duration-300">
        
        <div className="flex items-center space-x-4">
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-full">
            <Menu className="h-6 w-6" />
          </button>
          <div className="text-xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">G</span>allery
          </div>
        </div>

        {/* Middle: Group of Icons */}
        <div className="hidden md:flex items-center space-x-6 bg-gray-800 text-white rounded-lg p-2">
          <Home className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <Search className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <Bell className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <UserCircle className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <Support className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
        </div>

        {/* Far Right: Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline text-sm cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Gallery
          </span>
          <Support className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* MAIN BODY */}
      <div className="container mx-auto px-4 py-8">
        {/* Image Carousel Section */}
        <section className="mb-8">
          
          {/* Carousel Track Container */}
          <div className="relative overflow-hidden w-full">
            <div
              ref={carouselRef}
              className="flex items-center space-x-2"
              // Moves the carousel based on the current index
              style={{
                transform: `translateX(calc(-${currentIndex * 100}%))`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 h-64 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-transparent ${getCardClasses(
                    index
                  )}`}
                  style={{
                    // Explicitly setting minWidth/width for dynamic width adjustment in getCardClasses
                    minWidth: "100%",
                    width: getCardClasses(index).includes("w-full")
                      ? "100%"
                      : getCardClasses(index).includes("w-[75%]")
                      ? "75%"
                      : "10%",
                  }}
                >
                  <img
      src={img.src}     
      alt={img.title}   
      className="object-cover w-full h-full"
      onError={(e) => {
        e.currentTarget.src = `https://placehold.co/800x450/4B5563/ffffff?text=Image+${
          index + 1
        }`;
      }}
    />
    <div className="absolute bottom-0 left-0 right-0  text-white p-4">
      <h3 className="text-lg font-semibold">{img.title}</h3>
      <p className="text-sm">{img.description}</p>
    </div>
                  
                </div>
              ))}
              
            </div>
          </div>

          {/* Controls Bar */}
          <div className="relative flex items-center mt-4 w-full">
            {/* Centered Dots */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex
                        ? "bg-blue-600 dark:bg-blue-400 scale-125"
                        : "bg-gray-400 dark:bg-gray-600"
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>

            {/* Arrows on the far right */}
            <div className="ml-auto flex space-x-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="bg-blue-600 dark:bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
                className="bg-blue-600 dark:bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-15">
            <h4>Generate</h4>
            <button>Show all</button>
          </div>

          <div className="container1 flex">
            <div className="flex space-x-4 pd-6">
              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <Video className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Video</h1>
                  <p className="text-sm text-gray-600">Generate Video with custom styles in flux and instagram</p>
                </div>
              </div>

              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <Image className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Image</h1>
                  <p className="text-sm text-gray-600">Generate Image with custom styles in flux and instagram</p>
                </div>
              </div>

              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <Image className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Motion</h1>
                  <p className="text-sm text-gray-600">Generate Video with custom styles in flux and instagram</p>
                </div>
              </div>
              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <FolderCog className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Video</h1>
                  <p className="text-sm text-gray-600">Generate Video with custom styles in flux and instagram</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="container1 flex pt-4">
            <div className="flex space-x-4">
              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <Image className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Image</h1>
                  <p className="text-sm text-gray-600">Generate Video with custom styles in flux and instagram</p>
                </div>
              </div>

              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <Video className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Video</h1>
                  <p className="text-sm text-gray-600">Edit video with ease.change styles and add objects</p>
                </div>
              </div>

              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <FolderCog className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Title</h1>
                  <p className="text-sm text-gray-600">Generate Video with custom styles in flux and instagram</p>
                </div>
              </div>
              <div className="each flex flex-1 items-center space-x-2 p-4 bg-gray-100 rounded">
                <FolderCog className="w-6 h-6" />
                <div>
                  <h1 className="font-semibold">Movie</h1>
                  <p className="text-sm text-gray-600">Generate Video with custom styles in flux and instagram</p>
                </div>
              </div>
              
            </div>
          </div>


          {/* Footer Area (Elevated Dark Background) */}
          <div className="relative z-10 pt-15">
            <footer className="bg-gray-800 dark:bg-gray-950 text-white p-6 rounded-lg shadow-2xl">
              <div className="max-w-4xl mx-auto flex justify-between">
                <p className="text-lg">
                   Krea AI
                </p>
                <p className="text-lg mt-1">
                  Curated by  Mobbin
                </p>
              </div>
            </footer>
          </div>
        </section>
      </div>
      {/* Input Field Below Footer (White Background) */}
      <div className="mt-4 p-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Your answer"
            className="w-full text-xl bg-transparent border-b border-gray-400 dark:border-gray-500 focus:border-blue-500 focus:outline-none py-2 text-gray-900 dark:text-gray-900 transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
}
