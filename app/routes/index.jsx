import { useLoaderData } from '@remix-run/react';
import {
    Layout,
    BlogCard
} from '../components';
import { getPosts } from "../post";

export async function loader() {
    const data = await getPosts();

    if ( data.error ) {
        throw new Response( "Error loading data", { status: 500 } );
    }

    return data;
}

export default function Index() {
    const blogs = useLoaderData();
    return (
        <Layout>
            {
                blogs.length > 0 ? (
                    blogs.map( blog => (
                        <BlogCard key={ blog.id } blog={ blog }/>
                    ) )
                ) : (
                    <p>No blog posts found!</p>
                )
            }
        </Layout>
    );
}
