function TabBtn({ children, active, onClick }) {
  return (
    <button
      className={`relative w-fit p-2 text-white text-2xl font-bold after:content-['']
      hover:opacity-50 duration-100 ${active && `after:absolute after:bottom-[-4px] 
      after:left-0  after:w-full after:bg-red-500 after:h-1 after:rounded-xl`}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

TabBtn.defaultProps = {
  active: false
};

export default TabBtn;
