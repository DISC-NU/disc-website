export default function CTASection() {
  return (
    <div className="py-24">
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(94, 206, 206, 0.08) 0%, 
                rgba(208, 240, 240, 0.05) 50%,
                rgba(230, 247, 247, 0.03) 100%
              ),
              radial-gradient(circle at 0% 0%, 
                rgba(77, 204, 204, 0.3) 0%, 
                rgba(77, 204, 204, 0) 60%
              ),
              radial-gradient(circle at 100% 0%, 
                rgba(185, 233, 233, 0.2) 0%, 
                rgba(185, 233, 233, 0) 50%
              ),
              radial-gradient(circle at 100% 100%, 
                rgba(64, 180, 180, 0.25) 0%, 
                rgba(64, 180, 180, 0) 60%
              ),
              radial-gradient(circle at 0% 100%, 
                rgba(94, 206, 206, 0.2) 0%, 
                rgba(94, 206, 206, 0) 50%
              ),
              linear-gradient(180deg, 
                rgba(208, 240, 240, 0.1) 0%, 
                rgba(94, 206, 206, 0.15) 100%
              )
            `,
          }}
        />

        <div className="relative mx-auto max-w-4xl flex flex-col items-center px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#297777] to-[#40B4B4] p-4 md:whitespace-nowrap">
            Ready to make an impact?
          </h2>

          <div className="mt-12 flex flex-col items-center">
            <a
              href="https://discord.gg/mqRQ7s9CyS"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#297777] to-[#40B4B4] px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#246666] hover:to-[#35A3A3]"
            >
              <svg
                className="h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join the Community
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <p className="mt-6 text-base sm:text-lg text-gray-500">
              Already a member? Share DISC with others!
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-500 px-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#40B4B4]" />
              <span>300+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#40B4B4]" />
              <span>Active Community</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#40B4B4]" />
              <span>Weekly Events</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
