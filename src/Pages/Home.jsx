import { NavBar } from "../Components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ItemHolder } from "../Components/ItemHolder";

export function Home(){
    return(
        <>
            <NavBar/>
            <div className="input-group mx-auto px-3 mw-sm-50 ">
                <input type="text" className="form-control"/>
                <button className="btn btn-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
            </div>
            <ItemHolder/>
        </>
    )
}