import { NavigationMenu } from "radix-ui";
import styles from "./nav.module.css";
import { CaretDownIcon } from "@radix-ui/react-icons";

export const NavBar = () => {
  return (
    <div>
      <NavigationMenu.Root className={styles.Root}>
        <NavigationMenu.List className={styles.List}>
          <NavigationMenu.Item className={styles.Item}>
            <NavigationMenu.Trigger className={styles.Trigger}>
              <p>About Us</p>
              <CaretDownIcon className={styles.CaretDown} aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.Content}>
              <ul className={`${styles.List} one`}>
                <li style={{ gridRow: "span 3" }}>
                  <NavigationMenu.Link asChild>
                    <a className={styles.Callout} href="/">
                      <svg
                        aria-hidden
                        width="38"
                        height="38"
                        viewBox="0 0 25 25"
                        fill="white"
                      >
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className={styles.CalloutHeading}>
                        Radix Primitives
                      </div>
                      <p className={styles.CalloutText}>
                        Unstyled, accessible components for React.
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>
                <NavigationMenu.Item
                  href="https://stitches.dev/"
                  title="Stitches"
                >
                  CSS-in-JS with best-in-class developer experience.
                </NavigationMenu.Item>
                <NavigationMenu.Item href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </NavigationMenu.Item>
                <NavigationMenu.Item
                  href="https://icons.radix-ui.com/"
                  title="Icons"
                >
                  A crisp set of 15x15 icons, balanced and consistent.
                </NavigationMenu.Item>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Add a second thing to navigation */}
          <NavigationMenu.Item className={styles.Item}>
            <p>Business</p>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};
