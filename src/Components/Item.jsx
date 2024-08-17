import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';


export function Item({itemName, itemImageSource, itemPrice, itemSold}){
    
    return( 
        <>
        <div className="col">
            <div className='item-holder align-items-stretch'>
                <div className="card my-2" >
                <img src={itemImageSource} ></img>
                    <div className="cardBody mx-1 my-1 p-2">
                        <h5 className="card-title text-truncate">{itemName}</h5>
                        <div className="card-text d-flex d-flex justify-content-between"> 
                            <p>${itemPrice}</p>
                            <p>{itemSold}</p>
                        </div>
                        <button className='btn btn-warning w-100'><i className="bi bi-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}