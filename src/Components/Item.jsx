import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';


export function Item({itemName, itemImageSource, itemPrice, itemSold}){
    
    return( 
        <>
        <div className='item-holder align-items-stretch'>
            <div className="card mx-3 my-1" >
            <img src={itemImageSource} className="card-img-top" ></img>
                <div className="cardBody mx-2 p-2">
                    <h5 className="card-title">{itemName}</h5>
                    <p className="card-text">{itemPrice} {itemSold}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </>
    )
}