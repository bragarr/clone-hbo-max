import './SignIn.css'

export function SignIn() {
    return (
        <section className='form__container'>
            <h2>Sign In</h2>
            <form className='form_signIn'>
                <fieldset className='form__fieldsButtons'>
                    <p>Do you have an HBO Max account?</p>
                    <div className='input__signIn'>
                        <input type='email' name='email__address' className='input__signIn' placeholder='Email Address' />
                        <input type='password' name='password__SignIn' className='password__SignIn' placeholder='Password' />
                    </div>
                    <div className='validation__signIn'>
                        <button>SIGN IN</button>
                        <p>Forgot password?</p>
                    </div>
                    <p>or</p>
                    <div className='alternative__signIn'>
                        <p>Do you get HBO Max Through another company such as Tv, Mobile, or internet provider?</p>
                        <button>SIGN IN WITH A PROVIDER</button>
                    </div>
                </fieldset>
            </form>
            <p>Need Help Sign In?</p>
        </section>
    );
};