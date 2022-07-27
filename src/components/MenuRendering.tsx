// import Menu from "./components/Menu";
// import Categories from "./components/Categories";
// import menuElems from "./data/menuData";
// import { useState } from "react";

// const allCategories = [
//   "all",
//   ...new Set(menuElems.map((menuElem) => menuElem.category)),
// ];

// export default function MenuRendering() {
//   const [menuItems, setMenuItems] = useState(menuElems);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category: string) => {
//     if (category === "all") {
//       setMenuItems(menuElems);
//       return;
//     }
//     const newItems = menuElems.filter(
//       (menuElem) => menuElem.category === category
//     );
//     setMenuItems(newItems);
//   };
//   return (
//     <>
//       <Categories categories={categories} filterItems={filterItems} />
//       <Menu menuElems={menuItems} />
//     </>
//   );
// }
