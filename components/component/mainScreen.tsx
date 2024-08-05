"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
const images = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png"
];

export function MainScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update the image index every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Progress bar logic
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) return 0;
        return prevProgress + (100 / 50); // Update progress to fill the bar over 5 seconds
      });
    }, 100); // Update every 100ms

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen">
      <header className="relative flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center space-x-4 pt-3">
          <h1 className="text-2xl font-bold pl-10 mr-10">AuraLabs</h1>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" className="text-lg font-semibold" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
        <Link href="#" className="absolute right-4 top-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md" prefetch={false}>
          Contact Us
        </Link>
      </header>
      <main className="p-2">
        <div className="relative flex flex-col items-center justify-between p-8 bg-gray-100">
          <div className="relative w-full">
            <Carousel className="w-full shadow-lg rounded-lg overflow-hidden relative">
              <CarouselContent>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-5xl font-bold text-white font-poppins flex items-center justify-right">
                  Unlock a new Era of possibilities
                </div>

                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-[600px]"
                      style={{ aspectRatio: "1200/600", objectFit: "cover" }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 focus:outline-none border-0">
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 focus:outline-none border-0">
                <ChevronRightIcon className="w-6 h-6 text-gray-700" />
              </CarouselNext>
            </Carousel>
            <div className="relative w-full h-2 bg-gray-200 mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-black"
                style={{ width: `${progress}%`, transition: 'width 0.1s ease-in-out' }}
              ></div>
            </div>
          </div>
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold">AuraLabs</h2>
            <p className="mt-2 text-lg">Ryse, Reimagine, Repeat!</p>
          </div>
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-lg">
            Welcome to AuraLabs, where innovation meets expertise! We are a dynamic team of dedicated engineers and
            designers who thrive on transforming your boldest ideas into reality. Our mantra, "Ryse, Reimagine, Repeat!"
            encapsulates the journey of innovation, where we Ryse to the occasion, Reimagine what's possible, and Repeat
            the cycle of excellence.
          </p>
        </section>
      </main>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function Phone(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 1L1 22h22V1z" />
    </svg>
  )
}