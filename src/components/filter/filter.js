import {connect} from 'react-redux';
import {FilterProducts, sortProducts} from '../../redux/products/productsAction';

const Filter =(props)=>{
    return(
        <div className="filter"> 
        <div className="filter-result">{props.filterProducts.length} Products</div>
        <div className="filter-sort">Order  {" "}
        <select value={props.sort}  onChange={(e)=>props.sortProduct(props.filterProducts,e.target.value)}>
         <option value="letest">Latest</option>
         <option value="lowest">lowest</option>   
         <option value="highest">highest</option>   

            </select></div>
        <div className="filter-size">Filter {" "} 
        <select value={props.filter} onChange={(e)=>props.FilterProduct(props.products,e.target.value)}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>

            </select></div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
      sort:state.product.sort,
      size:state.product.size,
      filterProducts:state.product.filteredProducts,
      products:state.product.product
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        FilterProduct:(products,size)=>dispatch(FilterProducts(products,size)),
        sortProduct:(products,sort)=>dispatch(sortProducts(products,sort))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)