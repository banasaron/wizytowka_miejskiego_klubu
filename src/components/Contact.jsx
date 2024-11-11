import { SingleContact } from "./SingleContact"

const contacts= [
    {
        icon: "mail-alt",
        title: "email@email.com",
        IsSocial: false
    },
    {
        icon: "phone",
        title: "111-222-333",
        IsSocial: false,
        otherClass: "xl:justify-start"
    },
    {
        icon: "facebook",
        title: "Facebook",
        IsSocial: true
    },
    {
        icon: "instagram",
        title: "Instagram",
        IsSocial: true
    },
    {
        icon: "twitter",
        title: "X/Twitter",
        IsSocial: true
    },
]

// eslint-disable-next-line react/prop-types
export const Contact = ({heading}) =>{
    return (
        <div id="contact-us" className="f-ic-c pb-10 xl:w-1/2 mt-8 mx-auto">
            <h3 className="heading mx-12 mb-10">{heading}</h3>
            <div className="f-ic-c xl:flex-row xl:w-full xl:justify-between">
                <div className="mb-10 xl:mb-0 xl:space-y-5">
                    {contacts.map((single_contact)=>(
                        // eslint-disable-next-line react/jsx-key
                        single_contact.IsSocial ? "" : <SingleContact otherClass={single_contact.otherClass} icon={single_contact.icon} title={single_contact.title} IsSocial={single_contact.IsSocial}/>
                    ))}

                </div>
                <div className="f-bt w-9/12 md:w-1/4 lg:w-3/4 xl:w-1/4 xl:flex-col xl:space-y-5">
                    {contacts.map((single_contact)=>(
                        // eslint-disable-next-line react/jsx-key
                        single_contact.IsSocial ? <SingleContact icon={single_contact.icon} title={single_contact.title} IsSocial={single_contact.IsSocial}/> : "" 
                    ))}
                </div>
            </div>
          </div>
     )
}