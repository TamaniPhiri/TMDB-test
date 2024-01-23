const Loading = () => {
  const skeletonItems = Array.from({ length: 8 }, (_, i) => (
    <div key={i} className={styles.card}>
      <div className={styles.imgSkeleton}></div>
      <div className={styles.metaSkeleton}>
        <div className={styles.heading}></div>
        <div className={styles.date}></div>
        <div className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id
          nesciunt eligendi saepe natus suscipit? Harum eos error
        </div>
      </div>
    </div>
  ));
  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headingCard}></h1>
      </div>
      <main className={styles.skeletonContainer}>{skeletonItems}</main>
    </section>
  );
};

export default Loading;

const styles = {
  card: "flex flex-col duration-300 w-full shadow-xl hover:shadow-2xl border overflow-hidden border-[#4c426f] rounded-2xl",
  heading: " h-3 w-1/4 bg-[#404040] rounded-full animate-pulse",
  cardContainer:
    "gap-8 lg:gap-12 py-8 grid md:grid-cols-3 lg:grid-cols-4 w-full",
  skeletonContainer:
    "gap-8 lg:gap-12 grid md:grid-cols-3 py-8 lg:grid-cols-4 w-full min-h-screen",
  imgSkeleton: " h-96 w-full bg-[#404040] animate-pulse",
  metaSkeleton: "p-3 flex flex-col gap-2",
  date: "h-3 w-full bg-[#404040] rounded-full animate-pulse",
  p: " h-3 bg-[#404040] w-1/2 text-transparent rounded-full animate-pulse",
  container: "py-16 px-4 md:px-12",
  headerContainer: " flex w-full items-center justify-center",
  headingCard: "h-8 md:w-96 w-full bg-[#404040] rounded-full animate-pulse",
};
