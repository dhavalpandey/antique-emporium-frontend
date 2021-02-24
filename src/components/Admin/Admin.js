import jwt_decode from "jwt-decode";

export default function Admin() {
    if(localStorage.getItem('token') && JSON.parse(atob(localStorage.getItem('token').split('.')[1])).role == "admin") {
    return (
        <>
        <h1>This is protected admin page!</h1>
        <p>No one except admin can view it...</p>
        </>
        )
    } else {
        window.location.replace('/')
    }
}