import React from 'react';

import './Forgot.css';

const Forgot = () => {
  return (
    <div class="flex-container3">
      <div class="content3">
        <form >
          <img src="../assets/logo.png" alt="logo" class="logo" />

          <div class="input-container">
            <input type="email" name="username" required placeholder="Email" />
          </div>


          <div class="button2">
            <button>Submit</button>
          </div>

        </form>
      </div>
      <div class="girl-image3">
        <div class="fitness-image">
          <img src="../assets/signup-1.png" alt="image" class="image" />
        </div>
      </div>

    </div>
  );
}

export default Forgot;