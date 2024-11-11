export const SingleContact = (props) =>{
    return (
        <a 
            href={props.IsSocial ? `https://${props.icon}.com` : `#`} 
            target={props.IsSocial ? `_blank` : `_self`} 
            className={`f-ic ${props.otherClass}`}
        >
            <i className={`icon icon-${props.icon} text-4xl`}></i>
            <p className="media-name">{props.title}</p>
        </a>
    )
}