function Message({ children, icon = "🧐" }) {
  return (
    <div className="text-xs md:text-sm mb-8">
      {children} {icon}
    </div>
  );
}

export default Message;
