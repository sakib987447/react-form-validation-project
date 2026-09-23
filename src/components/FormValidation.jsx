import React from 'react'
import { useState } from 'react';
const FormValidation = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecial: false,

  });


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
    if (name === "password") {
      validatePassword(value);
    }
  };


  const validatePassword = (password) => {
    setPasswordValidation({
      minLength: password.length >= 8,
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*]/.test(password),
    });
  };



  //name validation
  const validateName = (name) => {
    return /^[a-zA-Z\s]+$/.test(name);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Full Name must be at least 3 characters";
    } else if (!validateName(formData.name)) {
      newErrors.name = "Full Name should not contain numbers";
    }



    //email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email Address is invalid";
    }


//phone validation
if (!formData.phone.trim()) {
  newErrors.phone = "Phone Number is required";
} else if (!/^\+[1-9][0-9]{7,14}$/.test(formData.phone)) {
  newErrors.phone = "Phone Number is invalid";
}
    //password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const allValid = Object.values(passwordValidation).every(Boolean);
      if (!allValid) {
        newErrors.password = "Password does not meet all requirements";
      }
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }
    return newErrors;

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitted(true);

    setTimeout(() => {
      setErrors({});
      setIsSubmitted(false);
      console.log("Form Data Submitted:", formData);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          agreeTerms: false,
        });
        //password reset
        setPasswordValidation({
          minLength: false,
          hasLowercase: false,
          hasUppercase: false,
          hasNumber: false,
          hasSpecial: false,
        });
      }, 3000);
    }, 1500);
  };


  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setPasswordValidation({
      minLength: false,
      hasLowercase: false,
      hasUppercase: false,
      hasNumber: false,
      hasSpecial: false,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-100 border-green-400 text-gray-700 rounded-lg animate-pulse">
            <div className="flex items-center">
              <span className="text-xl mr-2">✅</span>
              <div>
                <p className="font-medium">Form submitted successfully!</p>
                <p className="text-sm">Welcome to our platform {formData.name}</p>
              </div>
            </div>
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Full Name<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                value={formData.name}
                onChange={handleInputChange}

                type="text"
                name='name'
                placeholder="Enter Your full name" className={`w-full p-3 rounded-lg ${errors.name
                  ? "border-red-500 border bg-red-50"
                  : "border-gray-300 border"
                  } pl-10`} />
              <span className="absolute left-3 top-3.5 text-gray-500">👤</span>
            </div>
            {errors.name && (
              <p className="mt-2 text-red-500 text-sm flex items-center">
                <span className="mr-1">❌</span> {errors.name}
              </p>
            )}
            <p className="text-gray-500 text-xs mt-1">Note: Name should not contain numbers or special characters</p>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Email Address<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email Address"
                className={`w-full p-3 rounded-lg ${errors.email
                  ? "border-red-500 border bg-red-50"
                  : "border-gray-300 border"
                  } pl-10`}
              />
              <span className="absolute left-3 top-3.5 text-gray-500">📧</span>
            </div>
            {errors.email && (
              <p className="mt-2 text-red-500 text-sm flex items-center">
                <span className="mr-1">❌</span> {errors.email}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Your phone number"
                className={`w-full p-3 rounded-lg ${errors.phone
                  ? "border-red-500 border bg-red-50"
                  : "border-gray-300 border"
                  } pl-10`}
              />
              <span className="absolute left-3 top-3.5 text-gray-500">📞</span>
            </div>
            {errors.phone && (
              <p className="mt-2 text-red-500 text-sm flex items-center">
                <span className="mr-1">❌</span> {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword?"text":"password"}
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Your password"
                className={`w-full p-3 rounded-lg ${errors.password
                  ? "border-red-500 border bg-red-50"
                  : "border-gray-300 border"
                  } pl-10`}
              />
              <span className="absolute left-3 top-3.5 text-gray-500">🔒</span>
              {/* <span className="absolute right-3 top-3.5 text-gray-500">👁️</span> */}
              <button
                className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-red-500 text-sm flex items-center">
                <span className="mr-1">❌</span> {errors.password}
              </p>
            )}


            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-2">Password Requirements</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center">
                  <span
                    className={`mr-2 ${passwordValidation.minLength
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {passwordValidation.minLength ? "✅" : "❌"}
                  </span>
                  <span
                    className={
                      passwordValidation.minLength
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    At least 8 characters
                  </span>
                </li>

                <li className="flex items-center">
                  <span
                    className={`mr-2 ${passwordValidation.hasUppercase
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {passwordValidation.hasUppercase ? "✅" : "❌"}
                  </span>
                  <span
                    className={
                      passwordValidation.hasUppercase
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    At least 1 Upperscase Letter
                  </span>
                </li>
                <li className="flex items-center">
                  <span
                    className={`mr-2 ${passwordValidation.hasLowercase
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {passwordValidation.hasLowercase ? "✅" : "❌"}
                  </span>
                  <span
                    className={
                      passwordValidation.hasLowercase
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    At least 1 Lowerscase Letter
                  </span>
                </li>
                <li className="flex items-center">
                  <span
                    className={`mr-2 ${passwordValidation.hasNumber
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {passwordValidation.hasNumber ? "✅" : "❌"}
                  </span>
                  <span
                    className={
                      passwordValidation.hasNumber
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    At least 1 number (0-9)
                  </span>
                </li>

                <li className="flex items-center">
                  <span
                    className={`mr-2 ${passwordValidation.hasSpecial
                      ? "text-green-600"
                      : "text-red-600"
                      }`}
                  >
                    {passwordValidation.hasSpecial ? "✅" : "❌"}
                  </span>
                  <span
                    className={
                      passwordValidation.hasSpecial
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    At least 1 special character (!@#$%^&*)
                  </span>
                </li>

              </ul>
            </div>
          </div>


          <div>
            <label className="block text-gray-700 mb-2">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword?"text":"password"}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Enter Your password"
                className={`w-full p-3 rounded-lg ${errors.confirmPassword
                  ? "border-red-500 border bg-red-50"
                  : "border-gray-300 border"
                  } pl-10`}
              />
              <span className="absolute left-3 top-3.5 text-gray-500">🔒</span>
              {/* <span className="absolute right-3 top-3.5 text-gray-500">👁️</span> */}
              <button
                className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
                type="button"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-2 text-red-500 text-sm flex items-center">
                <span className="mr-1">❌</span> {errors.confirmPassword}
              </p>
            )}


          </div>
          <div className="border-t pt-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className={`mt-1 h-5 w-5 rounded ${errors.agreeTerms ? "border-red-500" : "border-gray-300"
                  } text-blue-600 focus:ring-blue-500`}
              />
              <label htmlFor="agreeTerms"className="ml-3 text-gray-700">
                I agree to the {` `}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Team of Services
                </span>
                {` `}
                and {` `}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-red-500">*</span>
                {errors.agreeTerms && (
              <p className="mt-2 text-red-500 text-sm flex items-center">
                <span className="mr-1">❌</span> {errors.agreeTerms}
              </p>
            )}
              </label>
            </div>
          </div>
          <div className="flex space-x-4 pt-6 border-t">
            <button type="button"
            onClick={handleReset}
className="flex flex-1 py-3 border bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 items-center justify-center"
>
  Reset
</button>            
<button type="submit"
disabled={isSubmitted}
 className={`flex-1 py-3 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 items-center justify-center ${
  isSubmitted
  ? "bg-blue-400 cursor-not-allowed"
  : "bg-blue-400 hover:bg-blue-700"
 }`}
 >
  {isSubmitted ? (
  <>
    <span className="animate-spin mr-2">Processing...</span>
  </>
) : (
  <>
    <span className="mr-2">Submit Form</span>
  </>
)}
 </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
