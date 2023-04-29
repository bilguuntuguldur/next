import {Media, Image} from "react-bootstrap"

export default () => (
    <Media className="mb-4 admin-intro">

        <Image 
        roundedCircle
        width={150}
        height={150}
        className="mr-3"
        src="logo.png"
        alt="Logo image"
        />
        <div>
            <h5 className="font-weight-bold mb-0">Мэдээ, мэдээлэлийн нэгдсэн портал сайт</h5>
            <p className="welcome-text">Орчин үеийн технологийн талаар сонирхолтой мэдээ мэдээлэл 
            цаг алдалгүй оруулна. Манай сайттай хамт байгарай!..</p>
        </div>

    </Media>
)