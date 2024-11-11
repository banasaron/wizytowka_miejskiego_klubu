import { SingleNew } from "./SingleNew";

const news = [
    {
        title: "Aktualność 1",
        date: "20/05/2024",
        desctription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, nostrum deserunt voluptatum fugit totam rerum asperiores itaque rem vero"
    },
    {
        title: "Aktualność 2",
        date: "13/04/2024",
        desctription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, nostrum deserunt voluptatum fugit totam rerum asperiores itaque rem vero. Veniam veritatis alias nulla assumenda, ab pariatur possimus accusamus exercitationem!"
    }
];


// eslint-disable-next-line react/prop-types
export const News = ({heading}) =>{
    return (
        <div id="news" className="f-ic-c lg:w-9/12 mx-auto lg:mt-20  bg-section-gray/20 dark:bg-section-gray/70">
            <h3 className="heading my-12">{heading}</h3>
            <div className="md:flex lg:justify-between xl:justify-center">
                <div className="md:w-1/2 lg:w-5/12">
                {news.map((singleNew)=>(
                    // eslint-disable-next-line react/jsx-key
                    <SingleNew title={singleNew.title} date={singleNew.date} desctription={singleNew.desctription} />
                ))}
                </div>
                <img src="/src/assets/images/img1.png" alt="img1" className="dark:hidden md:block img_1"/>
                <img src="/src/assets/images/img1_darker.png" alt="img1" className="dark:md:block img_1"/>
            </div>
            
            <h3 className="text-md mb-16 mt-4 mx-2 self-start xl:ml-32">Więcej aktualności jest dostepne na naszym <a href="https://facebook.com" target="_blank"><u>facebooku</u></a></h3>
        </div>
    )
}