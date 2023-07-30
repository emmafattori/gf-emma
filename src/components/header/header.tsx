import Link from "next/link"

export const Header = () => {
  return (
    <nav>
      <ul className="flex justify-around m-7">
        <li>
          <Link className="font-bold" href={"/saved-recipes"}>
            Saved Recipes
          </Link>
        </li>
        <li>
          <Link className="font-bold " href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="font-bold " href={"/weekly-plan"}>
            Weekly Plan
          </Link>
        </li>
        <li>
          <Link className="font-bold font-fontBody" href={"/grocery-list"}>
            Grocery List
          </Link>
        </li>
      </ul>
    </nav>
  )
}
