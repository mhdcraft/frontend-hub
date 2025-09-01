function Textarea({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="lable">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        placeholder="Enter a short description"
        className="textField resize-none h-[34vh] scrollbar-hide"
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Textarea;
