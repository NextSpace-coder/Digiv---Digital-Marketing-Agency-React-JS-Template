import RootLayout from "@/layout/root";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blogDetails";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import Home from "@/pages/home";
import HomeTwo from "@/pages/homeTwo";
import Pricing from "@/pages/pricing";
import ProjectDetails from "@/pages/projectDetails";
import Projects from "@/pages/projects";
import ServiceDetails from "@/pages/serviceDetails";
import Services from "@/pages/services";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home-2",
                element: <HomeTwo />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/project-details",
                element: <ProjectDetails />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])