import { motion } from 'framer-motion';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({ page, totalPages, onPrev, onNext }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 w-full mt-2">
      <motion.button
        onClick={onPrev}
        disabled={page === 1}
        whileHover={{ scale: page === 1 ? 1 : 1.03 }}
        whileTap={{ scale: page === 1 ? 1 : 0.97 }}
        className="px-4 py-2 bg-zinc-800 disabled:opacity-50 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors"
      >
        Previous
      </motion.button>
      <div className="text-gray-400 text-sm">Page {page} of {totalPages}</div>
      <motion.button
        onClick={onNext}
        disabled={page >= totalPages}
        whileHover={{ scale: page >= totalPages ? 1 : 1.03 }}
        whileTap={{ scale: page >= totalPages ? 1 : 0.97 }}
        className="px-4 py-2 bg-zinc-800 disabled:opacity-50 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors"
      >
        Next
      </motion.button>
    </div>
  );
}


