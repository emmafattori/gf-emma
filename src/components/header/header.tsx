import Link from "next/link"

export const Header = () => {
  return (
    <nav className="absolute top-0 right-0 left-0 z-50 my-5">
      <ul className="flex justify-around bg-transparent">
        <li>
          <Link
            className="font-thin text-white tracking-widest uppercase"
            href={"/saved-recipes"}
          >
            Saved Recipes
          </Link>
        </li>
        <li>
          <Link
            className="font-thin text-white tracking-widest uppercase"
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="font-thin text-white tracking-widest uppercase"
            href={"/weekly-plan"}
          >
            Weekly Plan
          </Link>
        </li>
        <li>
          <Link
            className="font-thin text-white tracking-widest uppercase"
            href={"/grocery-list"}
          >
            Grocery List
          </Link>
        </li>
      </ul>
    </nav>
  )
}
