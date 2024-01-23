const Loading = () => {
  const skeletonItems = Array.from({ length: 8 }, (_, i) => (
    <div key={i} className={styles.card}>
      <div className={styles.imgSkeleton}></div>
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
    <div className="py-16">
      <div className=" flex w-full items-center justify-center">
        <h1 className="h-8 w-96 bg-[#404040] rounded-full"></h1>
      </div>
      <div className={styles.skeletonContainer}>{skeletonItems}</div>
    </div>
  );
};

export default Loading;

const styles = {
  card: "flex flex-col duration-300 w-full shadow-xl hover:shadow-2xl border overflow-hidden border-[#4c426f] rounded-2xl",
  heading: " text-center text-4xl font-bold",
  cardContainer:
    "gap-8 lg:gap-12 py-8 grid md:grid-cols-3 lg:grid-cols-4 w-full",
  skeletonContainer:
    "gap-8 lg:gap-12 grid md:grid-cols-3 py-8 lg:grid-cols-4 w-full min-h-screen px-4 md:px-12",
  imgSkeleton: " h-96 w-full bg-[#404040] animate-pulse",
};
