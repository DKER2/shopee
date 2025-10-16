import ListIcon from "@mui/icons-material/List"
import { Category } from "@/types/product"
import { NavLink, useSearchParams } from "react-router-dom";

const ItemFilter = () => {
    const [queryParams] = useSearchParams();
    const selectedCategory = queryParams.get("category");
    return (
        <div className="text-left">
            <NavLink to="/search"><h2><ListIcon /> All Categories</h2></NavLink>
            <nav className="flex flex-col gap-2 mt-4">
                {
                    Object.values(Category).map((category) => (
                        <NavLink to={`/search?category=${category}`} end key={category} className={({ isActive }) => (isActive && selectedCategory === category ? "underline" : "")}>{category}</NavLink>
                    ))
                }
            </nav>
        </div>
    );
};

export default ItemFilter;
