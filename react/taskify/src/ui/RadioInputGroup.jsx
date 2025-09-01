function RadioInputGroup({ options, name, onChange, selected }) {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {options.map(({ label, value }) => (
        <div
          key={value}
          className={`bg-neutral-E3E8EF rounded-lg   ${
            selected === value && "bg-warningLight"
          }`}
        >
          <label htmlFor={value} className="cursor-pointer block px-2 py-1.5">
            {label}
          </label>
          <input
            type="radio"
            name={name}
            id={value}
            value={value}
            checked={selected === value}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
}

export default RadioInputGroup;
