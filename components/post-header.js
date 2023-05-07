
export default () => {
    return (
        <div>
            <Row style={{height: "60px",
                display: "flex",
                alignItems: "center"  
                }} >   
                    <Breadcrumb style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <Breadcrumb.Item style={{textDecoration: "none", cursor: "pointer"}} href="/">Нүүр хуудас</Breadcrumb.Item>
                        <Breadcrumb.Item style={{textDecoration: "none", cursor: "pointer"}} href="#">
                            Мэдээ мэдээлэл
                        </Breadcrumb.Item>
                    </Breadcrumb>
            </Row>
        </div>
    )
}