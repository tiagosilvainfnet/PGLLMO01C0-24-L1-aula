import { TextField } from '@mui/material';

const TextFieldComponent = ({ style, label, variant, type, ...rest }) => { 
    return <TextField 
                placeholder={variant === 'filled' ? label : null} 
                label={variant !== 'filled' ? label : null} 
                style={{
                    ...style,
                }}
                className={variant === 'filled' ? "inputRounded" : null}
                {...rest} 
                variant={variant} 
                type={type}/>
}

TextFieldComponent.defaultProps = {
    style: {},
    variant: "outlined",
    type:"text"
}

export default TextFieldComponent;