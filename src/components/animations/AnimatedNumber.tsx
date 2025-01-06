"use client";

import { easeOut } from 'framer-motion'
import MotionNumber from 'motion-number';

const AnimatedNumber = () => {
  return (
    <MotionNumber
      value={5}
      format={{ notation: 'compact' }} // Intl.NumberFormat() options
      locales="en-US" // Intl.NumberFormat() locales
      transition={{
        // Applied to layout animations on individual characters:
        layout: { type: 'spring', duration: 0.7, bounce: 0 },
        // Used for the digit animations:
        y: { type: 'spring', duration: 0.7, bounce: 0.25 },

        // Opacity applies to entering/exiting characters.
        // Note the use of the times array, explained below:
        opacity: { duration: 0.7, ease: easeOut, times: [0, 0.3] } // 0.3s perceptual duration
      }}
    />
  );
};

export default AnimatedNumber;