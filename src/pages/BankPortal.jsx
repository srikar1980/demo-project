import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Header from "../components/Layout/Header";
import useTheme from "../hooks/useTheme";

// -----------------------------------------------------------------------------
// Hardcoded data
// -----------------------------------------------------------------------------

const NOTICES = [
  {
    id: 1,
    title: "Demo security notice",
    body: "Dummy text: never share your login PIN or OTP with anyone, even if they claim to be from the support team.",
  },
  {
    id: 2,
    title: "Demo account update",
    body: "Dummy text: keep your mobile number and email current so your account alerts and notifications always reach you.",
  },
  {
    id: 3,
    title: "Demo password message",
    body: "Dummy text: avoid saving passwords on shared computers. Use a secure device and re-enter your password each time.",
  },
  {
    id: 4,
    title: "Demo service alert",
    body: "Dummy text: scheduled maintenance may briefly interrupt services. Please plan your transactions in advance.",
  },
];

const AUTO_ADVANCE_MS = 4500;

const INFO_MODALS = {
  whatCanYouDo: {
    label: "What Can You Do?",
    title: "What can you do here?",
    body: "From this portal you can check balances, move money between your own accounts, pay bills, and manage cards — all the everyday things you’d otherwise need a branch visit for.",
  },
  viewDemo: {
    label: "View Demo",
    title: "See it in action",
    body: "A short walkthrough of the login flow and dashboard would normally play here — swap this in for an embedded video or step-by-step tour.",
  },
  usefulInfo: {
    label: "Useful Information / Links",
    title: "Useful information & links",
    body: "Quick access to things like fee schedules, branch locators, and help articles would live here, grouped by topic.",
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    body: "Common questions — resetting a forgotten password, unlocking a user ID, updating contact details — would be listed here, each expandable for a full answer.",
  },
};

// -----------------------------------------------------------------------------
// Reusable Modal
// -----------------------------------------------------------------------------

function Modal({ isOpen, onClose, title, children, colors }) {
  const dialogRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Move focus into dialog when it opens
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-3
        sm:p-4
      "
      style={{
        background: colors.overlay,
      }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="
          w-full
          max-w-md
          rounded-lg
          p-4
          outline-none
          sm:p-6
        "
        style={{
          backgroundColor: colors.panel,
          border: `1px solid ${colors.border}`,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3
            id="modal-title"
            className="text-lg font-semibold"
            style={{
              color: colors.primary,
            }}
          >
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="
              text-xl
              leading-none
              outline-none
              focus-visible:rounded
              focus-visible:ring-2
              focus-visible:ring-[#B9862F]
            "
            style={{
              color: colors.subtext,
            }}
          >
            &times;
          </button>
        </div>

        <div
          className="text-sm leading-relaxed"
          style={{
            color: colors.text,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Bank Portal
// -----------------------------------------------------------------------------

export default function BankPortal() {
  const { colors, isDark } = useTheme();

  const [noticeIndex, setNoticeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userId, setUserId] = useState("");
  const [openModalKey, setOpenModalKey] = useState(null);

  const intervalRef = useRef(null);

  // ---------------------------------------------------------------------------
  // Notice auto advance
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    intervalRef.current = setInterval(() => {
      setNoticeIndex((index) => (index + 1) % NOTICES.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const notice = NOTICES[noticeIndex];

  return (
    <div
      className="
        flex
        min-h-screen
        w-full
        flex-col
        pt-[100px]
        transition-colors
        duration-200
      "
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      <style>{`
        @keyframes noticeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ---------------------------------------------------------------------
          Header
      --------------------------------------------------------------------- */}

      <Header />

      <div
        className="
          box-border
          min-h-[15px]
          h-auto
          w-full
          ml-0
          bg-[#ff6633]
          px-3
          pt-[10px]
          pb-[5px]
          text-right
          text-xs
          font-bold
          leading-4
          text-white
          [overflow-wrap:anywhere]
          shadow-[0_2px_5px_0_rgba(0,0,0,0.16),0_2px_10px_0_rgba(0,0,0,0.12)]
        "
        style={{
          backgroundColor: isDark ? colors.ribbon : "var(--main-color)",
          color: colors.ribbonText,
        }}
      >
        24x7x365 Helpline 1800 5700 / +9179 6629 6629(For NRI Customers)
      </div>

      {/* ---------------------------------------------------------------------
          Main Login + Notice Area
      --------------------------------------------------------------------- */}

      <main
        id="main-content"
        className="
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-1
          flex-col
          gap-5
          px-3
          py-5
          sm:px-6
          sm:py-8
          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-10
        "
      >
        {/* -------------------------------------------------------------------
            Login Form - LEFT
        ------------------------------------------------------------------- */}

        <section
          className="
            w-full
            rounded-lg
            p-4
            sm:p-6
            lg:w-[380px]
            lg:shrink-0
          "
          style={{
            backgroundColor: colors.panel,
            border: `1px solid ${colors.border}`,
          }}
          aria-label="Login"
        >
          <p
            className="mb-4 text-xs"
            style={{
              color: colors.subtext,
            }}
          >
            * Fields are mandatory
          </p>

          {/* User ID */}

          <div className="relative mt-1 mb-4 w-full">
            <input
              id="user-id"
              type="text"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
              placeholder=" "
              className="
                peer
                h-10
                w-full
                border-0
                border-b
                border-b-[#E0E0E0]
                bg-transparent
                px-0
                pt-3
                text-black
                outline-none
                focus:border-b-[#B9862F]
                focus-visible:ring-0
              "
              style={{
                color: colors.text,
                backgroundColor: colors.inputBg,
              }}
            />
            <label
              htmlFor="user-id"
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                text-sm
                text-gray-500
                transition-all
                peer-focus:top-0
                peer-focus:-translate-y-0
                peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:top-0
                peer-[:not(:placeholder-shown)]:-translate-y-0
                peer-[:not(:placeholder-shown)]:text-xs
              "
            >
              User ID*
            </label>
          </div>

          {/* Language */}

          <div className="mb-5 flex items-center gap-3">
            <label
              htmlFor="language"
              className="min-w-0 flex-1 text-sm"
              style={{
                color: colors.subtext,
              }}
            >
              Language*
            </label>

            <select
              id="language"
              defaultValue="English"
              className="
                h-10
                min-w-0
                flex-1
                border-0
                border-b
                border-b-[#E0E0E0]
                bg-transparent
                px-0
                text-black
                outline-none
                focus:border-b-[#B9862F]
                focus-visible:ring-0
              "
              style={{
                backgroundColor: colors.inputBg,
                color: colors.text,
              }}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          {/* Login */}

          <button
            type="button"
            className="
              w-full
              rounded
              py-2.5
              font-medium
              text-white
              outline-none
              transition-opacity
              hover:opacity-90
              focus-visible:ring-2
              focus-visible:ring-[#B9862F]
              focus-visible:ring-offset-2
            "
            style={{
              backgroundColor: colors.primary,
            }}
          >
            Login
          </button>

          {/* Login Links */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-1.5
              text-sm
            "
            style={{
              color: isDark ? colors.accent : "var(--main-color)",
            }}
          >
            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001#"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Unlock User Id
            </a>

            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001#"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Reset Security Answers
            </a>

            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&ACTION.LOAD=Y&__CALL_MODE__=70&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&USER_PRINCIPAL=&LANGUAGE_ID=001"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Forgot User ID
            </a>

            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001#"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Disable User ID
            </a>

            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&ACTION.LOAD=Y&__CALL_MODE__=81&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Online Registration using Debit Card
            </a>

            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001#"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Set Password/Forgot Password
            </a>

            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001#"
              className="w-fit hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9862F]"
            >
              Mobile OTP App Activation
            </a>
          </div>
        </section>

        {/* -------------------------------------------------------------------
            Notice Board - RIGHT
        ------------------------------------------------------------------- */}

        <aside
          className="
            relative
            w-full
            rounded-lg
            p-4
            sm:p-6
            lg:w-[560px]
            lg:shrink-0
          "
          style={{
            backgroundColor: colors.panelAlt,
            border: `1px solid ${colors.border}`,
          }}
          aria-label="Bank notices"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Notice Header */}

          <div className="mb-4 flex items-center justify-between gap-2">
            <h3
              className="text-lg font-semibold"
              style={{
                color: colors.primary,
              }}
            >
              Notice Board
            </h3>

            <button
              type="button"
              onClick={() => setIsPlaying((playing) => !playing)}
              aria-label={isPlaying ? "Pause notices" : "Play notices"}
              className="
                rounded
                p-1.5
                outline-none
                transition-colors
                hover:bg-opacity-80
                focus-visible:ring-2
                focus-visible:ring-[#B9862F]
              "
              style={{
                border: `1px solid ${colors.border}`,
                color: colors.text,
                backgroundColor: colors.panel,
              }}
            >
              {isPlaying ? (
                <Pause size={16} aria-hidden="true" />
              ) : (
                <Play size={16} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Notice Content */}

          <div className="relative min-h-[190px] overflow-hidden rounded-md p-1">
            <div
              key={notice.id}
              className="rounded-md border border-transparent p-4"
              style={{
                backgroundColor: colors.panel,
                borderColor: colors.border,
                animation: "noticeSlideUp 0.6s ease-out forwards",
              }}
            >
              <h4
                className="mb-2 text-lg font-semibold"
                style={{
                  color: colors.primary,
                }}
              >
                {notice.title}
              </h4>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: colors.text,
                }}
              >
                {notice.body}
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* ---------------------------------------------------------------------
          Information Buttons
      --------------------------------------------------------------------- */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1280px]
          grid-cols-1
          gap-3
          px-3
          pb-6
          sm:grid-cols-2
          sm:px-6
          sm:pb-8
          xl:grid-cols-4
        "
      >
        {Object.entries(INFO_MODALS).map(([key, modal]) => (
          <button
            key={key}
            type="button"
            onClick={() => setOpenModalKey(key)}
            className="
              rounded
              py-3
              text-sm
              font-medium
              text-white
              outline-none
              transition-opacity
              hover:opacity-90
              focus-visible:ring-2
              focus-visible:ring-[#B9862F]
              focus-visible:ring-offset-2
            "
            style={{
              backgroundColor: colors.primary,
            }}
          >
            {modal.label}
          </button>
        ))}
      </div>

      {/* ---------------------------------------------------------------------
          Information Modal
      --------------------------------------------------------------------- */}

      <Modal
        isOpen={openModalKey !== null}
        onClose={() => setOpenModalKey(null)}
        title={openModalKey ? INFO_MODALS[openModalKey].title : ""}
        colors={colors}
      >
        {openModalKey ? INFO_MODALS[openModalKey].body : ""}
      </Modal>
    </div>
  );
}
