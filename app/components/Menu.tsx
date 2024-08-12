import { Link } from "@remix-run/react";
import { useMemo } from "react";

export
interface MenuItem {
  name: string;
  path: string;
}

export default
function Menu(props: { items?: MenuItem[] }) {

  const items = useMemo(() => {
    const result: MenuItem[] = [];
    result.push({ name: '首页', path: '/' });
    result.push(...(props.items ?? []));
    result.push({ name: '关于', path: '/about' });
    return result;
  }, [props.items]);

  return <ul>
    {items.map((item) => <li id={item.path}>
      <Link
        className="flex items-center h-8 border-b px-4 hover:bg-main-50 hover:text-main-600 duration-100"
        to={item.path}>
        {item.name}
      </Link>
    </li>)}
  </ul>;
}
