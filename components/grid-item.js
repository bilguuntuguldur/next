import {Card, Button} from "react-bootstrap"
import Link from "next/link"
import moment from "moment";
import {urlFor} from "lib/api"

const GridItem = ( {post} ) => {

    moment.locale('en');

    return (
        <Card className="post-item" style={{ width: '100%', marginBottom: "30px"}}>

            <Card.Header className="d-flex flex-row">
                <img
                src="https://scontent.fuln11-1.fna.fbcdn.net/v/t1.18169-9/22281730_1423775904398544_3435832120561518845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=03_9iOGPse8AX9g_KWK&_nc_ht=scontent.fuln11-1.fna&oh=00_AfBNQ2YrQUjdVqDV5xsZdNCBqed5Lzr5gBuFvXWBNbb7dw&oe=647DEB6F"
                className="rounded-circle"
                height="50px"
                width="50px"
                />
                <div style={{marginLeft: "20px"}}>
                    <Card.Title className="font-weight-bold mb-1"> Т.Билгүүнтөгөлдөр </Card.Title>
                    <Card.Text className="card-date">{moment(post.date).subtract(10, 'days').calendar()}</Card.Text>
                </div>
            </Card.Header>

            <Link id="link" href={`/${post.slug}`}>
                <div className="view overlay">
                    <Card.Img variant="top" src={urlFor(post.image).height(400).url()}/>  
                </div> 
            </Link>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="text-uppercase font-weight-bold">
                    {post.subtitle}
                </Card.Text>
                <Link id="link" href={`/${post.slug}`}>
                    <Button variant="primary">Цааш унших</Button>
                </Link>
            </Card.Body>

        </Card>
    )
}

export default GridItem;