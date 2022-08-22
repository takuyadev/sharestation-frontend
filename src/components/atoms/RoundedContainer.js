function FilledRndContainer({ children }) {
  return (
    <article className="fixed flex flex-col gap-6 p-10 bottom-0 h-1/2 w-full rounded-t-3xl overflow-scroll bg-slate-100 ">
      {children}
    </article>
  );
}

function BlurredRndContainer({ children }) {
  return (
    <article className="fixed flex bg-black/50 flex-col gap-6 p-10 bottom-0 min-h-1/2 w-full rounded-t-3xl overflow-scroll backdrop-blur-lg">
      {children}
    </article>
  );
}

export { FilledRndContainer, BlurredRndContainer };
