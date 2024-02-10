import List from "../Pages/List";
import CreateOrUpdate from "../Pages/CreateOrUpdate";
import View from "../Pages/View";

const appRoutes = [
    {path:'/', element: <List/>},
    {path:'/manage-student', element: <CreateOrUpdate/>},
    {path:'/manage-student/:id', element: <CreateOrUpdate/>},
    {path:'/detail/:id', element: <View />},
];

export default appRoutes;