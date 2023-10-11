import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";
import "../assets/menu.css";
import "../assets/sidebarLeft.css";
import SidebarLeft from "./SidebarLeft.jsx";

export default function Breakfast() {
  const { items, token, addToBasket } = useOutletContext();

  // filter items that belong to the "Breakfast" category
  const breakfastItems = items.filter((item) => item.category === "Breakfast");

  return (
    <>
      <div className="main-containers">
        <SidebarLeft />
        <div className="display-items-containers">
          <h1 className="display-items-titles">Breakfast</h1>
          <div className="grid-containers">
            {breakfastItems.map((item) => {
              return (
                <Item
                  item={item}
                  token={token}
                  addToBasket={addToBasket}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
