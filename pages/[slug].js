import {Row, Col} from "react-bootstrap"
import { getPostBySlug, getPaginatedPosts } from "@/lib/api";
import BlockContent from '@sanity/block-content-to-react';
import Layout from "components/layout"
import moment from "moment";
import {urlFor} from "lib/api"
import {useRouter} from "next/router"

export default ( {post} ) => {

    const router = useRouter();

    if(router.isFallback) return 
    <Layout>
        <div>
            Түр хүлээн үү.... 
        </div>
    </Layout>
    return (
        <div>
            <Layout>
                <Row>
                    <Col md="2">
                    </Col>
                    <Col md="8">
                        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

                        <div className="blog-detail-header mt-5">
                            <p className="lead mb-5">
                                <img
                                    src="https://scontent.fuln11-1.fna.fbcdn.net/v/t1.18169-9/22281730_1423775904398544_3435832120561518845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=03_9iOGPse8AX9g_KWK&_nc_ht=scontent.fuln11-1.fna&oh=00_AfBNQ2YrQUjdVqDV5xsZdNCBqed5Lzr5gBuFvXWBNbb7dw&oe=647DEB6F"
                                    className="rounded-circle mmr-3"
                                    height="50px" 
                                    width="50px" 
                                    style={{marginRight: "15px"}}
                                />
                                Т.Билгүүнтөгөлдөр, {moment(post.date).subtract(10, 'days').calendar()}
                            </p>
                            <hr/>
                            <h2 className="font-weight-bold blog-detail-header-title mb-2">
                                {post.title}
                            </h2>
                            <h4 className="blog-detail-header-subtitle mb-5" style={{color: "#0d6efd"}}>{post.subtitle}</h4>
                            <img 
                                className="img-fliud rounded"
                                src={urlFor(post.image).height(600).url()}
                                width="auto"
                                height="auto"
                                alt=""
                            />
                        </div>
                        <br/>
                        <BlockContent 
                            blocks={post.content} 
                            serializers={serializers} 
                            imageOptions={{w: 720, h: 420, fit: 'max'}} 
                        />
                    </Col>
                    <Col md="2">
                    </Col>
                </Row>
            </Layout>
        </div>
    ) 
         
};

const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          {props.node.code}
          <div className="code-filename">{props.node.filename}</div>
        </pre>
        ),
      image: (props) => (
        <div className={`blog-image blog-image-${props.node.position}`}>
            <img src={urlFor(props.node).height(400).url()}/>
            <div className="code-filename" style={{text: "center"}}> 
                {props.node.alt}
            </div>
        </div>
        ),
    },
  }


export const getStaticProps = async ({params}) => {

    const post = await getPostBySlug(params.slug);
  
    return {
      props: {
        post: post[0]
      }
    }
  };


  export const getStaticPaths = async () => {

    const posts = await getPaginatedPosts(0, 6);
    
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),

        fallback: true,
    }
  };