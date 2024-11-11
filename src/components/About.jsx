// eslint-disable-next-line react/prop-types
export const About = ({heading}) =>{
    return(
        <div id="about-us" className="text-center flex flex-col relative">
            <h3 className="heading my-12">{heading}</h3>
            <img src="/src/assets/images/ball_bg.png" alt="ball-bg" className="ball-bg md:block dark:hidden" />
            <img src="/src/assets/images/ball_bg_darker.png" alt="ball-bg" className="ball-bg dark:md:block" />
            <p className="text-left mb-14 2xl:mt-14 mx-6 2xl:mr-20 text-base 2xl:text-lg w-1/3 2xl:w-1/4 self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam dignissimos harum nihil maxime explicabo dolores enim eveniet quas excepturi obcaecati, modi aliquid nulla nam unde, soluta veritatis sint eius!</p>
        </div>
    );
}