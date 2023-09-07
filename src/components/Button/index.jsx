import Button from '@mui/material/Button';

const ButtonComponent = ({ label, style, onClick, variant }) => {
    return <Button 
                variant={variant}
                onClick={onClick} 
                style={{
                    border: null,
                    borderRadius: 4,
                    padding: 8,
                    ...style
                }}>{label}</Button>
}

ButtonComponent.defaultProps = {
    style: {},
    variant: "contained"
}

export default ButtonComponent;