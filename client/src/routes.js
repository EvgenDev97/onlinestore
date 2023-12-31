import Admin from "./page/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./page/utils/const";
import DevicePage from "./page/DevicePage";
import Basket from "./page/Basket";
import Shop from "./page/Shop";
import Auth from "./page/Auth";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:BASKET_ROUTE,
        Component:Basket
    }
]

export  const publicRouters = [
    {
        path:SHOP_ROUTE,
        Component:Shop
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path: DEVICE_ROUTE + "/id",
        Component:DevicePage
    }
]