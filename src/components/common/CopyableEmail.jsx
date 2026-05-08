import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

const CopyableEmail = ({ email, className, children, showCopyIcon = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div 
      className={cn("relative group cursor-pointer", className)} 
      onClick={handleCopy}
    >
      {children || (
        <div className="flex items-center gap-2">
          <span className="transition-colors group-hover:text-brand">
            {email}
          </span>
          {showCopyIcon && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "p-1 rounded-md bg-gray-100 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand/10 hover:text-brand",
                copied && "text-green-500 opacity-100"
              )}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </motion.div>
          )}
        </div>
      )}

      <AnimatePresence mode="wait">
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.5, x: '-50%' }}
            animate={{ opacity: 1, y: -40, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: -50, scale: 0.5, x: '-50%' }}
            className="absolute left-1/2 bg-green-500 text-white text-[10px] px-3 py-1.5 rounded-full font-black flex items-center gap-1.5 shadow-[0_10px_20px_rgba(34,197,94,0.4)] z-[100] whitespace-nowrap"
          >
            <motion.div
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Check size={12} strokeWidth={3} />
            </motion.div>
            COPIED!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Amazing Pulse Effect */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 border-2 border-green-500 rounded-[inherit] pointer-events-none z-10"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyableEmail;
