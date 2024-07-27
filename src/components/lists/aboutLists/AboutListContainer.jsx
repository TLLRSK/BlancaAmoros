import {AboutList} from "../../../js/index";

const AboutListContainer = ({pageData,listName}) => {
    
    return (
        <div className="about__list-container">
            <h3 className="about__list-title">{pageData.acf.about_lists[0][`${listName}_list`].list_title}</h3>
            <AboutList pageData={pageData} listName={listName}/>
        </div>
    )
}

export default AboutListContainer;