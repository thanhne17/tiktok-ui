import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Folowing from '~/pages/Folowing';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/folowing', component: Folowing },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoute = [];

export { privateRoute, publicRoute };
