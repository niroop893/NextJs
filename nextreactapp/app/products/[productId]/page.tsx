export default function ProductDetails( {params, } : {params:{productId: string};} ){
    return <h1>Details About Products {params.productId}</h1>
}