const TrackProgress = () => {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <span>0:03</span>
      <div className="w-60 h-1 bg-gray-600 rounded-full">
        <div className="w-10 h-1 bg-white rounded-full" />
      </div>
      <span>4:53</span>
    </div>
  );
};

export default TrackProgress;
