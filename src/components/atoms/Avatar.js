function Avatar({url, alt}){
    return(
        <img src={url} className="h-14 w-14 object-cover rounded-full"/>
    )
}

Avatar.defaultProps = {
    url: "./img/avatar.jpg"
}

export default Avatar