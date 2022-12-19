import About from './About';
import Profile from './Profile';
import HomePage from './HomePage';
import FindResource from './FindResource';
import Work from './Work';
import Help from './Help';
import Signup from './Signup';
import Login from "./Login";
import Example from './Example';

export const NavRouteItems =[
    {
        component:HomePage,
        path:"/"
    },
    {
        component:Work,
        path:"/work"
    },
    {
        component:FindResource,
        path:"/findResource"
    },
    {
        component:About,
        path:"/about"
    },
    {
        component:Signup,
        path:"/signup"
    },
    {
        component:Login,
        path:"/login"
    },
    {
        component:Profile,
        path:"/profile"
    },
    {
        component:Help,
        path:"/help"
    },
    {
        component:Example,
        path:"/example"
    }
]
