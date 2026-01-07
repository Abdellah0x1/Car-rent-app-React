import {Link} from "react-router-dom"
import styles from './Login.module.css'
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";


function Login() {
    return (

        <div className={styles.container}>
            <form className={styles.form}>
            <div className={styles.input_div}>
                <label htmlFor="email">Email Adress</label>
                <div>
                    <MdOutlineMail className={styles.email_icon}/>
                    <input type="email" id="email" placeholder="name@example.com"></input>
                </div>
            </div>
            <div  className={styles.input_div}>
                <label>Password</label>
                <div>
                    <TbLockPassword className={styles.password_icon}/>
                    <input id="password" type="password" placeholder="....."></input>
                </div>
            </div>
            <button className={styles.btn} type="submit">Sign in</button>
            <div className={styles.register}>
                <p>Don&apos;t have an account ?</p>
                <Link>Sign up now</Link>
            </div>
        </form>
        </div>

    )
}

export default Login
