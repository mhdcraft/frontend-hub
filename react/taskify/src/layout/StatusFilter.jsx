import { useSearchParams } from "react-router-dom";

const statusOption = [
  { label: "All", value: "all" },
  { label: "Progress", value: "progress" },
  { label: "Completed", value: "completed" },
  { label: "Won't Do", value: "wontdo" },
  { label: "To Do", value: "todo" },
];

function StatusFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get("status") || statusOption.at(0).value;

  const hanleClick = (vsalue) => {
    searchParams.set("status", vsalue);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-start md:items-center gap-x-3 text-xs md:text-sm mb-8 overflow-auto">
      <p className="font-semibold hidden md:block">Status</p>
      <div className="flex gap-x-1 md:gap-x-3 bg-neutral-white p-1 rounded-xl  overflow-auto scrollbar-hide">
        {statusOption.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => hanleClick(value)}
            className={` px-3 py-1.5 rounded-xl shrink-0 ${
              currentValue === value
                ? "bg-primary text-white font-semibold"
                : "hover:bg-secondary-F5E8D5 hover:duration-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StatusFilter;
