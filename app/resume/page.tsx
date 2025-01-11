"use client";

export default function Resume() {
  return (
    <div className="flex flex-col bg-[#00f0f] text-[#fffff3] font-sans font-normal px-4 md:px-12">
      <div className="h-[30vh] md:h-[40vh] mx-auto flex flex-col justify-center text-center">
        <p className="md:text-7xl text-4xl font-semibold w-full">RESUME</p>
      </div>

      <iframe src="/Ayan Chowdhary Resume.pdf" className="h-screen"></iframe>
    </div>
  );
}
