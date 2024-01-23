const Loading = () => {
  const skeletonItems = Array.from({ length: 16 }, (_, i) => (
    <div
      key={i}
      className="flex flex-col duration-300 w-full shadow-xl hover:shadow-2xl border overflow-hidden border-[#4c426f] rounded-2xl"
    >
      <div className=" h-96 w-full bg-[#303030] bg-opacity-30 animate-ping"></div>
      <div className="p-3">
        <div className=" h-3 w-full bg-yellow-300"></div>
        <div className="h-3 w-full bg-red-400"></div>
        <div className=" h-4 wf rounded-full bg-red-600"></div>
      </div>
    </div>
  ));
  return <div className="gap-8 lg:gap-12 py-8 grid md:grid-cols-3 lg:grid-cols-4 w-full">{skeletonItems}</div>;
};

export default Loading;
