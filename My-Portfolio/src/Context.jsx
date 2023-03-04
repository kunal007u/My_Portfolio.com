
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducer";
import { ProjectsData } from "./data";
import { ServicesJsonData } from "./data";
const AppContext = createContext();



const Appprovider = ({ children }) => {
    const initialState = {

        DarkMode: false,
        headerTitle: "",
        headerSubTitle: "",
        portfolioData: [],
        ServicesData:[],
        selectCategory: "All"


    }
    const [state, dispatch] = useReducer(reducer, initialState);



    const UpdateAboutHeaderTitle = () => {
        return dispatch({
            type: "ABOUT_HEADER_TITLE",
            payload: {
                headerTitle: "About Me",
                headerSubTitle: "Know me more"
            }
        })
    }
    const UpdateHomeHeaderTitle = () => {
        return dispatch({
            type: "HOME_HEADER_TITLE",
            payload: {
                headerTitle: "Services",
                headerSubTitle: "What I do"
            }
        })
    }

    const UpdateExperienceHeaderTitle = () => {
        return dispatch({
            type: "EXPERIENCE_HEADER_TITLE",
            payload: {
                headerTitle: "Summary",
                headerSubTitle: "Resume"
            }
        })
    }
    const UpdatePortfolioHeaderTitle = () => {
        return dispatch({
            type: "PORTFOLIO_HEADER_TITLE",
            payload: {
                headerTitle: "PORTFOLIO",
                headerSubTitle: "My Work",

            }
        })
    }

    const PortData = () => {
        dispatch({

            type: "PORT_DATA",
            payload: {
                portfolioData: ProjectsData,
            }
        })
    }
    const ServeData = () => {
        dispatch({

            type: "SERVICES_DATA",
            payload: {
                ServicesData: ServicesJsonData
            }
        })
    }


    const darkMode = () => {
        return dispatch({
            type: "DARK_MODE",

        })
    }
    const FilterImg = (Category) => {
        return dispatch({
            type: "FILTER_IMAGES",
            payload:
            {
                selectCategory:Category
            }

        })
    }
   

    return (
        <AppContext.Provider value={{ ...state, darkMode, state, UpdateAboutHeaderTitle, UpdateHomeHeaderTitle, UpdateExperienceHeaderTitle, UpdatePortfolioHeaderTitle, PortData,ServeData ,FilterImg}}>
            {children}
        </AppContext.Provider>
    )
}

const useGloablContext = () => {
    return useContext(AppContext);

}



export { AppContext, Appprovider, useGloablContext }
