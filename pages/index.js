import {Row, Col, Button} from "react-bootstrap"
import GridItem from "@/components/grid-item"
import {getPaginatedPosts} from "lib/api"
import Layout from "components/layout"
import useSWRInfinite from 'swr/infinite'

const PAGE_LIMIT = 6;

export default function Home( { posts } ) {

  const { data, error, isLoading, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`, {initialData: [posts]});

  // const { data, isLoading, error } = usePosts(posts)


 
  if (isLoading) return <div>Ачаалж байна...</div>
  if (error) return <pre><div>Алдаа гарлаа  {JSON.stringify(error, null, 2)}</div></pre>

  return (
    <Layout>
        {/* <Row>
          <Col md="12">
            <pre>
              {JSON.stringify(posts, null, 2)}
            </pre>
          </Col>
        </Row> */}

        {/* <Row className="mt-5">
          <Col md="12">
            <pre>
              {JSON.stringify(data, null, 2)}
            </pre>
          </Col>
        </Row> */}

        <Row className="mt-5">
          {data.map((page) => (
            page.map((post)=> (
              <Col md="4">
                <GridItem post={post} />
              </Col>
            )))
            )
          } 
        </Row>
        <Row style={{display: "flex", justifyContent: "center"}}>
          {data[data.length-1].length != 0 && ( isValidating ? <div style={{textAlign: "center"}}> Түр хүлээнэ үү ...</div> : <Button onClick={() => setSize(size+1)} className="defaul-button">Цааш үзэх...</Button>)}
        </Row>
    </Layout>
  )
}


export const getStaticProps = async () => {
  const posts = await getPaginatedPosts(0, PAGE_LIMIT);

  return {
    props: {
      posts,
    },
  }
};