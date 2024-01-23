const Loading = () => {
  const skeletonItems = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="flex flex-col duration-300 w-full shadow-xl hover:shadow-2xl border overflow-hidden border-[#4c426f] rounded-2xl"
    >
      <div className=" h-96 w-full bg-[#404040] animate-pulse"></div>
      <div className="p-3 flex flex-col gap-2">
        <div className=" h-3 w-1/4 bg-[#404040] rounded-full animate-pulse"></div>
        <div className="h-3 w-full bg-[#404040] rounded-full animate-pulse"></div>
        <div className=" h-3 bg-[#404040] w-1/2 text-transparent rounded-full animate-pulse">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id
          nesciunt eligendi saepe natus suscipit? Harum eos error
        </div>
      </div>
    </div>
  ));
  return (
    <div className="gap-8 lg:gap-12 grid md:grid-cols-3 lg:grid-cols-4 w-full py-16 min-h-screen px-4 md:px-12">
      {skeletonItems}
    </div>
  );
};

export default Loading;
