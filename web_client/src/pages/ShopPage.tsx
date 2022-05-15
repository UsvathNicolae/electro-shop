import { makeStyles } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import CustomCard from "../components/Card"
import Navbar from "../components/NavBar"
import { getProducts } from "../service/shopPageService";
import Product from "../types/Product";
import {setOpen} from "../redux/reducers/snackbarReducer";

const useStyles = makeStyles({
  container: {
    margin: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
    width: '100%',
    padding: '30px'
  },
  page: {
    width:'100%',
    height: '100%',
    backgroundColor: "#beccc2",
  },
})

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const styles = useStyles()

  useEffect(() => {
      fetchProducts()
  },[])

  const fetchProducts = async () => {
    try{
      const data = await getProducts('/product/get')
      if(data){
        setProducts(data)
      }
    }catch (error: any){
      console.error(error)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {
          products.map((product) =>
              <React.Fragment key={product.id}>
                <CustomCard
                    description={product.description}
                    id={product.id}
                    img={product.img}
                    price={product.price}
                    title={product.title}
                    quantity={product.quantity}
                />
              </React.Fragment>
          )
        }
      </div>
    </div>
  )
}

export default ShopPage
