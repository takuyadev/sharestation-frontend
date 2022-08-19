function FilledRndContainer({ children }) {
  return (
    <div className="fixed flex flex-col gap-6 p-12 bottom-0 h-1/2 w-full rounded-t-3xl bg-slate-100">
      {children}
    </div>
  );
}

function BlurredRndContainer({ children }) {
  return (
    <div className="fixed flex bg-black/50 flex-col gap-6 p-12 bottom-0 min-h-1/2 w-full rounded-t-3xl backdrop-blur-sm ">
      {children}
    </div>
  );
}

export { FilledRndContainer, BlurredRndContainer };
