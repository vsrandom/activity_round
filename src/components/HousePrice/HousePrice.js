import React from "react"

const housePrice = (props)=>{
    return (
        <div>
            ${props.value.split('_')[1]}K{ props.value.split('_').length > 2 ? "- $"+props.value.split('_')[2]+"K" : "+" }
        </div>
    )
}

export default housePrice;
