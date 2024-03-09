import React from "react";

export const CenterContent = () => {
  return (
    <div>
      <div className="flex justify-center text-lg space-x-5">
        <div className=" pt-4">
          Home &gt; 
        </div>
        <div className=" pt-4">
        Exercise &gt; 
        </div>
        <div className=" pt-4">
        Bicep &gt; 
        </div>
        <div className=" pt-4">
        Barbell Bicep Curl 
        </div>
      </div>
        <div className="flex flex-col items-center justify-center mt-5 px-[25%]">
            <h1 className="text-3xl mb-2 text-blue-700"> Barbell Bicep Curl </h1>
            <p className="text-center">The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your upper arms, specifically the biceps brachii.</p>  
        </div>
        <div className="w-[70%] mx-auto mt-20 relative">
        <img src="bicep.png"/>
        <div className="ml-5 w-[20%]  text-left absolute top-[-5%]">
          <p className="text-blue-900 font-bold text-xl my-4">
            Bicep Development
          </p>
          <p className="text-xs">
            he barbell bicep curl specifically targets the biceps brachii,
            contributing to their development and definition
          </p>
        </div>
        <div className="ml-5 w-[20%] text-xs text-left absolute top-[38%]">
          <p className="text-blue-900 font-bold text-xl my-4">
            Strengthen Building
          </p>
          <p className="text-xs">
            The exercise allows for heavy resistance, promoting strength gains
            in the biceps and surrounding muscle groups
          </p>
        </div>
        <div className="ml-[70%] w-[30%] text-xs text-right absolute top-[0%]">
          <p className="text-blue-900 font-bold text-lg my-4">
            Increased Muscle Engagement
          </p>
          <p className="text-xs">
            By maintaining strict form and controlling the weight, you ensure
            that the biceps are doing the majority of the work, leading to
            better muscle engagement and growth.
          </p>
        </div>
        <div className="ml-[70%] w-[30%] text-xs text-right absolute top-[38%]">
          <p className="text-blue-900 font-bold text-lg my-4">
            Compound Movement
          </p>
          <p className="text-xs">
            While primarily an isolation exercise for the biceps, the barbell
            curl involves other muscles to a lesser extent, such as the
            forearms, shoulders, and upper back. This makes it a compound
            movement that engages multiple muscle groups
          </p>
        </div>
      </div>
        {/* {----------------------------------------------------------------------------------------------} */}
         {/* Exercise details */}
      <div className="mx-auto w-[50%] mt-5">
        <h2 className="font-bold text-xl text-blue-900">About the Exercise</h2>
        <p className="mt-5">
          The barbell curl is a classic and effective bicep exercise that
          targets the muscles in the front of your upper arms, specifically the
          biceps brachii. Barbell curls into your workout routine can help
          develop and strengthen your biceps, contributing to overall arm
          strength and aesthetics
        </p>

        <h2 className="font-bold text-xl text-blue-900 mt-10">Target Area</h2>
        <p>Biceps brachii and forearm muscles</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Number of set</h2>
        <p>3</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Duration </h2>
        <p>20 minutes</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Calories burn</h2>
        <p>150 cal</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">
          Equipment needed
        </h2>
        <p>barbell</p>

        <h2 className="font-bold text-xl text-blue-900 mt-4">
          Instruction to perform
        </h2>
        <ul className="list-disc relative left-5">
          <li>Stand up straight with your feet shoulder-width apart.</li>

          <li>
            Hold a barbell with a shoulder-width grip, palms facing forward (an
            underhand grip).
          </li>

          <li>
            Your hands should be positioned slightly wider than your shoulders.
          </li>

          <li>Keep your wrists straight and aligned with your forearms.</li>

          <li>Maintain a straight back, chest up, and shoulders back.</li>

          <li>
            While keeping your upper arms stationary, exhale and curl the
            barbell towards your shoulders by flexing your elbows.
          </li>

          <li>Focus on contracting your biceps throughout the movement.</li>

          <li>
            Inhale and slowly lower the barbell back to the starting position
            with controlled movement.
          </li>

          <li>
            Maintain tension on the biceps during the descent; do not let the
            weight drop.
          </li>

          <li>Repeat the movement for the desired number of repetitions.</li>

          <li>
            Exhale during the lifting (concentric) phase and inhale during the
            lowering (eccentric) phase.
          </li>
        </ul>

        <h2 className="font-bold text-xl text-blue-900 mt-4">Tips</h2>

        <ul className="list-disc relative left-5">
          <li>
            Avoid using momentum by keeping your body still. Focus on isolating
            the biceps.
          </li>

          <li>
            Use a weight that allows you to maintain proper form and control
            throughout the exercise.
          </li>

          <li>
            Ensure a full range of motion, allowing your arms to fully extend at
            the bottom and flex at the top.
          </li>
        </ul>
      </div>
        {/* ----------------------------------------------------------------------------------------- */}
        <div className="w-screen h-[22rem] mt-10 flex   bg-blue-950">
          <div className="flex flex-col justify-center ">
              <div className="text-white mx-20">
                <p className="text-3xl font-bold">Download FitSnap Now </p>
                <p className="text-2xl font-semibold">
                  and turn every workout into a visual masterpiece
                </p>
              </div>
              <div className="flex gap-10 mx-20 my-7">
                <button>
                  <img src="7.png" className="w-32 h-10" alt="" />
                </button>
                <button>
                  <img src="9.jpg" className="w-32 h-10" alt="" />
                </button>
              </div>
          </div>
          <div className=" flex pl-20">
            <img src="5.png" className=" absolute w-[25rem] pr-50" alt="" />
            <img src="6.png" className=" absolute w-[25rem] mt-10 ml-[15%]" alt="" />
          </div>
        </div>
        <div className="w-screen h-28 bg-white rounded-t-[50%]  -mt-20"></div>
        
      {/* {``````````````````````````````````````````````````````````````````````````````````````} */}
      <div className="w-full">
        <h2 className="font-bold text-2xl text-blue-900 mx-auto w-[50%] mt-28 text-center">
          Elevate Your Fitness: The AI Workout Plan – Precision, Progression,
          Perfection
        </h2>

        <p className="mx-auto text-center w-[50%] my-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
          augue. Integer congue, libero nec congue fermentum, neque turpis
          eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt{" "}
        </p>
      </div>
      <h3 className="font-bold text-2xl text-blue-900 mx-auto w-[50%] mt-20 text-center">
          Discover the other exercise at FitSnap
        </h3>
      <div className="flex justify-evenly mt-10 items-center w-[60%] mx-auto">
          <div className="text-center w-[33%] flex flex-col items-center">
            <img src="2.png" className="w-[12rem]" alt="" />
            <p className="font-semibold text-blue-900 mt-2">Chest Press</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            </p>
            <div className="mt-3 flex items-center text-blue-950 border-b border-b-blue-950">
              <p>Read More...</p>
            </div>
          </div>
          <div className="text-center w-[33%] flex flex-col items-center">
            <img src="3.png" className="w-[13rem]" alt="" />
            <p className="font-semibold text-blue-900 ">Deadlift</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            </p>
            <div className="mt-3 flex items-center text-blue-950 border-b border-b-blue-950">
              <p>Read More...</p>
            </div>
          </div>
          <div className="text-center w-[33%] flex flex-col items-center">
            <img src="4.png" className="w-[12rem]" alt="" />
            <p className="font-semibold text-blue-900 mt-2">Crunches</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
            </p>
            <div className="mt-3 flex items-center text-blue-950 border-b border-b-blue-950">
              <p>Read More...</p>
            </div>
          </div>
        </div>

        {/* {footer} */}
        <div className="w-full h-[20rem] mt-10 bg-blue-950">
          <div className="flex gap-10">
            <div className="text-white flex flex-col gap-y-5 my-8 ml-16">
              <p className="text-blue-200 text-xl font-bold ">COMPANY</p>
              <p>Our story</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>About</p>
            </div>
            <div className="text-white flex flex-col gap-y-5 my-8">
              <p className="text-blue-200 text-xl font-bold ">HELP</p>
              <p>FAQ</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
            <div className="flex items-center mt-30 ml-[30%] gap-10">
              <img src="social.png" className="w-[7rem] h-[3rem]" alt="" />
              <div>
                <p className="text-blue-200 font-semibold">
                  STAY UPDATED WITH US
                </p>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="mt-5 bg-white text-white rounded-md p-2"
                />
                <p className="text-white mt-3">Copyright 2023 FitSnap</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
 