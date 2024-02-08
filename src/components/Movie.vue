<template>
    <div>
        <h1 class="title mt-5">Movies</h1>
        <div class="moda">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary openModal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar pelicula
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar pelicula</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="name" v-model="form.name">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Director</label>
                                    <input type="text" class="form-control" v-model="form.director">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Duración</label>
                                    <input type="text" class="form-control" v-model="form.duration">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Categoría</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Selecciona una...</option>
                                        <option value="1">Terror</option>
                                        <option value="2">Romance</option>
                                        <option value="3">Accion</option>
                                        <option value="3">Aventura</option>
                                    </select>
                                    <hr>
                                    <button type="button" class="btn btn-primary">Agregar</button>
                                    <button type="reset" class="btn btn-danger mx-2">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            form: {
                name: '',
                director: '',
                duration: '',
                categoria: ''
            }
        }
    }
}

</script>

<style scoped>
.title {
    text-align: center;
}

.moda {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
</style>