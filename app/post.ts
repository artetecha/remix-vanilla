export const POST_API_ENDPOINT = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

export async function getPosts() {
    try {
        const response = await fetch( POST_API_ENDPOINT );
        const data = await response.json();
        const cleanData = data.map( ( item ) => {
            const id = item.id;
            const url = item.link;
            const title = item.title.rendered || " ";
            const postType = item._embedded[ "wp:term" ][ 0 ][ 0 ]?.name || "Uncategorized";
            const postCategory = item._embedded[ "wp:term" ][ 2 ][ 0 ]?.name;
            const postCategorySlug = item._embedded[ "wp:term" ][ 2 ][ 0 ]?.slug || "";
            const timeStamp = new Date( item.date ).toUTCString();
            const authorName = item._embedded.author[ 0 ].name;
            const authorLink = item._embedded.author[ 0 ].link;
            let postFeaturedMediaAlt,
                postFeaturedMediaLink = "";
            const postFeaturedMedia = item.featured_media;

            if (
                item._embedded[ "wp:featuredmedia" ] &&
                item._embedded[ "wp:featuredmedia" ][ 0 ]
            ) {
                postFeaturedMediaAlt =
                    item._embedded[ "wp:featuredmedia" ][ 0 ].alt_text || "";

                postFeaturedMediaLink =
                    item._embedded[ "wp:featuredmedia" ][ 0 ].link || "";
            }

            return {
                id,
                url,
                title,
                postType,
                postCategory,
                postCategorySlug,
                timeStamp,
                authorName,
                authorLink,
                postFeaturedMedia,
                postFeaturedMediaAlt,
                postFeaturedMediaLink,
            };
        } );
        return cleanData;
    } catch ( err ) {
        console.log( err );
    }
};
