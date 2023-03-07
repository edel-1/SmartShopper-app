import React, { useState } from "react";


import StepNavigation from "./StepNavigation";

function Circles() {
  const labelArray = ["Step 1", "Step 2", "Step 3"];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }
 
  
  
  console.log(currentStep)

  return (
    <div className="smallCircles d-flex justify-content-between">
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      ></StepNavigation>
     

    
    </div>
   
    
  );
}
 
export default Circles;
