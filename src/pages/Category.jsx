import { useParams } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

const Category = () =>{
    let {catName} = params()

    return(
        
        <MainLayout>
            cat page: {catName}
        </MainLayout>
    )
}

export default Category
