export default function BlogCard( { blog } ) {
    const {
        postCategory,
        url,
        postFeaturedMedia,
        postFeaturedMediaAlt,
        title,
        authorLink,
        authorName,
        postType,
        timeStamp,
    } = blog;
    return (
        <div className="col-4 col-small-12 col-medium-3 p-card--highlighted post-card u-equal-height">
            <h1 className="post-card__heading font-weight-regular-text">
                { postCategory }
            </h1>
            <div className="u-no-padding post-card__content">
                <img
                    className="p-card__image"
                    alt={ postFeaturedMediaAlt }
                    src={ postFeaturedMedia }
                />
                <div className="p-card__inner u-equal-height">
                    <h3>
                        <a href={ url }>{ title }</a>
                    </h3>
                    <p>
                        <em>
                            By <a href={ authorLink }>{ authorName }</a> on { timeStamp }
                        </em>
                    </p>
                </div>
                <hr className="u-no-margin--bottom"/>
                <div className="p-card__inner">{ postType } </div>
            </div>
        </div>
    )
}