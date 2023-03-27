const Suggestion = ({ setisOpen, handleSubmit, suggestUser }) => {
  const handleClick = () => {
    setisOpen(false);
    handleSubmit();
  };

  return (
    <div
      onClick={handleClick}
      key={suggestUser.id}
      className="flex items-center gap-2 bg-white shadow-md transition dark:hover:translate-y-1 dark:hover:bg-[#29375c] dark:bg-[#1f2a48] mt-2 p-2 rounded-md cursor-pointer"
    >
      <img
        className="h-8 w-8 object-cover overflow-hidden rounded-full"
        src={suggestUser?.avatar_url}
        alt={suggestUser?.login}
      />
      <span className="text-gray-500 dark:text-slate-200">
        {suggestUser?.name}
      </span>
    </div>
  );
};

export default Suggestion;
