export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex flex-col top-0 left-0 right-0 bottom-0 items-center justify-center bg-sky-50 overflow-hidden z-50">
      <video
        src="/video/loading-animation.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="block w-[80%] md:w-1/3 mx-auto object-cover"
      ></video>
      <div className="w-72 h-2 bg-gray-200 rounded-full mt-8 overflow-hidden">
        <div className="progress-bar h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full"></div>
      </div>
      <p className="text-gray-600 mt-4 text-sm">Memuat halaman...</p>
    </div>
  );
}
