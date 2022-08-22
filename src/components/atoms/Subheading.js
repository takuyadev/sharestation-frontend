function Subheading({children}) {
    return (
        <h2 className="text-gray-400">{children}</h2>
    )
}

Subheading.defaultProps = {
    children: "Default Subheading"
}

export default Subheading