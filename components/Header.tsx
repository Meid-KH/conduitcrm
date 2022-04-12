import React from "react";
import Image from "next/image";

import Logo from "components/Logo";
import Button from "components/Button";
import Link from "next/link";
import Icon from "utils/Icon";

const Header = () => {
  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const win: Window = window;
    win.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll: EventListener = (event: Event) => {
    // console.log("event", window.scrollY);
    if (window.scrollY > 250) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <>
      <div className="opacity-60 absolute w-64 -left-16 -top-12 xl:w-[340px] xl:-left-10 xl:-top-8">
        <Image
          src={"/assets/img/logo-shadow.png"}
          alt="ConduitCRM LLC"
          height={1200}
          width={1200}
        />
      </div>
      <header
        id="header"
        className={`${
          sticky ? "fixed w-full py-2 bg-black/90" : " py-8 lg:py-[40px]"
        } sticky__ z-30 top-0 transition-all duration-300 px-6 bg-primary-700 text-faded max-w-[1920px]__`}
      >
        <div
          className={`${
            sticky ? "h-auto max-w-6xl" : "h-[104px]"
          } transition-all duration-300 h-[104px] max-w-7xl mx-auto flex justify-between items-center`}
        >
          <Link href="/">
            <a
              className={`${
                sticky ? "w-16" : "w-20 lg:w-28"
              } relative flex-shrink-0 block transition-all duration-300`}
            >
              <Logo />
            </a>
          </Link>

          <MainMenu />

          <nav className="hidden flex-shrink-0 lg:flex items-center gap-11">
            <Link href="https://app.conduitcrm.com">
              <a className="hover:text-white">Log in</a>
            </Link>
            <Link href="/">
              <a className="block">
                <Button primary>
                  <div className="flex items-center gap-2">
                    Get started
                    <span className="w-6 rotate-90 -mr-6">
                      <Icon name="arrow" />
                    </span>
                  </div>
                </Button>
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

const MainMenu = () => {
  const menuContainer = React.useRef<HTMLUListElement>(null);
  const [parentWidth, setParentWidth] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // console.log("menu width : " + menuContainer.current!.offsetWidth);
    if (typeof menuContainer.current != null) {
      setParentWidth(menuContainer.current!.offsetWidth);
    }
  }, []);

  // console.log("waaa " + parentWidth);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    menuOpen
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");
  };

  return (
    <>
      <button
        onClick={() => handleMenu()}
        className="relative lg:hidden w-14 h-14 p-3 rounded-md focus:ring hover:bg-black/90"
      >
        <Icon name={menuOpen ? "close" : "hamburger"} />
      </button>
      <ul
        className={`hidden___
        ${menuOpen ? "left-0 opacity-100" : "-left-full opacity-0"}
        transition-all
        overflow-y-auto
        fixed
        z-50
        top-0
        w-[75%]
        h-full
        bg-black/90
        p-6
        sm:w-1/2
        lg:overflow-y-visible
        lg:flex 
        lg:opacity-100
        lg:static
        lg:bg-transparent
        lg:p-0
        lg:w-auto
        items-center `}
        ref={menuContainer}
      >
        <MenuItem
          title="Product"
          url="/"
          ancestors={
            <div className="space-y-4">
              <div>
                <span className="block font-semibold text-primary-500">
                  Overview
                </span>
                <ul className="grid grid-cols-2 py-3 px-3 text-sm space-y-3">
                  <li className="col-span-2">
                    <Link href="/product/overview">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Product Overview
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="block font-semibold text-primary-500">
                  Features
                </span>
                <ul className="grid sm:grid-cols-2 gap-4 py-3 px-3 text-sm">
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        CRM
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Tasks
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Pipelines
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Milestones
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Automation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Deals
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Lead Processing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Teams
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Tags
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Client Experience
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/feature">
                      <a className="underline-offset-2 hover:text-white hover:underline">
                        Integration
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          }
          parentWidth={parentWidth}
        />
        <MenuItem title="Pricing" url="/pricing" />
        <MenuItem title="Resources" url="/resources" />
        <MenuItem title="About" url="/about" />
        <MenuItem title="Contact us" url="/contact" />
      </ul>
    </>
  );
};

type MenuItemProps = {
  title: string;
  url: string;
  ancestors?: React.ReactNode;
  parentWidth?: number;
};

const MenuItem = ({ title, url, ancestors, parentWidth }: MenuItemProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li
      className="relative group"
      // onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
    >
      <Link href={url}>
        <a
          // className={`flex items-center gap-2 py-3 px-4 rounded-lg ${
          // 	open && "bg-black"
          // } hover:text-white`}
          className={`flex items-center gap-2 py-3 px-4 -mx-4 lg:mx-0 rounded-lg group-hover:bg-black group-hover:text-white`}
        >
          {title}
          {ancestors && (
            <span className="transition-all lg:w-0 lg:opacity-0 lg:group-hover:w-4 lg:group-hover:opacity-100">
              <Icon name="arrow" />
            </span>
          )}
        </a>
      </Link>
      {ancestors && (
        <div
          style={{ width: `${parentWidth}px` }}
          // className={`absolute z-20 left-0 top-full -translate-y-2 w-max min-w-[560px]__ bg-black/95 rounded-lg py-6 px-8 ${
          // 	!open && "hidden"
          // }`}
          className={`lg:hidden lg:absolute lg:z-20 lg:left-0 lg:top-full lg:-translate-y-2 lg:max-w-none lg:border-none lg:bg-black/95 lg:py-6 lg:px-8 lg:mb-0
            max-w-full w-max bg-black border border-gray-800 rounded-lg py-4 px-4 mb-4
            group-hover:block`}
        >
          {ancestors}
        </div>
      )}
    </li>
  );
};

export default Header;
