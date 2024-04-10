import {AboutShowsSublistContainer} from "../../../components";

const AboutShowsList = ({pageData}) => {
    
    return (
        <div className="about__list-container--sublists">
            <h3 className="about__list-title">{pageData.acf.about_lists[0].shows_list.list_title}</h3>
            <AboutShowsSublistContainer pageData={pageData}/>
        </div>
    )
}

export default AboutShowsList;