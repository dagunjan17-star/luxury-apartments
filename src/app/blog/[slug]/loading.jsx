export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-[#FFF5F5]">

      <div className="flex flex-col items-center gap-5">

        {/* 🔥 SPINNER */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#FF5A5A]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF5A5A] border-r-[#FF3B3B] animate-spin"></div>
        </div>

        {/* 🔥 TEXT */}
        <p className="text-[#FF5A5A] text-sm tracking-wide animate-pulse font-medium">
          Loading luxury apartments...
        </p>

      </div>

    </div>
  );
}