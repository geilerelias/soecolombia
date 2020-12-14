import axios from "axios";
class Auth {
    constructor() {
        this.roles = window.localStorage.getItem("roles");
        this.token = window.localStorage.getItem("token");
        try {
            let userData = window.localStorage.getItem("user");
            this.user = userData ? JSON.parse(userData) : null;

            if (this.token) {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + this.token;
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    login(token, user, roles) {
        console.log("token", token);
        console.log("user", user);
        console.log("roles", roles);
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(user));
        window.localStorage.setItem("roles", JSON.stringify(roles));
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        this.token = token;
        this.user = user;
        this.roles = roles;

        Event.$emit("userLoggedIn");
    }

    logout() {
        axios.post("/api/logout");
        window.localStorage.setItem("token", "");
        window.localStorage.setItem("user", "");
        window.localStorage.setItem("roles", "");
        axios.defaults.headers.common["Authorization"] = "";

        this.token = "";
        this.user = "";
        this.roles = "";
    }

    check() {
        return !!this.token;
    }

    getUser() {
        api.call("get", "/api/get-user").then(({ data }) => {
            this.user = data;
        });
    }

    // getRoles() {
    //     api.call("get", "/api/get-roles").then(({ data }) => {
    //         console.log("esta es data auth: ", data);
    //         this.roles = data.roles;
    //     });
    //     return this.roles;
    // }
}

export default Auth;
