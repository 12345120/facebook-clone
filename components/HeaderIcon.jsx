function HeaderIcon({ Icon, active }) {
  return (
    <div className="cursor-pointer text-gray-700 hover:bg-gray-100 px-2 h-10 md:px-10 md:h-14 grid place-items-center rounded-xl active:border-b-8 active:border-blue-500 hover:text-blue-500" >
      <Icon className={`h-6 ${active && 'text-blue-500'}`}></Icon>
    </div>
  );
}

export default HeaderIcon;
