function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <div className="w-10 h-10 border-4 border-neutral-700 border-t-[#28BDB4] rounded-full animate-spin"></div>
      <p className="text-textSecondary text-sm">Loading technologies...</p>
    </div>
  );
}

export default Loading;
