import { useBoard } from "../../context/BoardContext";
import CustomNavLink from "../../ui/CustomNavLink";

function Boards() {
  const { boards } = useBoard();

  return (
    <div className="text-neutral-white">
      <ul className="flex flex-col gap-y-5">
        {boards.map((board) => (
          <CustomNavLink key={board.id} to={board.slug}>
            {board.name}
          </CustomNavLink>
        ))}
      </ul>
    </div>
  );
}

export default Boards;
