import React from 'react';
import { AutoTextSize } from "auto-text-size";

const NumericFormat = ({value, maxLimit, className, autoTextSize}) => {
    let formattedText = Number(value);
    if(maxLimit && value.toString().length > maxLimit) {
        // if max limit enabled convert the number to scientific notation if larger than maxLimit 
        formattedText = Number.parseFloat(formattedText).toExponential(2);
    }
        //add thousand separator
        formattedText = formattedText.toLocaleString();

        // for result lets add auto text resize to make text smaller if there is no space left and vice versa
        
  return <span className={`select-None ${className}`}>
    {
        autoTextSize ?(
            <AutoTextSize
                mode={autoTextSize.mode}
                minFontSizePx={autoTextSize.minFontSize}
                maxFontSizePx={autoTextSize.maxFontSize}
                as={"p"}
                className="ml-auto"
        >
            {formattedText}
        </AutoTextSize> 
        ) : (
        formattedText
    )}
  </span>;
};

export default NumericFormat;
