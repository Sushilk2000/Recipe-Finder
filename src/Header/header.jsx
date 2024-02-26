import { Link, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function Header() {
  const location = useLocation();
  const path = location.pathname;
  const nav = useNavigate();

  return (
    <div className="w-full text-center items-center px-10 justify-between sticky top-0 z-10 flex bg-white l h-[8vh] shadow-md rounded-br-md rounded-bl-md">
      <div>
        <Link to="/">
          <img
            src="public/360_F_285592432_M3DaUTpVAct2YHBPgj9j2xZ4ziZMmc0y (1).webp"
            alt=""
            className="h-[8vh]"
          />
        </Link>
      </div>
      <div className="font-bold text-3xl">Recipe Finder</div>
      <div>
        <div className="flex gap-6 items-center">
          <div
            className="btn"
            onClick={() => {
              if (path !== "/Saved_Recipes") {
                if (localStorage?.getItem("Saved_Recipes")?.length === 2) {
                  alert("You do not have any favorite recipes.");
                } else {
                  nav("/Saved_Recipes");
                }
              } else {
                nav("/");
              }
            }}
          >
            {path !== "/Saved_Recipes" ? "Saved Recipes" : "All Recipes"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
