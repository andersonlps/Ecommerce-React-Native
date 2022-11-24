import api from './api'

export const getCategorias = async () => {
    try {
        const { data } = await api.get("/categoria")
        console.log(data)
        return data
    } catch(e) {
        console.log(e)
    } 
}

export const newCategoria = async (novaCategoria) => {
    try{
        const categoria = await api.post("/categoria", novaCategoria)
        return categoria
    } catch(e) {
        console.log(e)
    }
}

export const deleteCategoria = async (id) => {
    try{
        const deleteCategoria = await api.delete("/categoria/"+id)
        return deleteCategoria
    } catch(e) {
        console.log(e)
    }
}

export const updateCategoria = async (categoria) => {
    try{
        const updateCategoria = await api.put("/categoria/"+categoria.id, categoria)
        return updateCategoria
    } catch(e) {
        console.log(e)
    }
}