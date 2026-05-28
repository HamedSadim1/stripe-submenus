import { useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";
import LinkItem from "./LinkItem";

const Submenu = () => {
  const { isSubmenuOpen, coordinates, page } = useGlobalContext();
  const container = useRef<HTMLDivElement>(null);

  const column =
    page.links.length === 3
      ? "col-3"
      : page.links.length > 3
        ? "col-4"
        : "col-2";

  useEffect(() => {
    const submenu = container.current as HTMLDivElement;
    const { center, bottom } = coordinates;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [coordinates]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page.page}</h4>

      <div className={`submenu-center ${column} `}>
        {page.links.map((link, index) => (
          <LinkItem key={index} {...link} />
        ))}
      </div>
    </aside>
  );
};

export default Submenu;
