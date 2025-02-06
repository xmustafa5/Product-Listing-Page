import Link from "next/link";

function Page() {
  return (
    <div className="min-h-screen flex-1 flex flex-col items-center justify-center relative overflow-hidden container mx-auto px-4 py-8">
      {/* Background decoration - updated z-index */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content - updated z-index */}
      <div className="relative z-10 px-6 py-12 backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-3xl shadow-2xl max-w-3xl mx-4">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
              Welcome to
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Product Showcase
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection featuring infinite scrolling,
            real-time search, and a responsive design that adapts perfectly to
            any device.
          </p>

          <div className="pt-4">
            <Link
              href="/product-task"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full" />
              <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-gradient-to-br from-purple-600 to-blue-600 rounded-full" />
              <span className="relative flex items-center space-x-2">
                Explore Products
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
