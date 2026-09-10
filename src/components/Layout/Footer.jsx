const Footer = () => {
  return (
    <div className="footer">
      <footer className="border-t border-[var(--main-color)]/20 bg-transparent px-6 py-4 text-xs text-[var(--main-color)] sm:text-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              Cookie Policy
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              Terms and Conditions
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              Disclaimer
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              Contact Us
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              Security
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <a
              href="#"
              className="text-[var(--main-color)] underline-offset-2 hover:underline"
            >
              About Us
            </a>
            <span className="text-[var(--main-color)]">|</span>
            <span className="text-[var(--main-color)]">
              Last Updated : 27-02-2026
            </span>
            <span className="hidden text-[var(--main-color)] sm:inline">|</span>
            <span className="hidden text-[var(--main-color)] sm:inline">
              Copyright © Bank of Baroda, All rights reserved
            </span>
          </div>

          <div className="text-center text-[11px] text-[var(--main-color)] sm:text-xs">
            ** This website is best viewed in 1366 X 768 pixels resolution with
            default browser settings. Check browser compatibility
            <a
              href="https://bobibanking.bankofbaroda.bank.in/corp/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012&LANGUAGE_ID=001#"
              className="ml-1 text-[var(--main-color)] underline underline-offset-2 hover:opacity-80"
            >
              Click Here
            </a>
          </div>

          <div className="block text-center text-[11px] text-[var(--main-color)] sm:hidden">
            Copyright © Bank of Baroda, All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
