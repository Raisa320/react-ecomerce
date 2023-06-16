import { LuLayoutGrid, LuLayoutList, LuBox, LuMenu } from "react-icons/lu";
import MainBrand from "./MainBrand";
import MenuOption from "./MenuOption";
import menuOptions from "../pages/api/menuOptions";
import styles from "../styles/menu.module.css";

interface menuProps {
  menuOpen: boolean;
  setMenuOpen: void | any;
}

const Menu = ({ menuOpen, setMenuOpen }: menuProps) => {
  const iconComponents: { [key: string]: React.ReactElement } = {
    dashboard: <LuLayoutGrid />,
    catalog: <LuLayoutList />,
    box: <LuBox />,
    menu: <LuMenu />,
  };

  const handleClick = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={menuOpen ? styles.menu : styles.menuClose}>
      <div className={menuOpen ? styles.sideBar : styles.sideBarClosed}>
        <MainBrand />
        {menuOptions.map((option, id) => (
          <div key={id}>
            <MenuOption text={option.name}>
              {iconComponents[option.icon]}
            </MenuOption>
            {option.subOptions &&
              option.subOptions.map((subOption, subOptionId) => (
                <div key={subOptionId}>
                  <MenuOption text={subOption.name}>
                    {iconComponents[subOption.icon]}
                  </MenuOption>
                </div>
              ))}
          </div>
        ))}
      </div>
      <label htmlFor="burguerCheckbox">
        <input
          type="checkbox"
          id="burguerCheckbox"
          className={styles.burguer}
          checked={menuOpen}
          onChange={handleClick}
        />
        <span
          className={menuOpen ? styles.burguerIcon : styles.burguerIconClose}
        >
          {iconComponents.menu}
        </span>
      </label>
    </div>
  );
};

export default Menu;
