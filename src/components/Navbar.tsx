import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data/navbarData";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLInputElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef?.current?.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current?.style.height != undefined
        ? (linksContainerRef.current.style.height = `${linksHeight}px`)
        : 0;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img
            style={{ height: "40px" }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/noto-emoji/329/large-blue-diamond_1f537.png"
          />
          <button
            className="nav-toggle"
            onClick={toggleLinks}
            data-testid="toggle"
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
