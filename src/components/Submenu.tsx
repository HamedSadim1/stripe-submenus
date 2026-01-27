import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";
import LinkItem from "./LinkItem";

const Submenu = () => {
  const { isSubmenuOpen, coordinates, page } = useGlobalContext();
  const [column, setColumn] = useState<string>("col-2");

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setColumn("col-2");
    const submenu = container.current as HTMLDivElement;
    const { center, bottom } = coordinates;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (page.links.length === 3) {
      setColumn("col-3");
    }
    if (page.links.length > 3) {
      setColumn("col-4");
    }
  }, [coordinates, page.links]);

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
