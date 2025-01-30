"use client";

import { useEffect, useState } from "react";
import { Flex, Fade, IconButton, LetterFx } from "@/once-ui/components"; // Make sure LetterFx is exported by Once UI
import styles from "@/components/Header.module.scss";
import classNames from "classnames";

export function Header() {
  // The default theme is taken from localStorage or falls back to 'dark' if not found.
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // If you want to remember the user's preference, try loading it from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
    <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
    <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
    <Flex
    as="header"
    horizontal="space-between"
    vertical="center"
    padding="m"
    fillWidth
    fitHeight
    background="overlay"
    className={classNames(styles.position, styles.mask)}
    zIndex={9}
    // style, background, etc. if needed
    >
    {/* Animated title using LetterFx */}
    <h1
        style={{
            fontFamily: "var(--font-family-code)",
            margin: "0 16px", // Add horizontal margin
            padding: "8px 0"  // Add vertical padding
        }}>
        <span style={{ fontFamily: "var(--font-family-code)" }}>
        <LetterFx
            speed="medium"
            trigger="instant"
            charset={["X", "@", "$", "a", "H", "z", "o", "0", "y", "#", "?", "*", "0", "1", "+"]}
        >
            luch0247
        </LetterFx>
        </span>
    </h1>

    {/* IconButton that switches icons based on current theme */}
    <IconButton
        icon={theme === "dark" ? "light" : "dark"} // Choose icons that exist in Once UI
        onClick={toggleTheme}
        aria-label="Toggle theme"
        style={{
            margin: "0 16px", // Add horizontal margin
            padding: "8px",   // Add padding
        }}
    />
    </Flex>
    </>
  );
}
