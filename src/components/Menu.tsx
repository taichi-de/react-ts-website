type menuItem = {
  id: string;
  title: string;
  img: string;
  desc: string;
  price: number;
};

type MenuProps = {
  menuItems: menuItem[];
};

export default function Menu ({ menuItems }: MenuProps) {
  return (
    <div>
      {menuItems.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id}>
            <img src={img} alt={title}/>
            <div>
              <header>
                <h4>{title}</h4>
                <h4>€{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
