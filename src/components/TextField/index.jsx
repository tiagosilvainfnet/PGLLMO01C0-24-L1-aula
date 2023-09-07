const TextField = ({ label, value, onChange, type }) => { 
    return <>
        <label>{label}: </label>
        <input type={type} value={value} onChange={onChange}/>
    </>
}

TextField.defaultProps = {
    type:"text"
}

export default TextField;