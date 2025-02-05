import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value, e.target.password.value);
    // console.log(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PASSWORD);

    if (e.target.email.value === import.meta.env.VITE_USERNAME && e.target.password.value === import.meta.env.VITE_PASSWORD) {
      navigate('/dashboard');

    }

  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" name='email' required />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" name='password' required />
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>

            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>Don't have an account? <Link to="/signup">Signup</Link></span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field facebook">
            <i className='bx bxl-facebook facebook-icon'></i>
            <span>Login with Facebook</span>
          </a>
        </div>

        <div className="media-options">
          <a href="#" className="field google">
            <img src="/images/google.png" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SignIn;