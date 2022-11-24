import api from './api'

export const getProdutos = async () => {
    try {
        const { data } = await api.get("/produto")
        console.log(data)
        return data
    } catch(e) {
        console.log(e)
    } 
}

export const newProduto = async (novoProduto) => {
    try{
        const produto = await api.post("/produto", novoProduto)
        return produto
    } catch(e) {
        console.log(e)
    }
}

export const deleteProduto = async (id) => {
    try{
        const deleteProduto = await api.delete("/produto/"+id)
        return deleteProduto
    } catch(e) {
        console.log(e)
    }
}

export const updateProduto = async (produto) => {
    try{
        const updateProduto = await api.put("/produto/" + produto.id, produto)
        return updateProduto
    } catch(e) {
        console.log(e)
    }
}