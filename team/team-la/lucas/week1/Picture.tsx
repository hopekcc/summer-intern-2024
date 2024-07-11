
function Picture() {
    const imageUrl = './src/assets/react.svg'

    const handleClick = (e: any) => e.target.style.display = "none"

    return(<img onClick={handleClick} src={imageUrl}></img>)
}

export default Picture;