import React, { useState } from 'react';

function PasswordInput({ value, onChange, placeholder }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative flex items-center">
      <input
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-box w-full pr-10" // Add padding to the right to make space for the button
      />
      <button
  type="button"
  className="absolute right-3 top-3 text-sm text-gray-500"
  onClick={handleShowPassword}
>
  {isShowPassword ? 'Hide' : 'Show'}
</button>

    </div>
  );
}

export default PasswordInput;
