import { Link } from "react-router-dom"

const LinkComponent = (props) => {
    const {to, className, children, changeRoute} = props;
    
    return <>
        <Link 
            to={to}
            className={className}
            onClick={(e) => changeRoute(e, to)}
        >
            {children}
        </Link>
    </>
}

export default LinkComponent;