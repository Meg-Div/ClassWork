import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ruuwcpnrzznakaolxacc.supabase.co";

const supabaseKey = import.meta.env.VITE_SUPABASE;
const supabase = createClient(supabaseUrl, supabaseKey);


const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({});

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  //authentication logic
  const authenticateForm = async () => {
    // username needs to be at least 6 characters long and lesser than 14 characters
    if (
      signUpForm?.username?.length <= 5 ||
      signUpForm?.username?.length >= 14
    ) {
      toast(
        "Username needs to be at least 6 characters long and no longer than 14"
      );
    }
    // zip - 5 characters
    else if (signUpForm?.zip?.length < 5) {
      toast("Please enter in a valid five digit zip code");
    }
    
    // age range - 3-5 characters
    else if (signUpForm?.age.length < 2 || signUpForm?.age.length > 5) {
      toast("Your need to choose a valid age range");
    }
    else {
        //if no issues with form, send data
        const { data, error } = await supabase
        .from('reactUserData2')
        .insert([{
            username: signUpForm?.username, 
            firstName: signUpForm?.firstname,
            lastName: signUpForm?.lastname,
            address: signUpForm?.address,
            city: signUpForm?.city,
            state: signUpForm?.state,
            zip: signUpForm?.zip,
            ageGroup: signUpForm?.age,
            veteran: signUpForm?.vet,
            ethnicity: signUpForm?.ethnicity,
        },
        ])
        if (error) {
            toast(error);
        }
        else {
            toast("Your form was submitted.");
            setSignUpForm({})
        }
    }
  };

  return (
    //flasy window graphics
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      
      <div className="w-[70vw] shadow-md">
        <form className="grid py-20 shadow-lg bg-storm">

        <div className="grid justify-items-center">
        <h1 className="text-3xl text-white" > CONTACT FORM</h1>
        <p className="text-white py-1"> Fields marked with an asterisk are required.</p>
        </div>

          <div className="pl-20 grid my-5 pr-20">

          <div className="flex flex-row place-content-start my-2 border-b-2 border-sky py-3">

            <img src="/paper-plane.jpg" alt="" />
            <input
             //username

             className=" bg-storm shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
              id="username"
              type="text"
              placeholder="Enter Your Username*"
              name="username"
              onChange={(e) => setFormState(e)}
              value={signUpForm.username ? signUpForm.username : ""}
            />
            
            </div>

            <div className="flex flex-row place-content-start my-2 border-b-2 border-sky py-3">

            <img className="scale-75" src="/profile.jpg" alt="" />
            <input
            //first name
              className=" bg-storm shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Enter Your First Name"
              name="firstname"
              onChange={(e) => setFormState(e)}
              value={signUpForm.firstname ? signUpForm.firstname : ""}
            />

            <input
                //last name
              className=" bg-storm shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-sky focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Enter Your Last Name"
              name="lastname"
              onChange={(e) => setFormState(e)}
              value={signUpForm.lastname ? signUpForm.lastname : ""}
            />
            </div>


            <div className="flex flex-row place-content-start my-2 border-b-2 border-sky py-3">
            <img src="../public/mail.jpg" alt="" />
            <input
                //address

              className=" bg-storm shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter Your Address"
              name="address"
              onChange={(e) => setFormState(e)}
              value={signUpForm.address ? signUpForm.address : ""}
            />
              </div>

              <div className="flex flex-row place-content-start my-2 border-b-2 border-sky py-3">
              
            <input
                //city
              className=" bg-storm flex flex-row shadow appearance-none   py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setFormState(e)}
              value={signUpForm.city ? signUpForm.city : ""}
            />  
            
            <input
            //state
              className="  bg-storm flex flex-row shadow appearance-none  py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              name="state"
              placeholder="State"
              onChange={(e) => setFormState(e)}
              value={signUpForm.state ? signUpForm.state : ""}
            />
            
            <input
            //zip
            className=" bg-storm shadow appearance-none  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
              id="zip"
              type="text"
              name="zip"
              placeholder="Zip*"
              onChange={(e) => setFormState(e)}
              value={signUpForm.zip ? signUpForm.zip : ""}
            />
            </div>
            
            <div className="flex flex-row place-content-start my-1 border-b-2 border-sky py-5">
                <select 
                //age
                className=" bg-storm text-greed"  
                id="age"
                type="text"
                name="age"
                onChange={(e) => setFormState(e)} 
                value={signUpForm.age ? signUpForm.age : ""}>
                    <option>Enter Your Age Group*</option>
                    <option>18-30</option>
                    <option>30-50</option>
                    <option>50-65</option>
                    <option>65+</option>
                </select>
            </div>


            <div className="flex flex-row place-content-start my-1 border-b-2 border-sky py-5">
                <select 
                //age
                className=" bg-storm text-greed"  
                id="vet"
                type="text"
                name="vet"
                onChange={(e) => setFormState(e)}
                value={signUpForm.vet === "Yes" ? signUpForm.vet = true : signUpForm.vet = false}>
                    <option>Are You A Veteran?</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>


            <div className="flex flex-row place-content-start my-1 border-b-2 border-sky py-5">
                <select 
                //age
                className=" bg-storm text-greed"  
                id="ethnicity"
                type="text"
                name="ethnicity"
                onChange={(e) => setFormState(e)}
                value={signUpForm.ethnicity ? signUpForm.ethnicity : ""}>
                    <option>What Is Your Ethnicity?</option>
                    <option>Native American</option>
                    <option>Asian</option>
                    <option>African American</option>
                    <option>Hispanic</option>
                    <option>Pacific Islander</option>
                    <option>White</option>
                </select>
            </div>

          </div>

          <div className="grid justify-items-center">
            <button
              className="bg-mauve my-5 text-white font-bold h-10 px-5 m-2 focus:outline-none focus:shadow-outline content-center rounded-2xl"
              type="button"
              onClick={authenticateForm}>
                &nbsp; &nbsp; &nbsp; SUBMIT &nbsp; &nbsp; &nbsp;
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SignUp;
