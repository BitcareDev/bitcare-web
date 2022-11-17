import './password.css';
//import logo from '../src/Image/Bitcare.png';
//import image from '../src/Image/img3.jpg';

function For() {
  return (
    <div class="row">
      <div class="info-left">
      <div class="info-form">
          <img src="../../../assets/logo.png" alt="mass" class="bit-logo"/>
          <div>
            <input type="email" name="email" placeholder="Email" class="input-email"/>
          </div>
          <button type="button" class="button">Sign In</button>
          </div>
        </div>
        <div class="info-right">
          <img src="../../../assets/img3.jpg" alt="main" class="image-info"/>
        </div>
      
    </div>
  );
}

export default For;