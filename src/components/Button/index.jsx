import Button from '@mui/material/Button';

const ButtonComponent = ({ label, style, variant, uppercase, ...rest }) => {
    return <Button 
                {...rest}
                variant={variant}
                style={{
                    width: rest.fullWidth ? 'calc(100% - 16px)' : 'auto',
                    border: null,
                    textTransform: uppercase ? 'uppercase' : 'none',
                    padding: 8,
                    ...style
                }}>{label}</Button>
}

ButtonComponent.defaultProps = {
    style: {},
    variant: "contained",
    uppercase: true,
}

export default ButtonComponent;