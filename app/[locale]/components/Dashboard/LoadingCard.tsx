export function LoadingCard() {
  return (
    <div className="bg-base-100 rounded-xl p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-base-300 h-8 w-8 animate-pulse rounded-full"></div>
        <div className="bg-base-300 h-6 w-32 animate-pulse rounded"></div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-base-200 animate-pulse rounded-lg p-4">
            <div className="bg-base-300 mb-2 h-4 rounded"></div>
            <div className="bg-base-300 h-6 rounded"></div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-base-200 animate-pulse rounded-lg p-4">
            <div className="bg-base-300 mb-2 h-4 w-3/4 rounded"></div>
            <div className="bg-base-300 h-3 w-1/2 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
