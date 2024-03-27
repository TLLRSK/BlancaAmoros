const Impressum = (props) => {
    const {pageData, contentRef, isLoading} = props;

    return <>
        {
            pageData && (
                <section className={`impressum ${isLoading ? "" : "ldd"}`} ref={contentRef}>
                    {pageData?.acf.impressum_text.split('\r\n').map((p, index) => (
                        <p key={index} className="tt--none">{p}</p>
                    ))}
                </section>
            )
        }
    </>
}

export default Impressum;