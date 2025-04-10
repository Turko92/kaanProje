import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input, { InputRef } from '../components/Input';

type FormState = {
  fullname: string;
  email: string;
  password: string;
  remember: boolean;
};

function CreateUser() {
  const [infoMessage, setInfoMessage] = useState("");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const navigate = useNavigate();
  const fullNameInputRef = useRef<InputRef>(null);
  const emailInputRef = useRef<InputRef>(null);
  const passwordInputRef = useRef<InputRef>(null);

  useEffect(() => {
    fullNameInputRef.current?.focus();
  }, []);

  const validate = (data: FormState) => {
    const errorMessage: Partial<FormState> = {};
  
    if (!data.fullname || data.fullname.trim() === '') {
      errorMessage.fullname = 'Full name is required';
    }
  
    if (!data.email || data.email.trim() === '') {
      errorMessage.email = 'Email is required';
    }
  
    if (!data.password || data.password.trim() === '') {
      errorMessage.password = 'Password is required';
    }
  
    setErrors(errorMessage);
    
    // Hata yoksa true döner
    return Object.keys(errorMessage).length === 0;
  };

  const onSubmit = (data: FormState) => {
    if (validate(data)) {
      setInfoMessage("Kayıt başarılı!");
      localStorage.setItem('userData', JSON.stringify(data));
      navigate('/user-info');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>
      <form onSubmit={(e : any) => { 
        e.preventDefault(); 
        onSubmit({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
        remember: e.target.remember.checked,
      })}} className="space-y-4">
        
        <Input
          ref={fullNameInputRef}
          label="Full Name"
          type="text"
          name="fullname"
          error={errors.fullname}
        />

        <Input
          ref={emailInputRef}
          label="Email"
          type="email"
          name="email"
          error={errors.email}
        />

        <Input
          ref={passwordInputRef}
          label="Password"
          type="password"
          name="password"
          error={errors.password}
        />

        <label className="flex items-center space-x-2">
          <input type="checkbox" name="remember" />
          <span>Remember Me</span>
        </label>
        
        <Button type="submit">Submit</Button>
      </form>

      <h2 className="text-2xl font-bold mb-2">{infoMessage}</h2>
    </div>
  );
}

export default CreateUser;
