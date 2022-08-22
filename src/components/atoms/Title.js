function Title({children}){
    return (
        <h1 className="text-lg font-bold">
            {children}
        </h1>
    )
}

Title.defaultProps = {
    children: "Default Title"
}

export default Title