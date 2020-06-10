import app from "./shared";

const apps = [
    {
        name: "vue-project",
        entry: "//localhost:10300",
        container: "#app-main",
        activeRule: "/vue",
        props: { app }
    },
    {
        name: "react-project",
        entry: "//localhost:10100",
        container: "#app-main",
        activeRule: "/react",
        props: { app }
    },
    {
        name: "static-project",
        entry: "//localhost:10400",
        container: "#app-main",
        activeRule: "/static",
        props: { app }
    }
];

export default apps;
