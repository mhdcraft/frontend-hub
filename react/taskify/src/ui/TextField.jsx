function TextField({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="lable">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        maxLength={60}
        value={value}
        placeholder="Enter a name"
        className="textField"
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
