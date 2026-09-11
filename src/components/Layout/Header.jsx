import { ChevronDown, QrCode } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import loginLogo from "../../assets/login-logo.png";
import useTheme from "../../hooks/useTheme";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Australia",
  "Canada",
  "Singapore",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
  "South Africa",
  "New Zealand",
  "Qatar",
  "Saudi Arabia",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Malaysia",
  "Indonesia",
  "Nepal",
  "Sri Lanka",
  "Bangladesh",
  "Pakistan",
  "Nigeria",
  "Kenya",
  "Egypt",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Ireland",
  "Belgium",
  "Portugal",
  "Mexico",
  "Argentina",
  "Russia",
  "South Korea",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Hong Kong",
  "Israel",
];

const FONT_STEPS = [87.5, 100, 112.5, 125];

const Header = () => {
  const { setTheme, isDark, colors } = useTheme();

  const [country, setCountry] = useState("India");
  const [fontStepIndex, setFontStepIndex] = useState(1);
  const [isFontMenuOpen, setIsFontMenuOpen] = useState(false);

  const fontMenuRef = useRef(null);

  // ------------------------------------------------------------
  // Apply font scale globally
  // ------------------------------------------------------------

  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_STEPS[fontStepIndex]}%`;

    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [fontStepIndex]);

  // ------------------------------------------------------------
  // Close font dropdown when clicking outside
  // ------------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fontMenuRef.current && !fontMenuRef.current.contains(event.target)) {
        setIsFontMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsFontMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ------------------------------------------------------------
  // Font controls
  // ------------------------------------------------------------

  const zoomIn = () => {
    setFontStepIndex((index) => Math.min(index + 1, FONT_STEPS.length - 1));
  };

  const zoomOut = () => {
    setFontStepIndex((index) => Math.max(index - 1, 0));
  };

  const resetFont = () => {
    setFontStepIndex(1);
  };

  const handleFontControl = (action) => {
    if (action === "reset") {
      resetFont();
    }

    if (action === "decrease") {
      zoomOut();
    }

    if (action === "increase") {
      zoomIn();
    }

    setIsFontMenuOpen(false);
  };

  // ------------------------------------------------------------
  // Utility links
  // ------------------------------------------------------------

  const utilityLinkClass = `
    whitespace-nowrap
    text-[13px]
    font-medium
    no-underline
    transition-colors
    duration-200
    hover:text-[var(--main-color)]
    focus-visible:rounded
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--main-color)]
    focus-visible:ring-offset-2
    max-[900px]:text-xs
    ${isDark ? "text-white" : "text-black"}
  `;

  // ------------------------------------------------------------
  // Action links
  // ------------------------------------------------------------

  const actionLinkClass = `
    whitespace-nowrap
    text-[13px]
    font-semibold
    no-underline
    transition-colors
    duration-200
    hover:text-[var(--main-color)]
    focus-visible:rounded
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--main-color)]
    focus-visible:ring-offset-2
    max-[900px]:text-xs
    ${isDark ? "text-white" : "text-[#111]"}
  `;

  // ------------------------------------------------------------
  // Accessibility button
  // ------------------------------------------------------------

  const accessibilityButtonClass = `
    flex
    h-7
    min-w-[31px]
    items-center
    justify-center
    rounded-[3px]
    px-1.5
    font-sans
    text-sm
    font-bold
    outline-none
    transition-all
    duration-200
    focus-visible:ring-2
    focus-visible:ring-[var(--main-color)]
    focus-visible:ring-offset-1
  `;
  const fontMenuButtonClass = `
  flex
  h-8
  w-full
  items-center
  justify-center
  rounded-[3px]
  bg-white
  text-sm
  font-bold
  text-black
  transition-colors
  hover:bg-[#F3F4F6]
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--main-color)]
  focus-visible:ring-inset
  disabled:cursor-not-allowed
  disabled:opacity-30
`;

  return (
    <header
      className="
        fixed
        top-0
        z-[100]
        !h-[100px]
        w-full
        border-b
        [border-bottom-color:#d2d2d2]
        [border-bottom-style:ridge]
        bg-white
        shadow-[0_8px_17px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]
        transition-colors
        duration-200
      "
      style={{
        color: colors.text,
      }}
    >
      <div
        className="
          mx-auto
          grid
          min-h-[100px]
          w-full
          max-w-[1440px]
          grid-cols-[220px_minmax(0,1fr)]
          px-8
          max-[1100px]:grid-cols-[190px_minmax(0,1fr)]
          max-[1100px]:px-[22px]
          max-[900px]:grid-cols-[170px_minmax(0,1fr)]
          max-[900px]:px-[18px]
          max-[700px]:grid-cols-[1fr]
          max-[700px]:items-center
          max-[700px]:justify-start
          max-[700px]:px-4
          max-[430px]:px-3
        "
      >
        {/* ======================================================
            LOGO
        ======================================================= */}

        <div
          className="
            flex
            items-center
            justify-start
            ml-5
            max-[700px]:ml-3
            max-[700px]:min-h-[62px]
            max-[700px]:py-2
          "
        >
          <a
            href="/"
            aria-label="Demo Bank Home"
            className="
              whitespace-nowrap
              leading-none
              no-underline
              outline-none
              focus-visible:rounded
              focus-visible:ring-2
              focus-visible:ring-[#B9862F]
              focus-visible:ring-offset-4
            "
          >
            <img
              src={loginLogo}
              alt="bob World Internet"
              className="
                block
                h-auto
                w-[240px]
                max-w-full
                max-[700px]:h-[62px]
                max-[700px]:w-[154px]
                max-[430px]:h-[50px]
                max-[430px]:w-[124px]
              "
            />
          </a>
        </div>

        {/* ======================================================
            RIGHT SIDE
        ======================================================= */}

        <div className="flex min-w-0 flex-col max-[700px]:hidden">
          {/* ====================================================
              ROW 1
          ===================================================== */}

          <div
            className="
              flex
              min-h-[50px]
              min-w-0
              items-center
              justify-end
              gap-7

              max-[1100px]:gap-5
              max-[700px]:min-h-0
              max-[700px]:flex-wrap
              max-[700px]:justify-between
              max-[700px]:gap-2.5
              max-[700px]:border-b-0
              max-[700px]:py-2.5
              max-[430px]:items-start
            "
            style={{
              borderColor: colors.border,
            }}
          >
            {/* ------------------------------------------------
                Utility Links
            ------------------------------------------------- */}

            <nav
              aria-label="Utility navigation"
              className="
                flex
                min-w-0
                flex-wrap
                items-center
                justify-end
                gap-x-6
                gap-y-1
                max-[1100px]:gap-x-4
                max-[700px]:flex-1
                max-[700px]:justify-start
                max-[700px]:gap-x-4
              "
            >
              <a href="#sitemap" className={utilityLinkClass}>
                Sitemap
              </a>

              <a href="#main-content" className={utilityLinkClass}>
                Skip to Main Content
              </a>
            </nav>

            {/* ------------------------------------------------
                Location
            ------------------------------------------------- */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-1.5
                border-b
                pb-1
              "
              style={{
                color: colors.subtext,
                borderColor: colors.border,
              }}
            >
              <span>Location</span>

              <label htmlFor="country-select" className="sr-only">
                Select your location
              </label>

              <select
                id="country-select"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                aria-label="Select your location"
                className="
                  max-w-[190px]
                  cursor-pointer
                  appearance-auto
                  border-0
                  bg-transparent
                  text-[13px]
                  font-medium
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--main-color)]
                  max-[1100px]:max-w-[150px]
                  max-[900px]:text-xs
                  max-[700px]:max-w-[135px]
                  max-[430px]:max-w-none
                "
              >
                {COUNTRIES.map((countryName) => (
                  <option
                    key={countryName}
                    value={countryName}
                    style={{
                      backgroundColor: colors.panel,
                      color: colors.text,
                    }}
                  >
                    {countryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ====================================================
              ROW 2
          ===================================================== */}

          <div
            className="
              flex
              min-h-[61px]
              min-w-0
              items-center
              justify-end
              gap-[18px]
              py-2
              max-[1100px]:gap-3
              max-[900px]:gap-2.5
              max-[700px]:hidden
            "
          >
            {/* ==================================================
                FONT + THEME CONTROLS
            =================================================== */}

            <div
              aria-label="Accessibility controls"
              className="
                flex
                shrink-0
                items-center
                gap-1
                rounded-[5px]
                border
                p-1
              "
              style={{
                borderColor: colors.border,
              }}
            >
              {/* ==================================================
    FONT SIZE DROPDOWN
=================================================== */}
              <div ref={fontMenuRef} className="relative">
                {/* ------------------------------------------------
      Dropdown Trigger
  ------------------------------------------------- */}
                <button
                  type="button"
                  aria-label="Font size options"
                  aria-haspopup="menu"
                  aria-expanded={isFontMenuOpen}
                  title="Font size"
                  onClick={() => setIsFontMenuOpen((open) => !open)}
                  className={`
      ${accessibilityButtonClass}
      gap-1
      ${
        fontStepIndex === 1
          ? isDark
            ? "bg-white text-black"
            : "bg-white text-black"
          : isDark
            ? "text-slate-300 hover:bg-slate-700"
            : "text-[#5B6B7C] hover:bg-[#DCE3EA]"
      }
    `}
                >
                  <span>A</span>

                  <ChevronDown
                    size={13}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className={`
        transition-transform
        duration-200
        ${isFontMenuOpen ? "rotate-180" : ""}
      `}
                  />
                </button>

                {/* ------------------------------------------------
      Dropdown Menu
  ------------------------------------------------- */}
                {isFontMenuOpen && (
                  <div
                    role="menu"
                    aria-label="Font size options"
                    className="
        absolute
        right-0
        top-full
        z-[1100]
        mt-1
        min-w-[48px]
        overflow-hidden
        rounded-[5px]
        border
        bg-white
        p-1
        shadow-lg
      "
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: colors.border,
                    }}
                  >
                    {/* Normal */}
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleFontControl("reset")}
                      aria-label="Normal font size"
                      title="Normal font size"
                      className={fontMenuButtonClass}
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                      }}
                    >
                      A
                    </button>

                    {/* Decrease */}
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleFontControl("decrease")}
                      disabled={fontStepIndex === 0}
                      aria-label="Decrease font size"
                      title="Decrease font size"
                      className={fontMenuButtonClass}
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                      }}
                    >
                      A-
                    </button>

                    {/* Increase */}
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => handleFontControl("increase")}
                      disabled={fontStepIndex === FONT_STEPS.length - 1}
                      aria-label="Increase font size"
                      title="Increase font size"
                      className={fontMenuButtonClass}
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                      }}
                    >
                      A+
                    </button>
                  </div>
                )}
              </div>

              {/* ==================================================
                  THEME CONTROLS
              =================================================== */}

              <div
                className="
                  ml-2
                  flex
                  items-center
                  gap-1
                  border-l
                  pl-2
                "
                style={{
                  borderColor: colors.border,
                }}
              >
                {/* ------------------------------------------------
                    Dark Theme
                ------------------------------------------------- */}

                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  aria-label="Switch to dark theme"
                  aria-pressed={isDark}
                  title="Dark theme"
                  className={`
                    ${accessibilityButtonClass}
                    border
                    border-black
                    bg-black
                    text-white
                    ${
                      isDark
                        ? "ring-2 ring-[#D9A441] ring-inset"
                        : "hover:bg-[#222]"
                    }
                  `}
                >
                  A
                </button>

                {/* ------------------------------------------------
                    Light Theme
                ------------------------------------------------- */}

                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  aria-label="Switch to light theme"
                  aria-pressed={!isDark}
                  title="Light theme"
                  className={`
                    ${accessibilityButtonClass}
                    border
                    border-[#C8CED5]
                    bg-[#E5E7EB]
                    text-black
                    ${
                      !isDark
                        ? "ring-2 ring-[#B9862F] ring-inset"
                        : "hover:bg-[#D1D5DB]"
                    }
                  `}
                >
                  A
                </button>
              </div>
            </div>

            {/* ==================================================
                ACTION LINKS
            =================================================== */}

            <nav
              aria-label="Quick links"
              className="
                flex
                min-w-0
                items-center
                gap-[18px]
                max-[1100px]:gap-3
                max-[900px]:gap-2.5
              "
            >
              {["Locate Us", "Contact Us", "Ask ADI"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
                  className={actionLinkClass}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* ==================================================
                QR SCAN
            =================================================== */}

            <button
              type="button"
              aria-label="Scan QR code"
              title="QR Scan"
              className="
                flex
                h-[34px]
                shrink-0
                items-center
                justify-center
                gap-1.5
                rounded
                border
                px-2.5
                text-xs
                font-semibold
                outline-none
                transition-colors
                duration-200
                hover:border-[var(--main-color)]
                hover:text-[var(--main-color)]
                focus-visible:ring-2
                focus-visible:ring-[var(--main-color)]
              "
              style={{
                borderColor: colors.border,
                color: colors.primary,
              }}
            >
              <QrCode size={19} aria-hidden="true" className="shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
