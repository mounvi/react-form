export default function validateInfo(values) {

let errors = {}

if(!values.description.trim()) {
    errors.description = "Please enter your message"
}
//Email

if(!values.email) {
    errors.email = "Email Required"
} else if (!/\S+@amazon+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address.e.g: xyz@amazon.com"
}

if(!values.password) {
    errors.password = "Password is required"
} else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more'
}
    return errors

}