export const SingleNew = (props) =>{
    return (
            <div className="new">
                <p className="text-xl">{props.title}</p>
                <p className="new-date">{props.date}</p>
                <p className="text-sm">{props.desctription}</p>
            </div> 
    )
}