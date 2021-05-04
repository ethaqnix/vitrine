import NotFound from "../pages/NotFound";
import MandelbrotCircle from "../pages/MandelbrotCircle/MandelbrotCircle";
import LifeGame from "../pages/LifeGame/LifeGame";
import LifeGame2d from "../pages/LifeGame2d";
import CV from "../pages/CV";

const routes = [
  {
    title: "CV",
    path: "/vitrine",
    component: CV,
    isPrivate: false,
    onMenu: true,
  },
  {
    title: "Mandelbrot",
    path: "/mandelbrot",
    component: MandelbrotCircle,
    isPrivate: false,
    onMenu: true,
  },
  {
    title: "LifeGame1d",
    path: "/LifeGame1d",
    component: LifeGame,
    isPrivate: false,
    onMenu: true,
  },
  {
    title: "LifeGame2d",
    path: "/LifeGame2d",
    component: LifeGame2d,
    isPrivate: false,
    onMenu: true,
  },
  {
    title: "Page not found",
    path: "/*",
    component: NotFound,
    isPrivate: false,
    onMenu: false,
  },
];

export default routes;
