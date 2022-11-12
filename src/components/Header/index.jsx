import { ThemeToggle } from '../ThemeToggle/index.jsx';

export const Header = ({}) => {
  return (
    <header className="fixed w-full">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-3 flex items-center justify-between">
          <div className="flex items-center">
            <a href="https://jsalazarv.dev/" target="_blank">
              <h2 className="text-xl text-black dark:text-amber-500 font-medium">
                [Js]
              </h2>
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
