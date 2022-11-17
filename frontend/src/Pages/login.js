import 'openidconnect-signin/openidconnect-signin.js'

const Login = () => {
    return(
        <div>
            <openidconnect-signin clientid="BA_Silyu_Li" scopes="openid profile"></openidconnect-signin>
        </div>
    )
}
export default Login