import { NavBar } from "../Components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Home(){
    return(
        <>
            <NavBar/>
            <div className="input-group mx-auto px-3">
                <input type="text" className="form-control"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </div>
        </>
    )
}