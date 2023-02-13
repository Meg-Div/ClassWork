import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ruuwcpnrzznakaolxacc.supabase.co";

const supabaseKey = import.meta.env.VITE_SUPABASE;
const supabase = createClient(supabaseUrl, supabaseKey);


const Contact = () => {
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
      
      
      <div className="w-[70vw]">
        <form className="grid py-10 bg-transparent gap-4">

        <h1 className="text-5xl text-white" > Contact form </h1>

          <div className="grid my-9">

          <div className="flex flex-row py-8 space-x-5 w-[60vw]">

            <label
              className="block text-white font-bold mb-4 w-1/6 "
              htmlFor="firstname">Your Name</label>

            <input
             //firstname
             className="flex rounded py-2 px-6 w-1/2 text-black"
              id="firstname"
              type="text"
              placeholder="Your Name"
              name="firstname"
              onChange={(e) => setFormState(e)}
              value={signUpForm.firstname ? signUpForm.firstname : ""}
            />
            <input
                //last name
                className="flex content-start w-1/2 rounded py-2 px-6 text-black"
              id="lastname"
              type="text"
              placeholder="Enter Your Last Name"
              name="lastname"
              onChange={(e) => setFormState(e)}
              value={signUpForm.lastname ? signUpForm.lastname : ""}
            />
            </div>

          <div className="flex flex-row place-content-start space-x-3 w-[60vw]">

            <label
              className="block text-white font-bold mb-4 w-1/6 "
              htmlFor="email">Your Email</label>
            <input
                //email
                className=" text-black shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter Your Email"
                name="email"
                onChange={(e) => setFormState(e)}
                value={signUpForm.email ? signUpForm.email : ""}
              />
            </div>

            <div className="flex flex-row space-x-6 py-8 w-[60vw]">

            <label
              className="block text-white font-bold mb-4 w-1/6 "
              htmlFor="number">Phone*</label>

            <input
             //number first
             className="flex rounded py-2 px-6 w-1/3 text-black"
              id="first"
              type="text"
              placeholder="###"
              name="first"
              onChange={(e) => setFormState(e)}
              value={signUpForm.first ? signUpForm.first : ""}
            />
            <input
             //number second
             className="flex rounded py-2 px-6 w-1/3 text-black"
              id="second"
              type="text"
              placeholder="###"
              name="second"
              onChange={(e) => setFormState(e)}
              value={signUpForm.second ? signUpForm.second : ""}
            />
            <input
             //number third
             className="flex rounded py-2 px-6 w-1/3 text-black"
              id="third"
              type="text"
              placeholder="####"
              name="third"
              onChange={(e) => setFormState(e)}
              value={signUpForm.third ? signUpForm.third : ""}
            />
            </div>

                        
            <div className="flex flex-row place-content-start w-[60vw] space-x-8">
            <label
              className="flex flex-row text-white font-bold mb-4  w-1/4 "
              htmlFor="number">Message Subject*</label>

                <select 
                //age
                className="w-full rounded content-start px-20 bg-white py-3 text-greed"  
                id="age"
                type="text"
                name="age"
                onChange={(e) => setFormState(e)} 
                value={signUpForm.age ? signUpForm.age : ""}>
                    <option>Other</option>
                    <option>Account</option>
                    <option>Password</option>
                </select>
                <div className="w-1/4"></div>
                <div className="w-1/3"></div>

            </div>
            
            <div className="flex flex-row place-content-start space-x-3 py-8 w-[60vw]">

            <label
              className="block text-white font-bold mb-4 w-1/6 "
              htmlFor="message">Message*</label>
            <input
                //email
                className=" text-black shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                name="message"
                onChange={(e) => setFormState(e)}
                value={signUpForm.message ? signUpForm.message : ""}
              />
            </div>

          </div>

          <div className="grid justify-items-center">
            <button
              className="bg-transparent border my-5 text-white font-bold h-10 px-5 m-2 focus:outline-none focus:shadow-outline content-center rounded-md"
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

export default Contact;
