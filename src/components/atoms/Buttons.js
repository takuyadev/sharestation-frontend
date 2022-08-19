// Base styles for every button, only edit this for large scale changes.
function BaseBtn({children, onClick, style}){
    return (
        <button 
            onClick={onClick} 
            className={`flex flex-row gap-2 px-4 py-3 pointer ease-in-out duration-100 focus:outline-none ${style && style} justify-center`} 
        >
            {children}
        </button>
    )
}

BaseBtn.defaultProps = {
    children: "Default",
    onClick: () => console.log("Clicked!")
}

//Variations of the BaseButtons
function PrimaryBtn({children, onClick}){
    return (
        <BaseBtn
            onClick={onClick} 
            style={`rounded-lg bg-indigo-600 text-white hover:bg-indigo-900 `}
        >
            {children}
        </BaseBtn>
    )
}

function SecondaryBtn({children, onClick}){
    return (
        <BaseBtn
            onClick={onClick} 
            style={`rounded-lg bg-white text-black hover:bg-slate-600 hover:text-white`}
        >
            {children}
        </BaseBtn>
    )
}

function BorderBtn({children, onClick}){
    return (
        <BaseBtn
            onClick={onClick} 
            style={`rounded-lg border-2 border-white text-white hover:bg-white/50 hover:text-black`}
        >
            {children}
        </BaseBtn>
    )
}

function RndPrimaryBtn({children, onClick}){
    return (
        <BaseBtn 
            onClick={onClick} 
            style={`rounded-full bg-indigo-600 text-white hover:bg-indigo-900`}
        >
            {children}
        </BaseBtn>
    )
}


export { PrimaryBtn, SecondaryBtn, RndPrimaryBtn, BorderBtn }
