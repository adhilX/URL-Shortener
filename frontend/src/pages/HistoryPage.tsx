import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getUserHistory } from '../service/urlService';
import type { IUrlHistory } from '../types/IUrl';
import LogoutButton from '../components/LogoutButton';
import Pagination from '../components/Pagination';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function HistoryPage() {
  const [history, setHistory] = useState<IUrlHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
   const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const data = await getUserHistory({ page, limit, search: search || undefined });
        setHistory(data.items);
        setTotal(data.total);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError('Failed to fetch history');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [page, limit, search]);

  // Debounce the search input so typing doesn't trigger immediate refetch or unmounts
  useEffect(() => {
    const id = setTimeout(() => {
      setPage(1);
      setSearch(searchInput.trim());
    }, 500);
    return () => clearTimeout(id);
  }, [searchInput]);

  const handleCopy = (shortUrl: string, id: string) => {
    const fullUrl = `${BASE_URL}/url/${shortUrl}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />

      <div className="relative z-10 container-fluid mx-20 px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl border border-zinc-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Shortener</span>
            </Link>
          </div>
          <LogoutButton />
        </motion.div>

        {/* Global Search Bar (outside list to preserve focus) */}
        <div className="mb-6">
          <div className="max-w-xl">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </span>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search long or short URL"
                className="w-full pl-9 pr-10 py-2 bg-zinc-900 text-white rounded-lg border border-zinc-800 focus:outline-none focus:border-zinc-600 focus:ring-2 focus:ring-white/10 transition-all"
              />
              {searchInput && (
                <button
                  aria-label="Clear search"
                  onClick={() => setSearchInput('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-white rounded-2xl mb-4 shadow-lg shadow-white/20">
            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">URL History</h1>
          <p className="text-gray-400">
            View and manage all your shortened URLs
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zinc-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden"
        >
          <div className="p-8">
            {loading && (
              <div className="flex items-center justify-center py-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
                />
                <span className="ml-3 text-gray-400">Loading history...</span>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="p-4 bg-red-900/20 border border-red-800 rounded-xl">
                  <p className="text-red-400">{error}</p>
                </div>
              </div>
            )}

            {!loading && !error && history.length === 0 && (
              <div className="text-center py-12">
                <div className="p-8 bg-zinc-800 rounded-xl">
                  <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">No URLs Yet</h3>
                  <p className="text-gray-400 mb-4">Start shortening URLs to see your history here</p>
                  <Link
                    to="/"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>Create Your First Short URL</span>
                  </Link>
                </div>
              </div>
            )}

            {!loading && !error && history.length > 0 && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-white">
                      {total} URL{total !== 1 ? 's' : ''}
                    </h2>
                    <span className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-gray-300 border border-zinc-700">
                      Page {page} / {totalPages}
                    </span>
                  </div>
                  <div className="flex items-center gap-3" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {history.map((item, index) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-black border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className="block text-gray-400 text-xs font-medium mb-1">ORIGINAL URL</label>
                          <p className="text-gray-300 text-sm break-all bg-zinc-900 p-3 rounded-lg">
                            {item.longUrl}
                          </p>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Short URL</label>
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 p-3 bg-zinc-900 border border-zinc-700 rounded-lg">
                              <span className="text-white font-mono">
                                {BASE_URL}/url/{item.shortUrl}
                              </span>
                            </div>
                            <motion.button
                              onClick={() => handleCopy(item.shortUrl, item._id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 bg-white rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              {copiedId === item._id ? (
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              )}
                            </motion.button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-gray-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>{item.history.length} clicks</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Created {formatDate(item.createdAt)}</span>
                            </div>
                          </div>
                          <motion.button
                            onClick={() => window.open(`${BASE_URL}/url/${item.shortUrl}`, '_blank')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors"
                          >
                            Visit
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPrev={() => setPage((p) => Math.max(1, p - 1))}
                  onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HistoryPage;
