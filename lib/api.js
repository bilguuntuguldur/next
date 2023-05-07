import client from "lib/sanity"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source)
}



export const getPaginatedPosts = async (page, limit) => {
    const posts = await client.fetch(`*[_type=="post"]{ title, subtitle, date, 'image':image.asset->url,
    'slug':slug.current, publisher} | order(date desc)[${page*limit}...${(page+1)*limit}]`);

    return posts;
}

export const getAllPosts = async () => {
    const posts = await client.fetch(`*[_type=="post"]{ title, subtitle, date, 'image':image.asset->url,
    'slug':slug.current, publisher} | order(date desc)`);

    return posts;
}


export const getPostBySlug = async (slug) => {
    const post = await client.fetch(`*[_type=="post" && slug.current==$slug]{ title,  content[]{..., 'asset': asset->}, subtitle, date, 'image':image.asset->url,
    'slug':slug.current, publisher}`, {slug});
    console.log("====>"+slug)
    return post;
}