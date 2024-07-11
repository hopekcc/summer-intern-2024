type GreetProps = {
    name: string
    notifications?: number
    isLoggedIn: boolean

}


export const Greet = (props: GreetProps) => {

    const { notifications = 0 } = props

    const loginPrompt = <h2 className='login-prompt'>Please log in to continue</h2>

    const welcomeMessage = <h2 className='welcome-message'> Welcome {props.name}! You have {notifications} new notifications</h2>

    if (!props.isLoggedIn){
        return (loginPrompt)
    }
    return(welcomeMessage)
}