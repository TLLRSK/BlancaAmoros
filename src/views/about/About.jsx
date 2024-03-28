import getImage from "../../js/utils";
const About = (props) => {
    const {pageData, mediaData, contentRef, isLoading} = props;

    return <>
        {
            pageData && mediaData && (
                <section className={`about ${isLoading ? "" : "ldd"}`} ref={contentRef}>
                    <header className="header--section about__header"> 
                        <div className="about__bio-grid">
                            <p className="about__bio-grid-item--name">{pageData.acf.bio.name}</p>
                            <p className="about__bio-grid-item--year">{pageData.acf.bio.year}</p>

                            <div className="about__bio-grid-item--location">
                                <p>{pageData.acf.bio.location.city},</p>
                                <p>{pageData.acf.bio.location.country}</p>
                            </div>
                        </div>
                    </header>
                    
                    <main className="about__main">
                        <img 
                            src={getImage(pageData.acf.bio.portrait, mediaData)?.source_url}
                            srcSet={`
                                  ${getImage(pageData.acf.bio.portrait, mediaData)?.media_details.sizes.thumbnail.source_url} 360w,
                                  ${getImage(pageData.acf.bio.portrait, mediaData)?.media_details.sizes.medium.source_url} 720w,
                                  ${getImage(pageData.acf.bio.portrait, mediaData)?.source_url} 1200w
                                `}
                            alt={getImage(pageData.acf.bio.portrait)?.text_alt}
                            className="img--about"
                        />
                        <div className="about__list-container">
                            <h3 className="about__list-title">{pageData.acf.about_lists[0].education_list.list_title}</h3>

                            <ul className="about__list">
                                {pageData.acf.about_lists[0].education_list.education_list_item.map((el,i) => (
                                    <li key={i} className="about__list-item">
                                        <div className="about__list-item-date">
                                            <p>{el.education_list_item.year}</p>
                                        </div>
                                        <div className="about__list-item-description">
                                            <p>{el.education_list_item.description}</p>
                                        </div>
                                        <div className="about__list-item-location ta--right">
                                            <p>{el.education_list_item.location.city}/</p>
                                            <p>{el.education_list_item.location.country}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="about__list-container--show">
                            <h3 className="about__list-title">{pageData.acf.about_lists[0].shows_list.list_title}</h3>
                           
                            <div className="about__sublist-container">
                                <h4 className="about__sublist-title">{pageData.acf.about_lists[0].shows_list.shows_list_solo.list_title}</h4>
                                
                                <ul className="about__list">
                                    {pageData.acf.about_lists[0].shows_list.shows_list_solo.shows_list_item.map((el, i) => {
                                        return <li key={i} className="about__list-item--show">

                                            <div className="about__list-item-date--show">
                                                <p>{el.shows_list_item.date.month}</p>
                                                <p>{el.shows_list_item.date.year}</p>
                                            </div>
                                            
                                            <div className="about__list-item-description--show">
                                                <p>{el.shows_list_item.show_details.show_title}</p>
                                                <p>/{el.shows_list_item.show_details.location.show_room}</p>
                                            </div>

                                            <div className="about__list-item-location"> 
                                                
                                                <p>{el.shows_list_item.show_details.location.city_and_country}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            
                            <div className="about__sublist-container">
                                <h4 className="about__sublist-title">{pageData.acf.about_lists[0].shows_list.shows_list_group.list_title}</h4>
                                
                                <ul className="about__list">
                                    {pageData.acf.about_lists[0].shows_list.shows_list_group.shows_list_item.map((el, i) => {
                                        return <li key={i} className="about__list-item--show">

                                            <div className="about__list-item-date--show">
                                                <p>{el.shows_list_item.date.month}</p>
                                                <p>{el.shows_list_item.date.year}</p>
                                            </div>
                                            
                                            <div className="about__list-item-description--show">
                                                <p>{el.shows_list_item.show_details.show_title}</p>
                                                <p>/{el.shows_list_item.show_details.location.show_room}</p>
                                            </div>

                                            <div className="about__list-item-location"> 
                                                
                                                <p>{el.shows_list_item.show_details.location.city_and_country}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="about__list-container"> 
                            <h3 className="about__list-title">{pageData.acf.about_lists[0].others_list.list_title}</h3>
                            
                            <ul className="about__list">
                                {pageData.acf.about_lists[0].others_list.others_list_item.map((el,i) => (
                                    <li key={i} className="about__list-item">
                                        <div className="about__list-item-date">
                                            <p>{el.others_list_item.year}</p>
                                        </div>
                                        <div className="about__list-item-description">
                                            <p>{el.others_list_item.description}</p>
                                        </div>
                                        <div className="about__list-item-location ta--right">
                                            <p>{el.others_list_item.location.city}/</p>
                                            <p>{el.others_list_item.location.country}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </section>
            )
        }
    </>
  };
  
  export default About;