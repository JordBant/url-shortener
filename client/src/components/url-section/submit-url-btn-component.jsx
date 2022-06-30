const SubmitUrl = ({inputValue}) => { 

    const sendUrl = async() => {
        try {
            const res = await fetch('./shortener', {

                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    value: inputValue
                })
    
                }
            )
            const shortened = await res.json()
            console.log(shortened)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button className = 'submit-btn' onClick = { sendUrl }/>
    )
}

export default SubmitUrl