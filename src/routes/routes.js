import Blog from "../components/admin/blog/blog";
import Home from "../components/admin/home/home";
import Manager from "../components/admin/manager/manager";
import Region from "../components/admin/region/region";
import Seo from "../components/admin/seo/seo";

const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  { path: "/admin/console", exact: true, name: "Home", component: Home },
  { path: "/admin/region", exact: true, name: "Region", component: Region },
  { path: "/admin/seo", exact: true, name: "Region", component: Seo },
  { path: "/admin/blog", exact: true, name: "Region", component: Blog },
  { path: "/admin/manager", exact: true, name: "Region", component: Manager },
];

export default routes;
