import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface ImageCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const ImageCarousel = ({
  slides,
  autoPlayInterval = 5000,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h3 className="text-2xl md:text-4xl font-display font-bold text-secondary-foreground mb-2 animate-fade-up">
              {slide.title}
            </h3>
            <p className="text-lg md:text-xl text-secondary-foreground/90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
