import { useLocation, Link } from "react-router-dom";
import { House } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="breadcrumbs"><House className="w-4 h-4 sm:w-5 sm:h-5"/></Link>
        </li>

        {paths.map((segment, index) => {
          const url = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          const label = decodeURIComponent(segment).replace(/-/g, " ");

          return (
            <li key={url} className="flex items-center">
              <span className="text-gray-400">/</span>
              <Link
                to={url}
                className={`ml-2 capitalize breadcrumbs ${
                  isLast ? "font-semibold text-cyan-800" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
