"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ArrowRight } from 'lucide-react';

export function TimelineNavigator() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show the notification after a short delay on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    console.log('Dismiss button clicked');
    setIsVisible(false);
    setIsDismissed(true);
    // No longer storing dismissal in localStorage - will show on every page load
  };

  const handleNavigateToTimeline = () => {
    console.log('Navigate to timeline button clicked');
    // Scroll to timeline section
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      console.log('Timeline element found, scrolling...');
      timelineElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Timeline element not found');
    }
    handleDismiss();
  };

  // Don't render if dismissed
  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.5 
          }}
          className="fixed bottom-4 right-4 z-[99999] max-w-sm pointer-events-auto"
          style={{ zIndex: 99999 }}
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl shadow-2xl border border-red-400/20 backdrop-blur-sm relative z-10 pointer-events-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="font-semibold text-sm">New Feature!</span>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="mb-4">
              <p className="text-sm text-white/90 leading-relaxed">
                Explore our <strong>Timeline of Speakers</strong> to see the journey of ideas at TEDx VITAP!
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={handleNavigateToTimeline}
              className="w-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              type="button"
            >
              <span>View Timeline</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Pulse effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl blur opacity-30 animate-pulse pointer-events-none"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TimelineNavigator;
