import Link from "next/link"

export const Header = () => {
  return (
    <nav>
      <ul className="flex justify-around bg-white">
        <li>
          <Link className="font-bold underline" href={"/saved-recipes"}>
            Saved Recipes
          </Link>
        </li>
        <li>
          <Link className="font-bold underline" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="font-bold underline" href={"/weekly-plan"}>
            Weekly Plan
          </Link>
        </li>
        <li>
          <Link className="font-bold underline" href={"/grocery-list"}>
            Grocery List
          </Link>
        </li>
      </ul>
    </nav>
  )
}
