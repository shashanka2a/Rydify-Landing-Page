import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

// Lazy load motion components with better performance
export const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  {
    ssr: false,
    loading: () => <div />
  }
);

export const MotionSection = dynamic(
  () => import('framer-motion').then(mod => mod.motion.section),
  {
    ssr: false,
    loading: () => <section />
  }
);

export const MotionButton = dynamic(
  () => import('framer-motion').then(mod => mod.motion.button),
  {
    ssr: false,
    loading: () => <button />
  }
);

export const MotionA = dynamic(
  () => import('framer-motion').then(mod => mod.motion.a),
  {
    ssr: false,
    loading: () => <a />
  }
);

export const MotionH1 = dynamic(
  () => import('framer-motion').then(mod => mod.motion.h1),
  {
    ssr: false,
    loading: () => <h1 />
  }
);

export const MotionP = dynamic(
  () => import('framer-motion').then(mod => mod.motion.p),
  {
    ssr: false,
    loading: () => <p />
  }
);

// Preload framer-motion on user interaction
export const preloadMotion = () => {
  import('framer-motion');
};