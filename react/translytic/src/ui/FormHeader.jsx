function FormHeader({ children, languageItem, currentLangpair, handleLang }) {
  return (
    <div className="pt-6 text-xs text-secondary-100 md:text-sm">
      <div className="flex items-center justify-between border-b-2 border-primary-100 pb-4">
        <div className="flex gap-x-1 overflow-auto scrollbar-hide">
          {languageItem.map((itme) => {
            const isActive = itme.value === currentLangpair;
            return (
              <button
                key={itme.value}
                id={itme.value}
                disabled={isActive}
                onClick={() => handleLang(itme.value)}
                className={`px-2 py-1.5  flex-shrink-0 ${
                  isActive
                    ? "bg-primary-100  rounded-lg text-secondary-0"
                    : "hover:text-secondary-0 duration-300"
                }`}
              >
                {itme.lable}
              </button>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}

export default FormHeader;
