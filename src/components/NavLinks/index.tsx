import React from "react";
import { NavProps } from "../../types";
import styles from "./NavLinks.module.css";
import { motion } from "motion/react";

export default function NavLinks({ navlinks }: { navlinks: NavProps[] }) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <nav onMouseLeave={() => setHovered(null)}>
      <ul className={styles.wrapper}>
        {navlinks.map(({ href, text, slug, Icon }) => {
          return (
            <li
              key={slug}
              className={styles.itemwrap}
              style={{ zIndex: hovered === slug ? 1 : 2 }}
            >
              {hovered === slug && (
                <motion.div
                  className={styles.hoveredDiv}
                  layoutId={id}
                  initial={{ borderRadius: 8 }}
                />
              )}

              <a
                href={href}
                className={styles.listitem}
                onMouseEnter={() => setHovered(slug)}
              >
                {text}
                {Icon && <Icon />}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
