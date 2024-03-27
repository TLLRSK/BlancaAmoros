import { LinkComponent } from "../../js/index";

const Contact = (props) => {
    const {pageData, contentRef, isLoading, changeRoute} = props;

    return <>
        {pageData && (
            <section className={`contact ${isLoading ? "" : "ldd"}`} ref={contentRef}>
                <ul className="contact__list">
                    <li className="contact__list-item">
                        <p>Email</p>
                        <LinkComponent to={`mailto:${pageData.acf.contact_info.email}`} className="link link--contact link--line-tr-underline">
                            {pageData.acf.contact_info.email}
                        </LinkComponent>
                    </li>
                    <li className="contact__list-item">
                        <p>Instagram</p>
                        <LinkComponent to={pageData.acf.contact_info.instagram.instagram_user} className="link link--contact link--line-tr-underline">
                            {pageData.acf.contact_info.instagram.instagram_user}
                        </LinkComponent>
                    </li>
                    <li className="contact__list-item">
                        <p>Nws</p>
                        <LinkComponent to={pageData.acf.contact_info.suscribe.suscribe_url} className="link--contact link--line-tr-underline" target="_blank">
                            {pageData.acf.contact_info.suscribe.suscribe_text}
                        </LinkComponent>
                    </li>
                    <li className="contact__list-item">
                        <p>Imp</p>
                        <LinkComponent to="/impressum" className="link link--contact link--line-tr-underline" changeRoute={changeRoute}>Impressum</LinkComponent>
                    </li>
                </ul>
            </section> 
        )}
    </>
}

export default Contact;