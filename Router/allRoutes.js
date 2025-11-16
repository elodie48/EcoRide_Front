import Route from "./Route.js";

//Routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", []),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", []),
    new Route("/account", "Mon compte", "/pages/auth/account.html", [] ),
    /*
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", [""]), */
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/legalNotices", "Mentions légales", "/pages/legalNotices.html", []),
];

//title : Route.title - websitename
export const websiteName = "EcoRide";