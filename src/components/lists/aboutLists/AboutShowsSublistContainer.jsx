import {AboutShowListItem} from "../../../js/index";

const AboutShowsSublistContainer = ({pageData}) => {
    return <>
        <div className="about__sublist-container">
            <h4 className="about__sublist-title">{pageData.acf.about_lists[0].shows_list.shows_list_solo.list_title}</h4>
            
            <ul className="about__list">
                {pageData.acf.about_lists[0].shows_list.shows_list_solo.shows_list_item.map((el, i) => {
                    return <AboutShowListItem key={i} el={el}/>
                })}
            </ul>
        </div>
        
        <div className="about__sublist-container">
            <h4 className="about__sublist-title">{pageData.acf.about_lists[0].shows_list.shows_list_group.list_title}</h4>
            
            <ul className="about__list">
                {pageData.acf.about_lists[0].shows_list.shows_list_group.shows_list_item.map((el, i) => {
                    return <AboutShowListItem key={i} el={el}/>
                })}
            </ul>
        </div>
    </>
}

export default AboutShowsSublistContainer;