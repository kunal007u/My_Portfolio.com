

export const reducer = (state, action) => {

    if (action.type === 'UPDATE_HOME_PAGE') {
        return {
            ...state,
            name: action.payload.name,
            devloper: action.payload.devloper
        }
    }
    if (action.type === 'PORTFOLIO_SECTION') {
        return {
            ...state,
            name: action.payload.name,
            devloper: action.payload.devloper

        }
    }
    if (action.type === 'DARK_MODE') {
        return {
            ...state,
            DarkMode: !state.DarkMode

        }
    }
    if (action.type === 'ABOUT_HEADER_TITLE') {
        return {
            ...state,
            headerTitle: action.payload.headerTitle,
            headerSubTitle: action.payload.headerSubTitle
        }

    }
    if (action.type === 'HOME_HEADER_TITLE') {
        return {
            ...state,
            headerTitle: action.payload.headerTitle,
            headerSubTitle: action.payload.headerSubTitle
        }

    }
    if (action.type === 'EXPERIENCE_HEADER_TITLE') {
        return {
            ...state,
            headerTitle: action.payload.headerTitle,
            headerSubTitle: action.payload.headerSubTitle
        }

    }
    if (action.type === 'EDUCATION') {
        return {
            ...state,
            MyEducation: [action.payload]
        }

    }
    if (action.type === 'PORTFOLIO_HEADER_TITLE') {
        return {
            ...state,
            headerTitle: action.payload.headerTitle,
            headerSubTitle: action.payload.headerSubTitle,
        }

    }
    if (action.type === "PORT_DATA") {
        return {
            ...state,
            portfolioData: action.payload.portfolioData,

        }
    }
    if (action.type === "SERVICES_DATA") {
        return {
            ...state,
            ServicesData: action.payload.ServicesData

        }
    }
    if (action.type === "FILTER_IMAGES") {
        return {
            ...state,
            selectCategory: action.payload

        }
    }
    else {
        return { ...state }

    }
}

