
function Bhemu({
    name,
    type,
}) {
    console.log("Bhemu", name)
    return(
        <div>
            {name} is a {type}
        </div>
    )
}

export default Bhemu;