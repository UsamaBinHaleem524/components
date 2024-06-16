import className from 'classnames';
function Button({children,
primary,
secondary,
success,
warning,
danger,
outline,
rounded,
...rest
})
{
   const classes=className('flex items-center px-3 py-1.5 border my-1' ,{
   'bg-blue-500 border-blue-500 text-white ':primary && !outline,
   'bg-gray-500 border-gray-500 text-white ':secondary && !outline,
   'bg-green-500 border-green-500 text-white ':success && !outline,
   'bg-yellow-500 border-yellow-500 text-white ':warning  && !outline,
   'bg-red-500 border-red-500 text-white ':danger  && !outline,
   'rounded-full':rounded,
   'bg-white':outline,
    'text-blue-500 border-blue-500':outline && primary,
    'text-gray-500 border-gray-500':outline && secondary,
    'text-green-500 border-green-500':outline && success,
    'text-yellow-500 border-yellow-500':outline && warning,
    'text-red-500 border-red-500':outline && danger,
   })

    return <button {...rest} className={classes}>{children}</button>
};
Button.propTypes={
    checkVariationValue:({primary,
        secondary,
        success,
        warning,
        danger})=>{
    const count=Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(warning)+Number(danger);
    if(count>1){
        console.log("Only one of the secondary, primary ,success,warning and danger must be true");
    }
    }
}


export default Button;