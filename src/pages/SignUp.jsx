import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin');
  };

  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" required />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Create password" className="password" required />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Confirm password" className="password" required />
            </div>

            <div className="field button-field">
              <button type="submit">Signup</button>
            </div>
          </form>

          <div className="form-link">
            <span>Already have an account? <Link to="/signin">Login</Link></span>
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

export default SignUp;