import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 border-t border-gray-150/40 dark:border-darkBorder/40 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-sans font-bold text-base tracking-wider text-gray-800 dark:text-white">
            RUWANYA<span className="text-purple-600 dark:text-purple-400">.H</span>
          </span>
          <p className="text-xs text-gray-450 dark:text-gray-500">
            © {new Date().getFullYear()} Ruwanya Hettiarachchi. All rights reserved.
          </p>
        </div>

        {/* Made with love */}
        <div className="flex items-center space-x-1.5 text-xs text-gray-450 dark:text-gray-500">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>using React & Tailwind</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="p-2.5 rounded-xl bg-purple-50 dark:bg-darkCard text-purple-650 dark:text-purple-405 border border-purple-200/20 hover:bg-purple-100 dark:hover:bg-darkBorder/80 transition-all duration-300 hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
