import { NavButton } from "./NavButton"

const buttons = [
    {
      name: "O nas",
      hook: "about-us"
    },
    {
      name: "Aktulaności",
      hook: "news"
    },
    {
      name: "Kontakt",
      hook: "contact-us"
    }
  ];
export const Nav = ({ isDarkMode, toggleDarkMode }) =>{
    
    

    return(
        <div className="nav sticky top-0 bg-gray-200/70 dark:bg-nav-dark/70 w-full f-ic-c relative z-10 space-y-4 py-4">
            <img src="/src/assets/images/logo.png" alt="logo" className="w-14"/>
            <img 
                src={`/src/assets/images/${isDarkMode ? "sun" : "moon"}.png`} 
                alt="dark mode toggle" 
                className="w-8 absolute top-4 right-10 md:right-20 2xl:right-32 cursor-pointer" 
                onClick={toggleDarkMode}
            />
            <div className="inline-flex w-11/12 md:w-7/12 2xl:w-4/12 justify-evenly" >
                {buttons.map((btn)=>(
                    // eslint-disable-next-line react/jsx-key
                    <NavButton
                        name={btn.name}
                        hook={btn.hook}
                    />
                ))}
            </div>
        </div>

    )
}