
import {
    Card, CardBody, CardTitle, CardText, ListGroup,
    ListGroupItem
} from "reactstrap";
import { Link } from "react-router-dom";


/** Show limited information about a company
 *
 * Is rendered by Companies to show a "card" for each company.
 *
 * Companies -> CompanyCard
 */


const CompanyCard = ({ name, handle, description, logoUrl }) => {

    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        <Link to={`/companies/${handle}`} key={handle}>
                            <ListGroupItem>{name}</ListGroupItem>
                        </Link>

                    </CardTitle>
                    <CardText className="font-italic">{description}</CardText>
                    {(logoUrl ? <img src={logoUrl}></img> : "no image")}
                </CardBody>
            </Card>
        </section>
    );
}
export default CompanyCard;