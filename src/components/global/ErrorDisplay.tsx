const ErrorDisplay = () => {
  return (
    <section className=" min-h-screen flex flex-col gap-4 items-center justify-center text-center px-4 md:px-12">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <svg viewBox="0 0 24 24" fill="#f87171" height="5em" width="5em">
        <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 003 21h18a.998.998 0 00.883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
      </svg>
      <button
        onClick={() => window.location.reload()}
        className=" bg-[#BFCDE0] text-gray-800 hover:scale-105 duration-150 active:scale-95 p-4 rounded-full"
      >
        Reload Page
      </button>
    </section>
  );
};

export default ErrorDisplay;
